import { EventTarget } from '#globals/EventTarget.js';
import { PrivateConstructor } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';
import { type UnionString } from '#shared/utils.js'

import { type Attr } from './Attr.js';
import { type Element } from './Element.js';

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

export const enum DocumentPosition {
  DOCUMENT_POSITION_DISCONNECTED = 0x01,
  DOCUMENT_POSITION_PRECEDING = 0x02,
  DOCUMENT_POSITION_FOLLOWING = 0x04,
  DOCUMENT_POSITION_CONTAINS = 0x08,
  DOCUMENT_POSITION_CONTAINED_BY = 0x10,
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20,
}

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
  #childNodes: Array<Node> = [];
  #parentNode: Node | null = null;
  #isConnected = false;

  constructor(
    _private: typeof PrivateConstructor,
    nodeType: NodeType,
    nodeName: NodeName,
    ownerDocument: Document | null = null,
  ) {
    super();
    assertPrivateConstructor(_private);

    this.#nodeType = nodeType;
    this.#nodeName = nodeName;
    this.#ownerDocument = ownerDocument;
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

  /**
   * Should be implemented inhreited classes.
   * @see https://dom.spec.whatwg.org/#dom-node-isequalnode
   */
  isEqualNode(otherNode: Node) {
    return false;
  }

  isSameNode(otherNode: Node) {
    return this === otherNode;
  }

  hasChildNodes() {
    return this.#childNodes.length > 0;
  }

  get DOCUMENT_POSITION_DISCONNECTED() {
    return DocumentPosition.DOCUMENT_POSITION_DISCONNECTED;
  }
  get DOCUMENT_PIOSITION_PRECEDING() {
    return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
  }
  get DOCUMENT_POSITION_FOLLOWING() {
    return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
  }
  get DOCUMENT_POSITION_CONTAINS() {
    return DocumentPosition.DOCUMENT_POSITION_CONTAINS;
  }
  get DOCUMENT_POSITION_CONTAINED_BY() {
    return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY;
  }
  get DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC() {
    return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  }
  compareDocumentPosition(otherNode: Node) {
    // 1. If this is other, then return zero.
    if (this === otherNode) {
      return 0;
    }

    // 2. Let node1 be other and node2 be this.
    let node1: Node | null = otherNode;
    let node2: Node | null = this;

    // 3. Let attr1 and attr2 be null.
    let attr1: Attr | null = null;
    let attr2: Attr | null = null;

    // 4. If node1 is an attribute, then set attr1 to node1 and node1 to attr1’s element.
    if (node1.nodeType === NodeType.ATTRIBUTE_NODE) {
      attr1 = node1 as Attr;
      node1 = attr1.ownerElement;
    }

    // 5. If node2 is an attribute, then:
    if (node2.nodeType === NodeType.ATTRIBUTE_NODE) {
      // 5.1. Set attr2 to node2 and node2 to attr2’s element.
      attr2 = node2 as Attr;
      node2 = attr2.ownerElement;

      // 5.2. If attr1 and node1 are non-null, and node2 is node1, then:
      if (attr1 && node1 && node2 === node1) {
        // 5.2.1. For each attr in node2’s attribute list:
        const element = node2 as Element;
        for (const attr of element.attributes) {
          // 5.2.1.1. If attr equals attr1, then return the result of adding DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC and DOCUMENT_POSITION_PRECEDING.
          if (attr === attr1) {
            return (
              DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC +
              DocumentPosition.DOCUMENT_POSITION_PRECEDING
            );
          }
          // 5.2.1.2. If attr equals attr2, then return the result of adding DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC and DOCUMENT_POSITION_FOLLOWING.
          if (attr === attr2) {
            return (
              DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC +
              DocumentPosition.DOCUMENT_POSITION_FOLLOWING
            );
          }
        }
      }
    }

    // 6. If node1 or node2 is null, or node1’s root is not node2’s root, then return the result of adding DOCUMENT_POSITION_DISCONNECTED, DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC, and either DOCUMENT_POSITION_PRECEDING or DOCUMENT_POSITION_FOLLOWING, with the constraint that this is to be consistent, together.
    if (
      !(node1 && node2) ||
      (node1.ownerDocument && node2.ownerDocument && node1.ownerDocument !== node2.ownerDocument)
    ) {
      return (
        DocumentPosition.DOCUMENT_POSITION_DISCONNECTED +
        DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC +
        (node1 && node2 && node1.compareDocumentPosition(node2))
      );
    }
  }
}
