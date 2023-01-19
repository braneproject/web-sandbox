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

  substringData(offset: number, count: number): string {
    return this.#data.substring(offset, offset + count);
  }

  appendData(data: string): void {
    this.#data += data;
  }

  insertData(offset: number, data: string): void {
    this.#data = this.#data.substring(0, offset) + data + this.#data.substring(offset);
  }

  deleteData(offset: number, count: number): void {
    this.#data = this.#data.substring(0, offset) + this.#data.substring(offset + count);
  }

  replaceData(offset: number, count: number, data: string): void {
    this.#data = this.#data.substring(0, offset) + data + this.#data.substring(offset + count);
  }

  abstract cloneNode(): CharacterData;
}
