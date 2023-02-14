import { PrivateConstructor } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { DocumentType } from './nodes/DocumentType.js';

export class DOMImplementation {
  constructor(_private: typeof PrivateConstructor) {
    assertPrivateConstructor(_private);
  }

  createDocumentType(qualifieldName: string, publicId: string, systemId: string): DocumentType {
    return new DocumentType(PrivateConstructor, qualifieldName, publicId, systemId);
  }

  get hasFeature(): boolean {
    return true;
  }
}
