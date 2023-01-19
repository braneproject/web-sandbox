import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { Node, NodeType } from './Node.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-documenttype
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DocumentType
 */
export class DocumentType extends Node {
  #name: string;
  #publicId: string;
  #systemId: string;

  constructor(_private: typeof PrivateConstructorSymbol, name = 'html', publicId = '', systemId = '') {
    super(_private, NodeType.DOCUMENT_TYPE_NODE, name);

    assertPrivateConstructor(_private);

    this.#name = name;
    this.#publicId = publicId;
    this.#systemId = systemId;
  }

  get name(): string {
    return this.#name;
  }

  get publicId(): string {
    return this.#publicId;
  }

  get systemId(): string {
    return this.#systemId;
  }

  cloneNode(): DocumentType {
    return new DocumentType(PrivateConstructorSymbol, this.name, this.publicId, this.systemId);
  }
}
