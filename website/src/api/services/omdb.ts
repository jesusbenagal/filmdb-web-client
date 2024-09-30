import { createAxios } from '@filmdb/utils';

import type { IGetFilmsReponse, IFilm } from '@/interfaces/api';

const omdbInstance = createAxios('http://www.omdbapi.com/');

const apiKey: string = import.meta.env.VITE_OMDB_API_KEY;

console.log(apiKey);

export const getFilms = async (
  search: string
): Promise<{ totalResults: string; films: IFilm[] }> => {
  const { data } = await omdbInstance.get<IGetFilmsReponse>(
    `?apikey=${apiKey}&s=${search}`
  );

  return {
    totalResults: data.totalResults,
    films: data.Search,
  };
};
