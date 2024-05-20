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
import { OpenSearchSQLLexer } from './generated/OpenSearchSQLLexer';
import { OpenSearchSQLParser } from './generated/OpenSearchSQLParser';

const input = 'select * f';
const parser = new OpenSearchSQLParser(
  new CommonTokenStream(new OpenSearchSQLLexer(CharStream.fromString(input)))
);
const tree = parser.sqlStatement();
console.log('tree: ', tree);
const core = new CodeCompletionCore(parser);
const candidates = core.collectCandidates(7);
console.log('candidates: ', candidates);
console.log('parser.vocabulary: ', parser.vocabulary);

// Function to map token types to their names
function getTokenNameByType(type) {
  return parser.vocabulary.getSymbolicName(type);
}

// Generate suggestions
const suggestions = [];
for (const [tokenType, tokenValues] of candidates.tokens.entries()) {
  const tokenName = getTokenNameByType(tokenType);
  if (tokenName) {
    suggestions.push(tokenName);
  }
}

console.log('suggestions: ', suggestions);
