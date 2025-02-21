import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { baseApi } from './services/baseApi';
import { persistConfig } from './mmkv/storage';

// Import reducers
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with middleware and persistence
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Ignore specific action types in serializability check
      serializableCheck: {
        ignoredActions: [
          FLUSH, REHYDRATE, PAUSE, 
          PERSIST, PURGE, REGISTER
        ],
      },
    }).concat(baseApi.middleware),
  // Enable Redux DevTools in development
  devTools: __DEV__,
});

// Create persistor
export const persistor = persistStore(store);

// Set up listeners for RTK-Query
setupListeners(store.dispatch);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Optional: Export hooks for typed dispatch and selector
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;