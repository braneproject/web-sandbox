import { PrivateConstructorSymbol } from './symbols.js';

export function assertPrivateConstructor(symbol?: typeof PrivateConstructorSymbol): asserts symbol {
  if (symbol !== PrivateConstructorSymbol) {
    throw new TypeError('Illegal constructor');
  }
}
