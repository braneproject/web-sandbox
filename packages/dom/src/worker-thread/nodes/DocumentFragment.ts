import { Node, NodeType } from './Node.js';
import { PrivateConstructorSymbol } from '#shared/symbols.js';

export class DocumentFragment extends Node {
  constructor() {
    super(PrivateConstructorSymbol, NodeType.DOCUMENT_FRAGMENT_NODE, '#document-fragment');
  }
}
