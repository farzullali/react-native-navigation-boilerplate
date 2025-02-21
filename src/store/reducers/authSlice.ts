import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/store/auth.type';

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { setLoading, setToken, setError, logout } = authSlice.actions;
export default authSlice.reducer; 