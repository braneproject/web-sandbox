/**
 * @see https://dom.spec.whatwg.org/#interface-nonelementparentnode
 */
export interface NonElementParentNode {
  /**
   * @see https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
   *
   * @param elementId
   */
  getElementById(elementId: string): Element | null;
}
