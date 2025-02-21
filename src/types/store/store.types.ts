import { store } from '../../store';

// Core store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Generic async thunk result
export interface ThunkResult<T> {
  data?: T;
  error?: string;
} 