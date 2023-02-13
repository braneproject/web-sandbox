import { DOMException } from '#globals/DOMException.js';
import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import {
  IndexableTokenSet,
  createIndexableTarget,
  replaceTokenInPlace,
} from './IndexableTokenSet.js'

/**
 * @see https://dom.spec.whatwg.org/#interface-domtokenlist
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
 */
export class DOMTokenList implements IndexableTokenSet<string> {
  _tokenSet = new Set<string>();
  [index: number]: string | undefined;
  [Symbol.iterator]() {
    return this._tokenSet.values();
  }

  constructor(_private: typeof PrivateConstructorSymbol) {
    assertPrivateConstructor(_private);
    return createIndexableTarget(this);
  }

  get length() {
    return this._tokenSet.size;
  }

  get value() {
    return [...this._tokenSet.values()].join(' ');
  }

  toString() {
    return this.value;
  }

  item(index: number): string | null {
    return this[index] ?? null;
  }

  contains(token: string): boolean {
    return this._tokenSet.has(token);
  }

  _validateToken(token: string) {
    if (token === '') {
      throw new DOMException('The token provided must not be empty.', 'SyntaxError');
    }
    if (/[\t\n\f\r ]/.test(token)) {
      throw new DOMException('The token provided must not contain HTML space characters, which are not valid in tokens.', 'InvalidCharacterError');
    }
  }

  add(...tokens: string[]) {
    for (const token of tokens) {
      this._validateToken(token);
      this._tokenSet.add(token);
    }
  }

  remove(...tokens: string[]) {
    for (const token of tokens) {
      this._validateToken(token);
      this._tokenSet.delete(token);
    }
  }

  toggle(token: string, force?: boolean): boolean {
    this._validateToken(token);
    if (this.contains(token)) {
      if (force === undefined || !force) {
        this.remove(token);
        return false;
      }
      return true;
    } else {
      if (force === undefined || !!force) {
        this.add(token);
        return true;
      }
    }
    return false;
  }

  replace(token: string, newToken: string): boolean {
    this._validateToken(token);
    this._validateToken(newToken);
    return replaceTokenInPlace(this, token, newToken);
  }

  supports(token: string): boolean {
    // Only implemented for classList, which does not have any supported tokens
    throw new TypeError(
      `Failed to execute '${token}' on 'DOMTokenList': DOMTokenList has no supported tokens.`,
    );
  }
}
