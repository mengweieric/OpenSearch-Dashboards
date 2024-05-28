/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as c3 from 'antlr4-c3';
import {
  CharStream,
  CommonTokenStream,
  Lexer as LexerType,
  ParserRuleContext,
  Parser as ParserType,
} from 'antlr4ng';
import { CodeCompletionCore } from 'antlr4-c3';
import { OpenSearchSQLLexer } from './generated/OpenSearchSQLLexer';
import { OpenSearchSQLParser } from './generated/OpenSearchSQLParser';
import {
  AutocompleteResultBase,
  CursorPosition,
  EnrichAutocompleteResult,
  GetParseTree,
  KeywordSuggestion,
  LexerConstructor,
  OpenSearchSqlAutocompleteResult,
  ParserConstructor,
} from './types';
import { TokenDictionary } from './table';
import { createParser } from './parse';
import { SqlErrorListener } from './sql_error_listerner';
import { findCursorTokenIndex } from './cursor';
import { openSearchSqlAutocompleteData } from './opensearch_sql_autocomplete';

// Function to map token types to their names
const getTokenNameByType = (parser, type) => {
  return parser.vocabulary.getSymbolicName(type);
};

// console.log('suggestions: ', suggestions);

function getExistingTokenNames(tokenStream, lexer, cursorIndex) {
  tokenStream.seek(0); // Reset to start of the stream
  const existingTokens = new Set();
  while (tokenStream.index < cursorIndex) {
    const token = tokenStream.LT(1);
    if (token.type !== lexer.EOF) {
      const tokenName = lexer.symbolicNames[token.type];
      existingTokens.add(tokenName);
    }
    tokenStream.consume();
  }
  return existingTokens;
}

export const getSuggestions = async ({ selectionStart, query }) => {
  console.log('selectionStart: ', selectionStart, ' query: ', query);
  const cursorIndex = selectionStart;
  const parser = new OpenSearchSQLParser(
    new CommonTokenStream(new OpenSearchSQLLexer(CharStream.fromString(query)))
  );
  const tree = parser.sqlStatement();
  const core = new CodeCompletionCore(parser);
  const candidates = core.collectCandidates(cursorIndex, tree);
  console.log('tree: ', tree);
  console.log('candidates: ', candidates);
  console.log('parser.vocabulary: ', parser.vocabulary);
  // Generate suggestions
  // const existingTokenNames = getExistingTokenNames(tokenStream, lexer, cursorIndex);

  const suggestions = [];
  for (const [tokenType, tokenValues] of candidates.tokens.entries()) {
    const tokenName = getTokenNameByType(parser, tokenType);
    if (tokenName) {
      suggestions.push(tokenName);
    }
  }
  console.log('suggestions: ', suggestions);
  return suggestions;
};

const quotesRegex = /^'(.*)'$/;

export interface ParsingSubject<A extends AutocompleteResultBase, L, P> {
  Lexer: LexerConstructor<L>;
  Parser: ParserConstructor<P>;
  tokenDictionary: TokenDictionary;
  ignoredTokens: Set<number>;
  rulesToVisit: Set<number>;
  getParseTree: GetParseTree<P>;
  enrichAutocompleteResult: EnrichAutocompleteResult<A>;
  query: string;
  cursor: CursorPosition;
  context?: ParserRuleContext;
}

export const parseQuery = <
  A extends AutocompleteResultBase,
  L extends LexerType,
  P extends ParserType
>({
  Lexer,
  Parser,
  tokenDictionary,
  ignoredTokens,
  rulesToVisit,
  getParseTree,
  enrichAutocompleteResult,
  query,
  cursor,
  context,
}: ParsingSubject<A, L, P>) => {
  const parser = createParser(Lexer, Parser, query);
  const { tokenStream } = parser;
  const errorListener = new SqlErrorListener(tokenDictionary.SPACE);

  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  getParseTree(parser);

  const core = new c3.CodeCompletionCore(parser);
  core.ignoredTokens = ignoredTokens;
  core.preferredRules = rulesToVisit;
  const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor, tokenDictionary.SPACE);
  console.log('cursorTokenIndex: ', cursorTokenIndex);

  if (cursorTokenIndex === undefined) {
    throw new Error(
      `Could not find cursor token index for line: ${cursor.line}, column: ${cursor.column}`
    );
  }

  const suggestKeywords: KeywordSuggestion[] = [];
  // const { tokens, rules } = core.collectCandidates(cursorTokenIndex, context);
  const { tokens, rules } = core.collectCandidates(cursor.column, context);
  console.log('tokens: ', tokens);
  console.log('rules: ', rules);
  tokens.forEach((_, tokenType) => {
    // Literal keyword names are quoted
    const literalName = parser.vocabulary.getLiteralName(tokenType)?.replace(quotesRegex, '$1');
    // ClickHouse Parser does not give out literal names
    const name = literalName || parser.vocabulary.getSymbolicName(tokenType);

    if (!name) {
      throw new Error(`Could not get name for token ${tokenType}`);
    }

    suggestKeywords.push({
      value: name,
    });
  });

  const result: AutocompleteResultBase = {
    errors: errorListener.errors,
    suggestKeywords,
  };

  return enrichAutocompleteResult(result, rules, tokenStream, cursorTokenIndex, cursor, query);
};

export const getOpenSearchSqlAutoCompleteSuggestions = (
  query: string,
  cursor: CursorPosition
): OpenSearchSqlAutocompleteResult => {
  return parseQuery({
    Lexer: openSearchSqlAutocompleteData.Lexer,
    Parser: openSearchSqlAutocompleteData.Parser,
    tokenDictionary: openSearchSqlAutocompleteData.tokenDictionary,
    ignoredTokens: openSearchSqlAutocompleteData.ignoredTokens,
    rulesToVisit: openSearchSqlAutocompleteData.rulesToVisit,
    getParseTree: openSearchSqlAutocompleteData.getParseTree,
    enrichAutocompleteResult: openSearchSqlAutocompleteData.enrichAutocompleteResult,
    query,
    cursor,
  });
};

const parsed1 = getOpenSearchSqlAutoCompleteSuggestions('SELECT * FROM ', { line: 0, column: 13 });
const parsed2 = getOpenSearchSqlAutoCompleteSuggestions('SE', { line: 0, column: 2 });
console.log('parsed1: ', parsed1);
console.log('parsed2: ', parsed2);
