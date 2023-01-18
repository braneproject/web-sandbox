import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { type NonDocumentTypeChildNode } from '../minxins/NonDocumentTypeChildNode.js';
import { Node, NodeName, NodeType } from './Node.js';

/**
 * @see https://dom.spec.whatwg.org/#characterdata
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CharacterData
 */
export abstract class CharacterData extends Node implements
  NonDocumentTypeChildNode
{
  #data: string;

  constructor(_private: typeof PrivateConstructorSymbol, data: string, nodeType: NodeType, nodeName: NodeName) {
    super(_private, nodeType, nodeName, null);
    assertPrivateConstructor(_private);

    this.#data = data;
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-data
  get data() {
    return this.#data;
  }
  set data(value) {
    // LegacyNullToEmptyString
    if (value === null) {
      value = '';
    }
    // TODO: mutate
  }

  get length() {
    return this.#data.length;
  }

  abstract cloneNode(): CharacterData;
}
