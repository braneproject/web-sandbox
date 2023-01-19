import { PrivateConstructorSymbol } from '#shared/symbols.js';

import { type Slottable } from '../minxins/Slottable.js';
import { CharacterData } from './CharactorData.js';
import { NodeName, NodeType } from './Node.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-text
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Text
 */
export class Text extends CharacterData implements
  Slottable
{
  constructor(data = '', nodeType = NodeType.TEXT_NODE, nodeName: NodeName = '#text') {
    super(PrivateConstructorSymbol, data, nodeType, nodeName);
  }

  splitText(offset: number): Text {
  }
}
