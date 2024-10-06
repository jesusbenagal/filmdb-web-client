import {
  FilmCard,
  FilmSkeleton,
  Text,
  useTheme,
  type IStyles,
  type Theme,
} from '@filmdb/ui';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { addFavourite, removeFavourite } from '@/store/slices/favouritesSlice';

import type { IFilmsApiResponse } from '@/interfaces/api';

interface IFilmsContainerProps {
  isLoading: boolean;
  data?: IFilmsApiResponse;
}

const getStyles = (theme: Theme): IStyles => ({
  filmsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
    padding: '5px',
  },
  filmCardSkeleton: {
    borderRadius: '32px',
  },
  noFilms: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    padding: '16px',
  },
});

export default function FilmsContainer({
  data,
  isLoading,
}: IFilmsContainerProps) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigate = useNavigate();

  const { favourites } = useAppSelector((state) => state.favourites);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <div style={styles.filmsContainer}>
        {Array.from({ length: 14 }).map((_, index) => (
          <FilmSkeleton
            key={index}
            animation="wave"
            variant="rectangular"
            width={200}
            height={270}
            style={styles.filmCardSkeleton}
          />
        ))}
      </div>
    );
  }

  if (data && data.error) {
    return <div style={styles.noFilms}>{data.error}</div>;
  }

  if (data) {
    return (
      <div style={styles.filmsContainer}>
        {data.films.map((film) => {
          const isFavourite = favourites.includes(film.imdbID);

          const handleFavourite = () => {
            if (isFavourite) {
              dispatch(removeFavourite(film.imdbID));
            } else {
              dispatch(addFavourite(film.imdbID));
            }
          };

          return (
            <FilmCard
              key={film.imdbID}
              imgUrl={film.Poster}
              onClick={() => navigate(`/film/${film.imdbID}`)}
              filmName={film.Title}
              isFavourite={isFavourite}
              onClickFavourite={handleFavourite}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div style={styles.noFilms}>
      <Text
        text="Please, search for a film by typing the title above"
        variant="body1"
      />
    </div>
  );
}
