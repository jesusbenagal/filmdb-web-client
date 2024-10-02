import {
  FilmCard,
  FilmSkeleton,
  useTheme,
  type IStyles,
  type Theme,
} from '@filmdb/ui';

import type { IFilmsApiResponse } from '@/interfaces/api';

interface IFilmsContainerProps {
  isLoading: boolean;
  data?: IFilmsApiResponse;
}

const getStyles = (theme: Theme): IStyles => ({
  filmsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    padding: '16px',
  },
  filmCardSkeleton: {
    borderRadius: '32px',
  },
  noFilms: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px',
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

  if (isLoading) {
    return (
      <div style={styles.filmsContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
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
    return (
      <div style={styles.noFilms}>
        An error occurred while fetching the films: {data.error}
      </div>
    );
  }

  if (data) {
    return (
      <div style={styles.filmsContainer}>
        {data.films.map((film) => (
          <FilmCard
            key={film.imdbID}
            imgUrl={film.Poster}
            onClick={() => console.log(film.Title)}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={styles.noFilms}>
      Please, search for a film by typing the title above
    </div>
  );
}
