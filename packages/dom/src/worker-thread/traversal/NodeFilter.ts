import { Node } from '../nodes/Node.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-nodefilter
 */
export const NodeFilter = new Proxy({
  FILTER_ACCEPT: 1,
  FILTER_REJECT: 2,
  FILTER_SKIP: 3,

  SHOW_ALL: 0xFFFFFFFF,
  SHOW_ELEMENT: 0x1,
  SHOW_ATTRIBUTE: 0x2,
  SHOW_TEXT: 0x4,
  SHOW_CDATA_SECTION: 0x8,
  SHOW_ENTITY_REFERENCE: 0x10, // legacy
  SHOW_ENTITY: 0x20, // legacy
  SHOW_PROCESSING_INSTRUCTION: 0x40,
  SHOW_COMMENT: 0x80,
  SHOW_DOCUMENT: 0x100,
  SHOW_DOCUMENT_TYPE: 0x200,
  SHOW_DOCUMENT_FRAGMENT: 0x400,
  SHOW_NOTATION: 0x800, // legacy
}, {
  set() {
    return true;
  }
});

export interface CallbackNodeFilter {
  acceptNode(node: Node): number;
}
