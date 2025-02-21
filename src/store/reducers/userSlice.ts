import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, UpdateUserPayload } from '../../types/store/user.types';

const initialState: UserState = {
  id: null,
  email: null,
  name: null,
  preferences: {
    theme: 'light',
    notifications: true,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserState['preferences']>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, updatePreferences, clearUser } = userSlice.actions;
export default userSlice.reducer; 