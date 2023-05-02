import { Node } from '../nodes/Node.js';
import { MutationRecord } from './MutationRecord.js';

const observers: MutationObserver[] = [];

export type MutationCallback = (mutations: MutationRecord[], observer: MutationObserver) => void;

/**
 * @see https://dom.spec.whatwg.org/#interface-mutationobserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
export class MutationObserver {
  #callback: MutationCallback;
  #nodes: Node[] = [];
  #recordQueue: MutationRecord[] = [];

  constructor(callback: MutationCallback) {
    this.#callback = callback;
  }

  /**
   * @see https://dom.spec.whatwg.org/#dom-mutationobserver-observe
   */
  observe(target: Node, options: MutationObserverInit = {}) {
    if (('attributeOldValue' in options || 'attributeFilter' in options) && !('attributes' in options)) {
      options.attributes = true;
    }

    if ('characterDataOldValue' in options && !('characterData' in options)) {
      options.characterData = true;
    }

    if (!((options.childList || options.attributes) || options.characterData)) {
      throw new TypeError(
        "The options object must set at least one of 'attributes', 'characterData', or 'childList' to true.",
      );
    } else if (options.attributeOldValue && !options.attributes) {
      throw new TypeError(
        "The options object may only set 'attributeOldValue' to true when 'attributes' is true or not present.",
      );
    } else if (('attributeFilter' in options) && !options.attributes) {
      throw new TypeError(
        "The options object may only set 'attributeFilter' when 'attributes' is true or not present.",
      );
    } else if (options.characterDataOldValue && !options.characterData) {
      throw new TypeError(
        "The options object may only set 'characterDataOldValue' to true when 'characterData' is true or not present.",
      );
    }

    let {
      childList = false,
      attributes,
      characterData,
      subtree = false,
      attributeOldValue,
      characterDataOldValue,
      attributeFilter,
    } = options;

    if (attributeOldValue && attributeFilter && !attributes) {
      attributes = true;
    }

    if (characterDataOldValue && !characterData) {
      characterData = true;
    }
  }
}
