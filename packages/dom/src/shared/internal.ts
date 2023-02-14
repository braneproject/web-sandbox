import { PrivateConstructor } from './symbols.js';

export function assertPrivateConstructor(symbol?: typeof PrivateConstructor): asserts symbol {
  if (symbol !== PrivateConstructor) {
    throw new TypeError('Illegal constructor');
  }
}
