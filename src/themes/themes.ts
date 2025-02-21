// src/themes/themes.ts
import { colors } from './colors';

export const lightTheme = {
  background: colors.backgroundLight,
  text: colors.textLight,
  primary: colors.primary,
};

export const darkTheme = {
  background: colors.backgroundDark,
  text: colors.textDark,
  primary: colors.primary,
};

export type Theme = typeof lightTheme;