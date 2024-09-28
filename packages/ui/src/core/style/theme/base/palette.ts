import type { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteColor {}
  interface SimplePaletteColorOptions {}
  interface Palette {
    white: string;
    black: string;
  }
  interface PaletteOptions {
    white: string;
    black: string;
  }
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: '#1f303e',
    light: '#485696',
    dark: '#000718',
    contrastText: '#fff',
  },
  secondary: {
    main: '#73b6c1',
    light: '#a5e8f4',
    dark: '#428691',
    contrastText: '#1f303e',
  },
  warning: {
    main: '#ff9800',
    light: '#ffcc33',
    dark: '#b26a00',
    contrastText: '#fff',
  },
  error: {
    main: '#f44336',
    light: '#ff7961',
    dark: '#ba000d',
    contrastText: '#fff',
  },
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: '#fff',
  },
  info: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
    contrastText: '#fff',
  },
  background: {
    default: '#eeeeee',
    paper: '#fff',
  },
  black: '#000',
  white: '#fff',
};

export const darkPalette: PaletteOptions = {
  primary: {
    main: '#ebf2ff',
    light: '#ffffff',
    dark: '#b9bfcc',
    contrastText: '#1f303e',
  },
  secondary: {
    main: '#a5e8f4',
    light: '#d8ffff',
    dark: '#73b6c1',
    contrastText: '#1f303e',
  },
  warning: {
    main: '#ffcc33',
    light: '#ffff66',
    dark: '#b26a00',
    contrastText: '#fff',
  },
  error: {
    main: '#ff7961',
    light: '#ffa48d',
    dark: '#ba000d',
    contrastText: '#fff',
  },
  success: {
    main: '#81c784',
    light: '#b2fab4',
    dark: '#388e3c',
    contrastText: '#fff',
  },
  info: {
    main: '#64b5f6',
    light: '#9be7ff',
    dark: '#1976d2',
    contrastText: '#fff',
  },
  background: {
    default: '#1b2939',
    paper: '#253649',
  },
  black: '#000',
  white: '#fff',
};
