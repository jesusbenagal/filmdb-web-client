import type { Theme } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

import { Text, useTheme } from '../../../core';

import type { IStyles } from '../../../interfaces/global';

interface IFilmCardProps {
  imgUrl: string;
  onClick: () => void;
  filmName: string;
  onClickFavorite?: () => void;
  isFavorite?: boolean;
}

const getStyles = (theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  imgContainer: {
    borderRadius: '32px',
    width: '200px',
    height: 270,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    cursor: 'pointer',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '32px',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
    gap: '10px',
  },
  heartIcon: {
    cursor: 'pointer',
  },
});

export default function FilmCard({
  imgUrl,
  onClick,
  filmName,
  onClickFavorite,
  isFavorite,
}: IFilmCardProps) {
  const theme = useTheme();
  const styles = getStyles(theme);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div style={styles.root}>
      <div
        onClick={onClick}
        onKeyDown={handleKeyPress}
        style={styles.imgContainer}
      >
        <img src={imgUrl} alt="film" style={styles.img} />
      </div>
      <div style={styles.textContainer}>
        <Text text={filmName} variant="caption" />
        {isFavorite ? (
          <Favorite onClick={onClickFavorite} style={styles.heartIcon} />
        ) : (
          <FavoriteBorder onClick={onClickFavorite} style={styles.heartIcon} />
        )}
      </div>
    </div>
  );
}
