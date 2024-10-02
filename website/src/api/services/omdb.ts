import { createAxios } from '@filmdb/utils';

import type { IGetFilmsReponse, IFilm } from '@/interfaces/api';

const omdbInstance = createAxios('http://www.omdbapi.com/');

const apiKey: string = import.meta.env.VITE_OMDB_API_KEY;

export const getFilms = async (
  search: string
): Promise<{ totalResults: string; films: IFilm[]; error?: string }> => {
  const { data } = await omdbInstance.get<IGetFilmsReponse>(
    `?apikey=${apiKey}&s=${search}`
  );

  if (data.Error) {
    return {
      totalResults: '0',
      films: [],
      error: data.Error,
    };
  }

  return {
    totalResults: data.totalResults,
    films: data.Search,
  };
};
