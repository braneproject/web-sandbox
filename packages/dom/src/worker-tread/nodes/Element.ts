import { Node } from './Node.js';
import { type ParentNode } from '../minxins/ParentNode.js';
import { type ChildNode } from '../minxins/ChildNode.js';
import { type NonDocumentTypeChildNode } from '../minxins/NonDocumentTypeChildNode.js';
import { type Slottable } from '../minxins/Slottable.js';

export class Element extends Node implements
  ParentNode,
  ChildNode,
  NonDocumentTypeChildNode,
  Slottable
{
}
