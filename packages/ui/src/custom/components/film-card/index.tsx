import type { Theme } from '@mui/material';

import { useTheme } from '../../../core';

import type { IStyles } from '../../../interfaces/global';

interface IFilmCardProps {
  imgUrl: string;
  onClick: () => void;
}
const getStyles = (theme: Theme): IStyles => ({
  root: {
    borderRadius: '32px',
    width: '200px',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '32px',
  },
});

export default function FilmCard({ imgUrl, onClick }: IFilmCardProps) {
  const theme = useTheme();
  const styles = getStyles(theme);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div onClick={onClick} onKeyDown={handleKeyPress} style={styles.root}>
      <img src={imgUrl} alt="film" style={styles.img} />
    </div>
  );
}
