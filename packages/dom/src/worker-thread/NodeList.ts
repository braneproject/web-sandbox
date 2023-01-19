import { type Node } from './nodes/Node.js';
import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

export class NodeList extends Array<Node> {
  constructor(_private: typeof PrivateConstructorSymbol) {
    super();
    assertPrivateConstructor(_private);
  }

  item(index: number): Node | null {
    return this[index] ?? null;
  }
}
