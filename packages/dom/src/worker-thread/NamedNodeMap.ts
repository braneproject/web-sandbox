import { DOMException } from '#globals/DOMException.js';
import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { Attr } from './nodes/Attr.js';
import { Element } from './nodes/Element.js';
import {
  IndexableTokenSet,
  createIndexableTarget,
  replaceTokenInPlace,
} from './IndexableTokenSet.js';

export class NamedNodeMap implements IndexableTokenSet<Attr> {
  _tokenSet = new Set<Attr>();
  [index: number]: Attr | undefined;
  [Symbol.iterator]() {
    return this._tokenSet.values();
  }

  _nameMap = new Map<string, Attr>();

  #ownerElement: Element;

  constructor(
    _private: typeof PrivateConstructorSymbol,
    ownerElement: Element,
  ) {
    assertPrivateConstructor(_private);

    this.#ownerElement = ownerElement;

    return new Proxy(createIndexableTarget(this), {
      get(target, prop) {
        if (typeof prop === 'string' && !(prop in target)) {
          return target._nameMap.get(prop);
        }
        return target[prop as keyof typeof target];
      },
      set(target, prop, value) {
        if (typeof prop === 'string' && !(prop in target)) {
          // TODO: set attribute
          return true;
        }
        target[prop as keyof typeof target] = value;
        return true;
      }
    });
  }

  get length() {
    return this._tokenSet.size;
  }

  item(index: number): Attr | null {
    return this[index] ?? null;
  }

  getNamedItem(qualifiedName: string): Attr | null {
    return this._nameMap.get(qualifiedName) ?? null;
  }

  setNamedItem(attr: Attr): Attr | null {
    // See https://dom.spec.whatwg.org/#concept-element-attributes-set

    // 1. If attr’s element is neither null nor element, throw an "InUseAttributeError" DOMException.
    if (!attr.ownerElement) {
      throw new DOMException('The attribute is in use.', 'InUseAttributeError');
    }

    // 2. Let oldAttr be the result of getting an attribute given attr’s namespace, attr’s local name, and element.
    let oldAttr = this.getNamedItem(attr.name);

    // 3. If oldAttr is attr, return attr.
    if (oldAttr === attr) {
      return oldAttr;
    }

    // 4. If oldAttr is non-null, then replace oldAttr with attr.
    if (oldAttr) {
      replaceTokenInPlace(this, oldAttr, attr);
      this._nameMap.set(oldAttr.name, attr);
    }
    // 5. Otherwise, append attr to element.
    else {
      // TODO: append attr
    }
  }
}
