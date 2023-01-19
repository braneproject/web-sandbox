import { EventTarget } from '#globals/EventTarget.js';
import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';
import { type UnionString } from '#shared/utils.js'

export const enum NodeType {
  ELEMENT_NODE = 1,
  ATTRIBUTE_NODE = 2,
  TEXT_NODE = 3,
  CDATA_SECTION_NODE = 4,
  PROCESSING_INSTRUCTION_NODE = 7,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_TYPE_NODE = 10,
  DOCUMENT_FRAGMENT_NODE = 11,
}

export type NodeName = UnionString<(
  | '#cdata-section'
  | '#comment'
  | '#document'
  | '#document-fragment'
  | '#text'
)>;

/**
 * @see https://dom.spec.whatwg.org/#interface-node
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node
 */
export abstract class Node extends EventTarget {
  static get ELEMENT_NODE() {
    return NodeType.ELEMENT_NODE;
  }
  static get ATTRIBUTE_NODE() {
    return NodeType.ATTRIBUTE_NODE;
  }
  static get TEXT_NODE() {
    return NodeType.TEXT_NODE;
  }
  static get CDATA_SECTION_NODE() {
    return NodeType.CDATA_SECTION_NODE;
  }
  static get PROCESSING_INSTRUCTION_NODE() {
    return NodeType.PROCESSING_INSTRUCTION_NODE;
  }
  static get COMMNET_NODE() {
    return NodeType.COMMENT_NODE;
  }
  static get DOCUMNET_NODE() {
    return NodeType.DOCUMENT_NODE;
  }
  static get DOCUMENT_TYPE_NODE() {
    return NodeType.DOCUMENT_TYPE_NODE;
  }
  static get DOCUMENT_FRAGMENT_NODE() {
    return NodeType.DOCUMENT_FRAGMENT_NODE;
  }

  #nodeType: NodeType;
  #nodeName: NodeName;
  #ownerDocument: Document | null;
  #parentNode: Node | null;

  constructor(_private: typeof PrivateConstructorSymbol, nodeType: NodeType, nodeName: NodeName, ownerDocument: Document | null = null) {
    super();
    assertPrivateConstructor(_private);

    this.#nodeType = nodeType;
    this.#nodeName = nodeName;
    this.#ownerDocument = ownerDocument;
    this.#parentNode = null;
  }

  get ELEMENT_NODE() {
    return NodeType.ELEMENT_NODE;
  }
  get ATTRIBUTE_NODE() {
    return NodeType.ATTRIBUTE_NODE;
  }
  get TEXT_NODE() {
    return NodeType.TEXT_NODE;
  }
  get CDATA_SECTION_NODE() {
    return NodeType.CDATA_SECTION_NODE;
  }
  get PROCESSING_INSTRUCTION_NODE() {
    return NodeType.PROCESSING_INSTRUCTION_NODE;
  }
  get COMMNET_NODE() {
    return NodeType.COMMENT_NODE;
  }
  get DOCUMNET_NODE() {
    return NodeType.DOCUMENT_NODE;
  }
  get DOCUMENT_TYPE_NODE() {
    return NodeType.DOCUMENT_TYPE_NODE;
  }
  get DOCUMENT_FRAGMENT_NODE() {
    return NodeType.DOCUMENT_FRAGMENT_NODE;
  }

  get nodeType() {
    return this.#nodeType;
  }

  get nodeName() {
    return this.#nodeName;
  }

  get ownerDocument() {
    return this.#ownerDocument;
  }

  abstract cloneNode(deep?: boolean | undefined): Node;
}
