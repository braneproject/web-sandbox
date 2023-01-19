import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { Node, NodeType, NodeName } from './Node.js';
import { type ParentNode } from '../minxins/ParentNode.js';
import { type ChildNode } from '../minxins/ChildNode.js';
import { type NonDocumentTypeChildNode } from '../minxins/NonDocumentTypeChildNode.js';
import { type Slottable } from '../minxins/Slottable.js';

export abstract class Element extends Node implements
  ParentNode,
  ChildNode,
  NonDocumentTypeChildNode,
  Slottable
{
  constructor(_private: typeof PrivateConstructorSymbol, nodeName: NodeName) {
    super(_private, NodeType.ELEMENT_NODE, nodeName);
    assertPrivateConstructor(_private);
  }
}
