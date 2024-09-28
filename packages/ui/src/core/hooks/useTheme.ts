import { useTheme as useMuiTheme, type Theme } from '@mui/material/styles';

export function useTheme(): Theme {
  const theme = useMuiTheme<Theme>();

  return theme;
}
