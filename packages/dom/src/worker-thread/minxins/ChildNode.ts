import { Node } from '../nodes/Node.js';

export interface ChildNode {
  before(...nodes: Array<string | Node>): void;
  after(...nodes: Array<string | Node>): void;
  replaceWith(...nodes: Array<string | Node>): void;
  remove(): void;
}
