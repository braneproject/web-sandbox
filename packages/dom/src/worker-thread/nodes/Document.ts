import { PrivateConstructorSymbol } from '#shared/symbols.js';

import { DOMImplementation } from '../DOMImplementation.js';
import { Node, NodeType } from './Node.js';

export class Document extends Node {
  static #implementation = new DOMImplementation(PrivateConstructorSymbol);

  constructor() {
    super(PrivateConstructorSymbol, NodeType.DOCUMENT_NODE, '#document');
  }

  get implementation() {
    return Document.#implementation;
  }
}
