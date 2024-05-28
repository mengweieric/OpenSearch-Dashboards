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

import { CharStream, CommonTokenStream } from 'antlr4ng';
import { CodeCompletionCore } from 'antlr4-c3';
import { OpenSearchPPLLexer } from './generated/OpenSearchPPLLexer';
import { OpenSearchPPLParser } from './generated/OpenSearchPPLParser';
import { QueryManager } from './query_manager';

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
  const q1 = 'source =     opensearch_dashboards_sample_data_logs |    stats    avg(bytes) by agent,     erros     ';
  const q2 = 'source = opensearch_dashboards_sample_data_logs';
  const qm = new QueryManager();
  const statsPartial = qm.queryParser().parse(q1).getStats();
  const nonStatsPartial = qm.queryParser().parse(q2).getStats();
  console.log('statsPartial: ', statsPartial, ' nonStatsPartial: ', nonStatsPartial);
  try {
    const cursorIndex = selectionStart;
    const parser = new OpenSearchPPLParser(
      new CommonTokenStream(new OpenSearchPPLLexer(CharStream.fromString(query)))
    );
    const tree = parser.pplStatement();
    const core = new CodeCompletionCore(parser);
    const candidates = core.collectCandidates(cursorIndex, tree);

    const suggestions = [];
    for (const [tokenType, tokenValues] of candidates.tokens.entries()) {
      const tokenName = getTokenNameByType(parser, tokenType);
      if (tokenName) {
        suggestions.push(tokenName);
      }
    }
    // console.log('suggestions: ', suggestions);
    return suggestions;
  } catch (e) {}
};
