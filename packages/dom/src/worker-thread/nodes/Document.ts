import { PrivateConstructor } from '#shared/symbols.js';

import { DOMImplementation } from '../DOMImplementation.js';
import { Node, NodeType } from './Node.js';

export class Document extends Node {
  static #implementation = new DOMImplementation(PrivateConstructor);

  constructor() {
    super(
      PrivateConstructor,
      NodeType.DOCUMENT_NODE,
      '#document',
    );
  }

  get implementation() {
    return Document.#implementation;
  }
}
