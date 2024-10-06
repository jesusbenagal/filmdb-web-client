import type { IFilmDetail } from '@/interfaces/api';

export const getFilmInfo = (data: IFilmDetail) => {
  return [
    [
      { label: 'Rated', value: data.Rated },
      { label: 'Runtime', value: data.Runtime },
      { label: 'Genre', value: data.Genre },
      { label: 'Released', value: data.Released },
      { label: 'Director', value: data.Director },
      { label: 'Writer', value: data.Writer },
      { label: 'Actors', value: data.Actors },
      { label: 'Awards', value: data.Awards },
    ],
    [
      { label: 'Plot', value: data.Plot },
      { label: 'Language', value: data.Language },
      { label: 'Country', value: data.Country },
      { label: 'Ratings', value: data.imdbRating },
      { label: 'Metascore', value: data.Metascore },
      { label: 'Box Office', value: data.BoxOffice },
      { label: 'Production', value: data.Production },
    ],
  ];
};
