import { PrivateConstructorSymbol } from '#shared/symbols.js';

import { Node, NodeType } from './Node.js';

export class DocumentFragment extends Node {
  constructor() {
    super(
      PrivateConstructorSymbol,
      NodeType.DOCUMENT_FRAGMENT_NODE,
      '#document-fragment',
    );
  }
}
