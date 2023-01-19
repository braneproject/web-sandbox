import { DOMException } from '#globals/DOMException.js';
import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-domtokenlist
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
 */
export class DOMTokenList {
  // This shouldn't be private property due to using proxy
  _tokenSet: Set<string>;

  constructor(_private: typeof PrivateConstructorSymbol) {
    assertPrivateConstructor(_private);

    this._tokenSet = new Set();

    return new Proxy(this, {
      get(target, prop) {
        const numeric = Number(prop);
        // @ts-ignore
        if (numeric == prop && !(prop in target)) {
          if (numeric < 0) return;
          let i = 0;
          for (const value of target._tokenSet.values()) {
            if (numeric === i++) return value;
          }
          return;
        }
        return target[prop as keyof DOMTokenList];
      },
      set(target, prop, value) {
        const numeric = Number(prop);
        // @ts-ignore
        if (numeric == prop && !(prop in target)) {
          return true;
        }
        // @ts-ignore
        target[prop] = value;
        return true;
      },
    });
  }

  get length() {
    return this._tokenSet.size;
  }

  get value() {
    return [...this._tokenSet.values()].join(' ');
  }

  [Symbol.iterator]() {
    return this._tokenSet.values();
  }

  toString() {
    return this.value;
  }

  item(index: number): string | null {
    // @ts-ignore
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
    if (this.contains(token)) {
      let i = 0;
      const buf = new Array(this.length);
      for (const existToken of this._tokenSet) {
        buf[i++] = token === existToken ? newToken : existToken;
      }
      this._tokenSet = new Set(buf);
      return true;
    }
    return false;
  }

  supports(token: string): boolean {
    // Only implemented for classList, which does not have any supported tokens
    throw new TypeError(
      `Failed to execute '${token}' on 'DOMTokenList': DOMTokenList has no supported tokens.`,
    );
  }
}
