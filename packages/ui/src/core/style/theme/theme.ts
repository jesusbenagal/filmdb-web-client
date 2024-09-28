import { createTheme } from '@mui/material';

import { shadows } from './base/shadows';
import { darkPalette, lightPalette } from './base/palette';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

const common = {
  shadows,
};

export const darkTheme = createTheme({
  palette: { mode: 'dark', ...darkPalette },
  ...common,
});

export const lightTheme = createTheme({
  palette: { mode: 'light', ...lightPalette },
  ...common,
});
