import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ThemeSwitch from '../theme-switch';
import { Button } from '@mui/material';

interface IHeaderProps {
  appName: string;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  onClickTitle: () => void;
  totalFavourites: number;
}

export default function Header({
  appName,
  darkMode,
  setDarkMode,
  onClickTitle,
  totalFavourites,
}: IHeaderProps) {
  return (
    <Grid2
      component="header"
      bgcolor="background.paper"
      height="70px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={3}
      borderRadius="0 0 10px 10px"
      boxShadow={3}
    >
      <Button
        variant="text"
        onClick={onClickTitle}
        disableTouchRipple
        disableFocusRipple
        disableRipple
      >
        <Typography variant="h6">{appName}</Typography>
      </Button>
      <Grid2 display="flex" alignItems="center" gap={3}>
        <Grid2 display="flex" alignItems="center" gap={0.5}>
          <FavoriteIcon />
          <Typography variant="caption">{totalFavourites}</Typography>
        </Grid2>
        <ThemeSwitch
          value={darkMode}
          onChange={(_, value) => setDarkMode(value)}
        />
      </Grid2>
    </Grid2>
  );
}
