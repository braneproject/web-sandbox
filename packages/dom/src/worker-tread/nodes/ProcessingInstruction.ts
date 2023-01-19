import { PrivateConstructorSymbol } from '#shared/symbols.js';
import { assertPrivateConstructor } from '#shared/internal.js';

import { CharacterData } from './CharactorData.js';
import { NodeType } from './Node.js';

export class ProcessingInstruction extends CharacterData {
  #target: string;

  constructor(_private: typeof PrivateConstructorSymbol, target: string, data: string) {
    super(_private, data, NodeType.PROCESSING_INSTRUCTION_NODE, target);

    assertPrivateConstructor(_private);

    this.#target = target;
  }

  get target(): string {
    return this.#target;
  }

  cloneNode(): ProcessingInstruction {
    return new ProcessingInstruction(PrivateConstructorSymbol, this.target, this.data);
  }
}
