import {
  MD3LightTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
  configureFonts,
  MD3Theme,
} from 'react-native-paper';
import { Platform } from 'react-native';
import { colors } from '@constants/theme';
import { MD3Type } from 'react-native-paper/lib/typescript/types';

const fontFamily = Platform.select({
  ios: 'OpenSans-Regular',
  android: 'OpenSans-Regular',
  default: 'sans-serif',
});

const fontConfig: Record<string, MD3Type> = {
  displayLarge: {
    fontFamily,
    fontWeight: '400',
    fontSize: 57,
    letterSpacing: 0,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily,
    fontWeight: '400',
    fontSize: 45,
    letterSpacing: 0,
    lineHeight: 52,
  },
  displaySmall: {
    fontFamily,
    fontWeight: '400',
    fontSize: 36,
    letterSpacing: 0,
    lineHeight: 44,
  },

  headlineLarge: {
    fontFamily,
    fontWeight: '500',
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily,
    fontWeight: '400',
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily,
    fontWeight: '400',
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 32,
  },

  titleLarge: {
    fontFamily,
    fontWeight: '500',
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontFamily,
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily,
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },

  labelLarge: {
    fontFamily,
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily,
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily,
    fontWeight: '500',
    fontSize: 11,
    letterSpacing: 0.5,
    lineHeight: 16,
  },

  bodyLarge: {
    fontFamily,
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily,
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily,
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
  },

  default: {
    fontFamily,
    fontWeight: '400',
    letterSpacing: 0,
    fontSize: 14,
    lineHeight: 20,
  },
};

export const lightTheme: MD3Theme = {
  ...PaperDefaultTheme,
  roundness: 8,
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  colors: {
    ...PaperDefaultTheme.colors,
    primary: colors.primary,
    onPrimary: colors.onPrimary,
    secondary: colors.secondary,
    onSecondary: colors.onSecondary,
    background: colors.backgroundLight,
    surface: colors.surfaceLight,
    error: colors.error,
    onSurface: colors.onSurfaceLight,
    outline: colors.outline,
  },
};

export const darkTheme: MD3Theme = {
  ...PaperDarkTheme,
  roundness: 8,
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  colors: {
    ...PaperDarkTheme.colors,
    primary: colors.primary,
    onPrimary: colors.onPrimary,
    secondary: colors.secondary,
    onSecondary: colors.onSecondary,
    background: colors.backgroundDark,
    surface: colors.surfaceDark,
    error: colors.error,
    onSurface: colors.onSurfaceDark,
    outline: colors.outline,
  },
};
