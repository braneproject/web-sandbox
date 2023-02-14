import { PrivateConstructor } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { Text } from './Text.js';
import { NodeType } from './Node.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-cdatasection
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CDATASection
 */
export abstract class CDATASection extends Text {
  constructor(
    _private: typeof PrivateConstructor,
    data = '',
  ) {
    super(data, NodeType.CDATA_SECTION_NODE, '#cdata-section');
    assertPrivateConstructor(_private);
  }
}
