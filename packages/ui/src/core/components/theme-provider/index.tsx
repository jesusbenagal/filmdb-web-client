import CssBaseline from '@mui/material/CssBaseline';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../style/theme/theme';

interface IThemeProviderProps {
  darkMode?: boolean;
  children: React.ReactNode;
}

export default function ThemeProviderComponent({
  darkMode,
  children,
}: IThemeProviderProps) {
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={responsiveFontSizes(theme, { factor: 3 })}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
