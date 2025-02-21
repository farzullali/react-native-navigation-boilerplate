// API Error types
export interface ApiError {
  message: string;
  statusCode: number;
}

export interface ValidationError extends ApiError {
  errors: Record<string, string[]>;
}

export interface AuthenticationError extends ApiError {
  code: 'UNAUTHORIZED' | 'INVALID_TOKEN' | 'TOKEN_EXPIRED';
}
