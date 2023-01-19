import { type UnionString } from '../shared/utils.js';

export const enum DOMExceptionCode {
  NONE = 0,
  INDEX_SIZE_ERR = 1,
  DOMSTRING_SIZE_ERR = 2,
  HIERARCHY_REQUEST_ERR = 3,
  WRONG_DOCUMENT_ERR = 4,
  INVALID_CHARACTER_ERR = 5,
  NO_DATA_ALLOWED = 6,
  NO_MODIFICATION_ALLOWED_ERR = 7,
  NOT_FOUND_ERR = 8,
  NOT_SUPPORTED_ERR = 9,
  INUSE_ATTRIBUTE_ERR = 10,
  INVALID_STATE_ERR = 11,
  SYNTAX_ERROR = 12,
  INVALID_MODIFICATION_ERR = 13,
  NAMESPACE_ERR = 14,
  INVALID_ACCESS_ERR = 15,
  VALIDATION_ERR = 16,
  TYPE_MISMATCH_ERR = 17,
  SECURITY_ERR = 18,
  NETWORK_ERR = 19,
  ABORT_ERR = 20,
  URL_MISMATCH_ERR = 21,
  QUOTA_EXCEEDED_ERR = 22,
  TIMEOUT_ERR = 23,
  INVALID_NODE_TYPE_ERR = 24,
  DATA_CLONE_ERR = 25,
}

export type DOMExceptionName = UnionString<(
  | 'IndexSizeError'
  | 'DOMStringSizeError'
  | 'HierarchyRequestError'
  | 'WrongDocumentError'
  | 'InvalidCharacterError'
  | 'NoDataAllowedError'
  | 'NoModificationAllowedError'
  | 'NotFoundError'
  | 'NotSupportedError'
  | 'InvalidStateError'
  | 'InUseAttributeError'
  | 'SyntaxError'
  | 'InvalidModificationError'
  | 'NamespaceError'
  | 'InvalidAccessError'
  | 'ValidationError'
  | 'TypeMismatchError'
  | 'SecurityError'
  | 'NetworkError'
  | 'AbortError'
  | 'URLMismatchError'
  | 'QuotaExceededError'
  | 'TimeoutError'
  | 'InvalidNodeTypeError'
  | 'DataCloneError'
  | 'EncodingError'
  | 'NotReadableError'
  | 'UnknownError'
  | 'ConstraintError'
  | 'DataError'
  | 'TransactionInactiveError'
  | 'ReadOnlyError'
  | 'VersionError'
  | 'OperationError'
  | 'NotAllowedError'
)>;

const DOMExceptionNameCodeMap: Record<DOMExceptionName, DOMExceptionCode | undefined> = {
  IndexSizeError: DOMExceptionCode.INDEX_SIZE_ERR,
  DOMStringSizeError: DOMExceptionCode.DOMSTRING_SIZE_ERR,
  HierarchyRequestError: DOMExceptionCode.HIERARCHY_REQUEST_ERR,
  WrongDocumentError: DOMExceptionCode.WRONG_DOCUMENT_ERR,
  InvalidCharacterError: DOMExceptionCode.INVALID_CHARACTER_ERR,
  NoDataAllowedError: DOMExceptionCode.NO_DATA_ALLOWED,
  NoModificationAllowedError: DOMExceptionCode.NO_MODIFICATION_ALLOWED_ERR,
  NotFoundError: DOMExceptionCode.NOT_FOUND_ERR,
  NotSupportedError: DOMExceptionCode.NOT_SUPPORTED_ERR,
  InvalidStateError: DOMExceptionCode.INVALID_STATE_ERR,
  InUseAttributeError: DOMExceptionCode.INUSE_ATTRIBUTE_ERR,
  SyntaxError: DOMExceptionCode.SYNTAX_ERROR,
  InvalidModificationError: DOMExceptionCode.INVALID_MODIFICATION_ERR,
  NamespaceError: DOMExceptionCode.NAMESPACE_ERR,
  InvalidAccessError: DOMExceptionCode.INVALID_ACCESS_ERR,
  ValidationError: DOMExceptionCode.VALIDATION_ERR,
  TypeMismatchError: DOMExceptionCode.TYPE_MISMATCH_ERR,
  SecurityError: DOMExceptionCode.SECURITY_ERR,
  NetworkError: DOMExceptionCode.NETWORK_ERR,
  AbortError: DOMExceptionCode.ABORT_ERR,
  URLMismatchError: DOMExceptionCode.URL_MISMATCH_ERR,
  QuotaExceededError: DOMExceptionCode.QUOTA_EXCEEDED_ERR,
  TimeoutError: DOMExceptionCode.TIMEOUT_ERR,
  InvalidNodeTypeError: DOMExceptionCode.INVALID_NODE_TYPE_ERR,
  DataCloneError: DOMExceptionCode.DATA_CLONE_ERR,

  EncodingError: DOMExceptionCode.NONE,
  NotReadableError: DOMExceptionCode.NONE,
  UnknownError: DOMExceptionCode.NONE,
  ConstraintError: DOMExceptionCode.NONE,
  DataError: DOMExceptionCode.NONE,
  TransactionInactiveError: DOMExceptionCode.NONE,
  ReadOnlyError: DOMExceptionCode.NONE,
  VersionError: DOMExceptionCode.NONE,
  OperationError: DOMExceptionCode.NONE,
  NotAllowedError: DOMExceptionCode.NONE,
};

/**
 * @see https://webidl.spec.whatwg.org/#idl-DOMException
 */
export class DOMException extends Error implements globalThis.DOMException {
  static get INDEX_SIZE_ERR() {
    return DOMExceptionCode.INDEX_SIZE_ERR;
  }
  static get DOMSTRING_SIZE_ERR() {
    return DOMExceptionCode.DOMSTRING_SIZE_ERR;
  }
  static get HIERARCHY_REQUEST_ERR() {
    return DOMExceptionCode.HIERARCHY_REQUEST_ERR;
  }
  static get WRONG_DOCUMENT_ERR() {
    return DOMExceptionCode.WRONG_DOCUMENT_ERR;
  }
  static get INVALID_CHARACTER_ERR() {
    return DOMExceptionCode.INVALID_CHARACTER_ERR;
  }
  static get NO_DATA_ALLOWED_ERR() {
    return DOMExceptionCode.NO_DATA_ALLOWED;
  }
  static get NO_MODIFICATION_ALLOWED_ERR() {
    return DOMExceptionCode.NO_MODIFICATION_ALLOWED_ERR;
  }
  static get NOT_FOUND_ERR() {
    return DOMExceptionCode.NOT_FOUND_ERR;
  }
  static get NOT_SUPPORTED_ERR() {
    return DOMExceptionCode.NOT_SUPPORTED_ERR;
  }
  static get INVALID_STATE_ERR() {
    return DOMExceptionCode.INVALID_STATE_ERR;
  }
  static get INUSE_ATTRIBUTE_ERR() {
    return DOMExceptionCode.INUSE_ATTRIBUTE_ERR;
  }
  static get SYNTAX_ERR() {
    return DOMExceptionCode.SYNTAX_ERROR;
  }
  static get INVALID_MODIFICATION_ERR() {
    return DOMExceptionCode.INVALID_MODIFICATION_ERR;
  }
  static get NAMESPACE_ERR() {
    return DOMExceptionCode.NAMESPACE_ERR;
  }
  static get INVALID_ACCESS_ERR() {
    return DOMExceptionCode.INVALID_ACCESS_ERR;
  }
  static get VALIDATION_ERR() {
    return DOMExceptionCode.VALIDATION_ERR;
  }
  static get TYPE_MISMATCH_ERR() {
    return DOMExceptionCode.TYPE_MISMATCH_ERR;
  }
  static get SECURITY_ERR() {
    return DOMExceptionCode.SECURITY_ERR;
  }
  static get NETWORK_ERR() {
    return DOMExceptionCode.NETWORK_ERR;
  }
  static get ABORT_ERR() {
    return DOMExceptionCode.ABORT_ERR;
  }
  static get URL_MISMATCH_ERR() {
    return DOMExceptionCode.URL_MISMATCH_ERR;
  }
  static get QUOTA_EXCEEDED_ERR() {
    return DOMExceptionCode.QUOTA_EXCEEDED_ERR;
  }
  static get TIMEOUT_ERR() {
    return DOMExceptionCode.TIMEOUT_ERR;
  }
  static get INVALID_NODE_TYPE_ERR() {
    return DOMExceptionCode.INVALID_NODE_TYPE_ERR;
  }
  static get DATA_CLONE_ERR() {
    return DOMExceptionCode.DATA_CLONE_ERR;
  }

  #name: string;
  #code: number;

  constructor(message: string = '', name: DOMExceptionName = 'Error') {
    super(message);
    this.#name = name;
    this.#code = DOMExceptionNameCodeMap[name] ?? 0;
  }

  get INDEX_SIZE_ERR() {
    return DOMExceptionCode.INDEX_SIZE_ERR;
  }
  get DOMSTRING_SIZE_ERR() {
    return DOMExceptionCode.DOMSTRING_SIZE_ERR;
  }
  get HIERARCHY_REQUEST_ERR() {
    return DOMExceptionCode.HIERARCHY_REQUEST_ERR;
  }
  get WRONG_DOCUMENT_ERR() {
    return DOMExceptionCode.WRONG_DOCUMENT_ERR;
  }
  get INVALID_CHARACTER_ERR() {
    return DOMExceptionCode.INVALID_CHARACTER_ERR;
  }
  get NO_DATA_ALLOWED_ERR() {
    return DOMExceptionCode.NO_DATA_ALLOWED;
  }
  get NO_MODIFICATION_ALLOWED_ERR() {
    return DOMExceptionCode.NO_MODIFICATION_ALLOWED_ERR;
  }
  get NOT_FOUND_ERR() {
    return DOMExceptionCode.NOT_FOUND_ERR;
  }
  get NOT_SUPPORTED_ERR() {
    return DOMExceptionCode.NOT_SUPPORTED_ERR;
  }
  get INVALID_STATE_ERR() {
    return DOMExceptionCode.INVALID_STATE_ERR;
  }
  get INUSE_ATTRIBUTE_ERR() {
    return DOMExceptionCode.INUSE_ATTRIBUTE_ERR;
  }
  get SYNTAX_ERR() {
    return DOMExceptionCode.SYNTAX_ERROR;
  }
  get INVALID_MODIFICATION_ERR() {
    return DOMExceptionCode.INVALID_MODIFICATION_ERR;
  }
  get NAMESPACE_ERR() {
    return DOMExceptionCode.NAMESPACE_ERR;
  }
  get INVALID_ACCESS_ERR() {
    return DOMExceptionCode.INVALID_ACCESS_ERR;
  }
  get VALIDATION_ERR() {
    return DOMExceptionCode.VALIDATION_ERR;
  }
  get TYPE_MISMATCH_ERR() {
    return DOMExceptionCode.TYPE_MISMATCH_ERR;
  }
  get SECURITY_ERR() {
    return DOMExceptionCode.SECURITY_ERR;
  }
  get NETWORK_ERR() {
    return DOMExceptionCode.NETWORK_ERR;
  }
  get ABORT_ERR() {
    return DOMExceptionCode.ABORT_ERR;
  }
  get URL_MISMATCH_ERR() {
    return DOMExceptionCode.URL_MISMATCH_ERR;
  }
  get QUOTA_EXCEEDED_ERR() {
    return DOMExceptionCode.QUOTA_EXCEEDED_ERR;
  }
  get TIMEOUT_ERR() {
    return DOMExceptionCode.TIMEOUT_ERR;
  }
  get INVALID_NODE_TYPE_ERR() {
    return DOMExceptionCode.INVALID_NODE_TYPE_ERR;
  }
  get DATA_CLONE_ERR() {
    return DOMExceptionCode.DATA_CLONE_ERR;
  }

  get name() {
    return this.#name;
  }

  get message() {
    return super.message;
  }
  set message(_value) {
    // noop
  }

  get code() {
    return this.#code;
  }
}
