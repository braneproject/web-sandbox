import { PrivateConstructorSymbol } from '#shared/symbols.js';

import { type Slottable } from '../minxins/Slottable.js';
import { CharacterData } from './CharactorData.js';
import { NodeType } from './Node.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-text
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Text
 */
export class Text extends CharacterData implements
  Slottable
{
  constructor(data = '') {
    super(PrivateConstructorSymbol, data, NodeType.TEXT_NODE, '#text');
  }

  splitText(offset: number): Text {
  }
}
