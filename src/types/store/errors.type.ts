// Centralize all error types here
export class AuthError extends Error {
  constructor(message: string, public statusCode?: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export class StorageError extends Error {
  constructor(message: string, public originalError?: string) {
    super(message);
    this.name = 'StorageError';
  }
} 