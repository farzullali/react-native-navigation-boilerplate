import { RootState } from '../index';

// Get the entire auth state
export const selectAuth = (state: RootState) => state.auth;

// Get authentication status
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

// Get current auth token
export const selectToken = (state: RootState) => state.auth.token;

// Get loading state for auth operations
export const selectAuthLoading = (state: RootState) => state.auth.loading;

// Get any auth-related errors
export const selectAuthError = (state: RootState) => state.auth.error; 