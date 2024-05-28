/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PPLNode } from '../node';

export class AggregateFunction extends PPLNode {
  constructor(
    name: string,
    children: PPLNode[],
    private statsFunctionName: string,
    private valueExpression: string,
    private percentileAggFunction: string,
    private takeAggFunction: string
  ) {
    super(name, children);
  }

  getTokens() {
    return {
      name: this.statsFunctionName,
      value_expression: this.valueExpression,
      percentile_agg_function: this.percentileAggFunction,
      takeAggFunction: this.takeAggFunction,
    };
  }

  toString(): string {
    if (this.statsFunctionName && this.valueExpression) {
      return `${this.statsFunctionName}(${this.valueExpression})`;
    } else if (this.statsFunctionName) {
      return `${this.statsFunctionName}()`;
    } else if (this.percentileAggFunction) {
      return `${this.percentileAggFunction}`;
    } else if (this.takeAggFunction) {
      return `${this.takeAggFunction}`;
    }
    return '';
  }
}
