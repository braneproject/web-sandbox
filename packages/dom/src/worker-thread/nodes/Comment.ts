import { PrivateConstructorSymbol } from '#shared/symbols.js';

import { CharacterData } from './CharactorData.js';
import { NodeType } from './Node.js';

/**
 * @see https://dom.spec.whatwg.org/#interface-comment
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Comment
 */
export class Comment extends CharacterData {
  constructor(data: string) {
    super(
      PrivateConstructorSymbol,
      data,
      NodeType.COMMENT_NODE,
      '#comment',
    );
  }

  cloneNode(): Comment {
    return new Comment(this.data);
  }
}
