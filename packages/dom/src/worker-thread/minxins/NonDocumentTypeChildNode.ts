import { type Element } from '../nodes/Element.js';

export interface NonDocumentTypeChildNode {
  get previousElementSibling(): Element | null;
  get nextElementSibling(): Element | null;
}
