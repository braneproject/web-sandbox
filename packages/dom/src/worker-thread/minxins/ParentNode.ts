import { type NodeList } from '../NodeList.js';
import { type Node } from '../nodes/Node.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-parentnode
 */
export interface ParentNode {
  firstElementChild: Element | null;
  lastElementChild: Element | null;
  childElementCount: number;

  prepend(...ndoes: Array<string | Node>): void;
  append(...ndoes: Array<string | Node>): void;
  replaceChildren(...ndoes: Array<string | Node>): void;

  querySelector(selectors: string): Element | null;
  querySelectorAll(selectors: string): NodeList;
}
