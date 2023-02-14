import { PrivateConstructor } from '#shared/symbols.js';

import { Node, NodeType } from './Node.js';

export class DocumentFragment extends Node {
  constructor() {
    super(
      PrivateConstructor,
      NodeType.DOCUMENT_FRAGMENT_NODE,
      '#document-fragment',
    );
  }
}
