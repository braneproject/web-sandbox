export interface IndexableTokenSet<T> {
  // This shouldn't be private property due to using proxy
  _tokenSet: Set<T>;
  [index: number]: T | undefined;
  [Symbol.iterator](): IterableIterator<T>;
}

export function createIndexableTarget<T extends IndexableTokenSet<unknown>>(target: T): T {
  return new Proxy(target, {
    get(target, prop) {
      const numeric = Number(prop);
      // @ts-ignore
      // rome-ignore lint/suspicious/noDoubleEquals: shallow equality is intentional
      if  (numeric == prop && !(prop in target)) {
        if (numeric < 0) return;
        let i = 0;
        for (const value of target._tokenSet.values()) {
          if (numeric === i++) return value;
        }
        return;
      }
      return target[prop as keyof typeof target];
    },
    set(target, prop, value) {
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
  if (target._tokenSet.has(token)) {
    let i = 0;
    const buf = new Array(target._tokenSet.size);
    for (const existToken of target._tokenSet) {
      buf[i++] = token === existToken ? newToken : existToken;
    }
    target._tokenSet = new Set(buf);
    return true;
  }
  return false;
}
