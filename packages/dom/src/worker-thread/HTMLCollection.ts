import { PrivateConstructor } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { type Element } from './nodes/Element.js';

export class HTMLCollection extends Array<Element> {
  constructor(_private: typeof PrivateConstructor) {
    super();
    assertPrivateConstructor(_private);
  }

  item(index: number): Element | null {
    return this[index] ?? null;
  }
}
