import { RootState } from '../index';

// Get the entire user state
export const selectUser = (state: RootState) => state.user;

// Get user's basic info
export const selectUserId = (state: RootState) => state.user.id;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserName = (state: RootState) => state.user.name;

// Get user preferences
export const selectUserPreferences = (state: RootState) => state.user.preferences;
export const selectTheme = (state: RootState) => state.user.preferences.theme;
export const selectNotifications = (state: RootState) => state.user.preferences.notifications; 