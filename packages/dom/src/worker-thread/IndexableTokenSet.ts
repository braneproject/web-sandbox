import { IndexableTokenSet } from '#shared/symbols.js';

export interface IndexableTokenSet<T> {
  [index: number]: T | undefined;
  [IndexableTokenSet]: Set<T>;
  [Symbol.iterator](): IterableIterator<T>;
}

export function createIndexableTarget<T extends IndexableTokenSet<unknown>>(target: T): T {
  return new Proxy(target, {
    get(target, prop) {
      if (typeof prop === 'symbol') {
        return target[prop as keyof typeof target];
      }

      const numeric = Number(prop);
      // @ts-ignore
      // rome-ignore lint/suspicious/noDoubleEquals: shallow equality is intentional
      if  (numeric == prop && !(prop in target)) {
        if (numeric < 0) return;
        let i = 0;
        for (const value of target[IndexableTokenSet].values()) {
          if (numeric === i++) return value;
        }
        return;
      }

      return target[prop as keyof typeof target];
    },
    set(target, prop, value) {
      if (typeof prop === 'symbol') {
        target[prop as keyof typeof target] = value;
        return true;
      }

      const numeric = Number(prop);
      // @ts-ignore
      // rome-ignore lint/suspicious/noDoubleEquals: shallow equality is intentional
      if (numeric == prop && !(prop in target)) {
        return true;
      }

      target[prop as keyof typeof target] = value;
      return true;
    },
  });
}

export function replaceTokenInPlace<T>(target: IndexableTokenSet<T>, token: T, newToken: T): boolean {
  if (target[IndexableTokenSet].has(token)) {
    let i = 0;
    const buf = new Array(target[IndexableTokenSet].size);
    for (const existToken of target[IndexableTokenSet]) {
      buf[i++] = token === existToken ? newToken : existToken;
    }
    target[IndexableTokenSet] = new Set(buf);
    return true;
  }
  return false;
}
