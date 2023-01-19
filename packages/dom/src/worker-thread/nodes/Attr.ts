import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { Node, NodeType } from './Node.js';

export abstract class Attr extends Node {
  #name: string;
  #value: string;

  constructor(_private: typeof PrivateConstructorSymbol, name: string, value: string) {
    super(_private, NodeType.ATTRIBUTE_NODE, name);
    assertPrivateConstructor(_private);

    this.#name = name;
    this.#value = value;
  }

  get name() {
    return this.#name;
  }

  get value() {
    return this.#value;
  }
  set value(value) {
    // TODO: CEReactions
    this.#value = value;
  }

  get ownerElement() {
    return null;
  }

  get specified() {
    return true;
  }

  abstract cloneNode(): Attr;
}
