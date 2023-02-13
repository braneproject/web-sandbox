import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { Node, NodeType, NodeName } from './Node.js';
import { DOMTokenList } from '../DOMTokenList.js';
import { NamedNodeMap } from '../NamedNodeMap.js';
import { type ParentNode } from '../minxins/ParentNode.js';
import { type ChildNode } from '../minxins/ChildNode.js';
import { type NonDocumentTypeChildNode } from '../minxins/NonDocumentTypeChildNode.js';
import { type Slottable } from '../minxins/Slottable.js';
import { type Attr } from './Attr.js';

export abstract class Element extends Node implements
  ParentNode,
  ChildNode,
  NonDocumentTypeChildNode,
  Slottable
{
  #classList: DOMTokenList;
  #namedNodeMap: NamedNodeMap;

  constructor(
    _private: typeof PrivateConstructorSymbol,
    nodeName: NodeName,
  ) {
    super(_private, NodeType.ELEMENT_NODE, nodeName);

    assertPrivateConstructor(_private);

    this.#classList = new DOMTokenList(_private);
    this.#namedNodeMap = new NamedNodeMap(_private, this);
  }


  get classList(): DOMTokenList {
    return this.#classList;
  }

  get attributes(): NamedNodeMap {
    return this.#namedNodeMap;
  }

  getAttribute(localName: string): string | null {
  }
  getAttributeNS(namespace: string | null, localName: string): string | null {
  }
  setAttribute(qualifiedName: string, value: string): void {
  }
  setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
  }
  removeAttribute(qualifiedName: string): void {
  }
  removeAttributeNS(namespace: string | null, localName: string): void {
  }
  toggleAttribute(qualifiedName: string, force = true): boolean {
  }
  hasAttribute(qualifiedName: string): boolean {
  }
  hasAttributeNS(namespace: string | null, localName: string): boolean {
  }

  getAtrributeNode(localName: string): Attr | null {
  }
  getAtrributeNodeNS(namespace: string | null, localName: string): Attr | null {
  }
}

export function getAttribute(element: Element, localName: string) {
}

export function getAttributeNS(element: Element, namespace: string, localName: string) {
}
