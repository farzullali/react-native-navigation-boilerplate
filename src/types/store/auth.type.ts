export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
    token: string;
    refreshToken: string;
    user: User;
  }

export interface User {
  id: string;
  email: string;
  name: string;
}

