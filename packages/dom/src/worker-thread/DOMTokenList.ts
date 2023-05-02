import { DOMException } from '#globals/DOMException.js';
import * as SharedSymbol from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import {
  IndexableTokenSet,
  createIndexableTarget,
  replaceTokenInPlace,
} from './IndexableTokenSet.js'

const PrivateValidateToken = Symbol('PrivateValidateToken');

/**
 * @see https://dom.spec.whatwg.org/#interface-domtokenlist
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
 */
export class DOMTokenList implements IndexableTokenSet<string> {
  [index: number]: string | undefined;
  [SharedSymbol.IndexableTokenSet] = new Set<string>();
  [Symbol.iterator]() {
    return this[SharedSymbol.IndexableTokenSet].values();
  }

  constructor(_private: typeof SharedSymbol.PrivateConstructor) {
    assertPrivateConstructor(_private);
    return createIndexableTarget(this);
  }

  get length() {
    return this[SharedSymbol.IndexableTokenSet].size;
  }

  get value() {
    return [...this[SharedSymbol.IndexableTokenSet].values()].join(' ');
  }

  toString() {
    return this.value;
  }

  item(index: number): string | null {
    return this[index] ?? null;
  }

  contains(token: string): boolean {
    return this[SharedSymbol.IndexableTokenSet].has(token);
  }

  add(...tokens: string[]) {
    for (const token of tokens) {
      this[PrivateValidateToken](token);
      this[SharedSymbol.IndexableTokenSet].add(token);
    }
  }

  remove(...tokens: string[]) {
    for (const token of tokens) {
      this[PrivateValidateToken](token);
      this[SharedSymbol.IndexableTokenSet].delete(token);
    }
  }

  toggle(token: string, force?: boolean): boolean {
    this[PrivateValidateToken](token);
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
    this[PrivateValidateToken](token);
    this[PrivateValidateToken](newToken);
    return replaceTokenInPlace(this, token, newToken);
  }

  supports(token: string): boolean {
    // Only implemented for classList, which does not have any supported tokens
    throw new TypeError(
      `Failed to execute '${token}' on 'DOMTokenList': DOMTokenList has no supported tokens.`,
    );
  }

  [PrivateValidateToken](token: string) {
    if (token === '') {
      throw new DOMException('The token provided must not be empty.', 'SyntaxError');
    }
    if (/[\t\n\f\r ]/.test(token)) {
      throw new DOMException('The token provided must not contain HTML space characters, which are not valid in tokens.', 'InvalidCharacterError');
    }
  }
}
