/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty } from 'lodash';
import { PPLNode } from '../node';
import { GroupBy } from '../expression/group_by';

export class Aggregations extends PPLNode {
  constructor(
    name: string,
    children: PPLNode[],
    private partitions: string,
    private allNum: string,
    private delim: string,
    private aggExprList: PPLNode[],
    private groupExprList: GroupBy,
    private dedupSplitValue: string,
    private indices?: { start: number; end: number }
  ) {
    super(name, children);
  }

  getStartEndIndicesOfOriginQuery(): { start: number; end: number } {
    if (this.indices === undefined) {
      return {
        start: -1,
        end: -1,
      };
    }
    return {
      start: this.indices.start,
      end: this.indices.end,
    };
  }

  getTokens() {
    return {
      partitions: this.partitions,
      all_num: this.allNum,
      delim: this.delim,
      aggregations: this.aggExprList.map((aggTerm) => aggTerm.getTokens()),
      groupby: !isEmpty(this.groupExprList) ? this.groupExprList.getTokens() : '',
      dedup_split_value: this.dedupSplitValue,
    };
  }

  toString() {
    return `stats ${!isEmpty(this.partitions) ? `${this.partitions} ` : ''}${
      !isEmpty(this.allNum) ? `${this.allNum} ` : ''
    }${!isEmpty(this.delim) ? `${this.delim} ` : ''}${this.aggExprList
      .map((aggTerm) => aggTerm.toString())
      .join(', ')}${!isEmpty(this.groupExprList) ? ` ${this.groupExprList.toString()}` : ''}${
      !isEmpty(this.dedupSplitValue) ? ` ${this.dedupSplitValue}` : ''
    }`;
  }
}
