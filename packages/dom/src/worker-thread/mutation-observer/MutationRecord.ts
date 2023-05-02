import { PrivateConstructor } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';
import { type Node } from '../nodes/Node.js';
import { NodeList } from '../NodeList.js';

export const enum MutationRecordType {
  ATTRIBUTES = 'attributes',
  CHARACTER_DATA = 'characterData',
  CHILD_LIST = 'childList',
}

export class MutationRecord {
  static toString() {
    return 'function MutationRecord() { [native code] }';
  }

  #type: MutationRecordType;
  #target: Node;
  #addedNodes: NodeList;
  #removedNodes: NodeList;
  #attributeName: string | null;
  #attributeNamespace: string | null;
  #previousSibling: Node | null;
  #nextSibling: Node | null;
  #oldValue: string | null;

  constructor(
    _private: typeof PrivateConstructor,
    type: MutationRecordType,
    target: Node,
    addedNodes: Node[],
    removedNodes: Node[],
    previousSibling: Node | null,
    attributeName: string | null,
    attributeNamespace: string | null,
    nextSibling: Node | null,
    oldValue: string | null = null,
  ) {
    assertPrivateConstructor(_private);

    this.#type = type;
    this.#target = target;
    this.#addedNodes = new NodeList(_private, addedNodes);
    this.#removedNodes = new NodeList(_private, removedNodes);
    this.#attributeName = attributeName;
    this.#attributeNamespace = attributeNamespace;
    this.#previousSibling = previousSibling;
    this.#nextSibling = nextSibling;
    this.#oldValue = oldValue;
  }

  get type() {
    return this.#type;
  }

  get target() {
    return this.#target;
  }

  get addedNodes() {
    return this.#addedNodes;
  }

  get removedNodes() {
    return this.#removedNodes;
  }

  get previousSibling(): Node | null {
    return this.#previousSibling;
  }

  get nextSibling(): Node | null {
    return this.#nextSibling;
  }

  get attributeName(): string | null {
    return this.#attributeName;
  }

  get attributeNamespace(): string | null {
    return this.#attributeNamespace;
  }

  get oldValue(): string | null {
    return this.#oldValue;
  }
}
