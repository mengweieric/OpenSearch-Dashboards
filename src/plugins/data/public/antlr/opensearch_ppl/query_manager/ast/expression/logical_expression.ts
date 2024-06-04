/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PPLNode, QueryIndices, Tokens } from "../node";

export interface LogicalExpressionConstructorProps {
  name: string;
  children: PPLNode[];
  logicalExpressions: PPLNode;
  indices: QueryIndices;
}

export class LogicalExpression extends PPLNode {
  private readonly logicalExpressions: PPLNode;

  /**
   * Creates an instance of LogicalExpression.
   * @param name - The name of the node.
   * @param children - The children of the node.
   * @param logicalExpressions - The logical expressions nested within this node.
   * @param indices - The start and end indices of the node in the original query.
   */
  constructor({
    name,
    children,
    logicalExpressions,
    indices,
  }: LogicalExpressionConstructorProps) {
    super({ name, children, indices });
    this.logicalExpressions = logicalExpressions;
  }

  /**
   * Gets the tokens of the node.
   * @returns An object containing the logical expressions.
   */
  getTokens(): Tokens {
    return {
      logicalExpressions: this.logicalExpressions.getTokens(),
    };
  }

  /**
   * Gets a string representation of the node.
   * @returns A string representation of the logical expressions.
   */
  toString(): string {
    return `${this.logicalExpressions.toString()}`;
  }
}
