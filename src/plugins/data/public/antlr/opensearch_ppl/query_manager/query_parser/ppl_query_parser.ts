/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PPLSyntaxParser } from '../antlr/ppl_syntax_parser';
import { OpenSearchPPLParser } from '../../generated/OpenSearchPPLParser';
import { StatsAstVisitor } from '../ast/builder/stats_ast_visitor';

export class PPLQueryParser {
  parser: OpenSearchPPLParser | null = null;
  visitor: any = null;
  rawQuery: string = '';

  parse(pplQuery: string) {
    this.rawQuery = pplQuery;
    this.parser = new PPLSyntaxParser().parse(this.rawQuery);
    return this;
  }

  getStats() {
    this.visitor = new StatsAstVisitor();
    let inter = null;
    try {
      inter = this.visitor.visitRoot(this.parser!.root()).getTokens();
    } catch (e) {
      console.error(e);
    }
    return inter;
  }
}
