import { type Node } from './nodes/Node.js';
import { PrivateConstructor } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

export class NodeList extends Array<Node> {
  static toString() {
    return 'function NodeList() { [native code] }';
  }

  constructor(
    _private: typeof PrivateConstructor,
    init: Node[] = [],
  ) {
    super(...init);
    assertPrivateConstructor(_private);
  }

  item(index: number): Node | null {
    return this[index] ?? null;
  }
}
