import { createAxios } from '@filmdb/utils';

import type {
  IGetFilmsReponse,
  IFilmsApiResponse,
  IFilmDetail,
  IOption,
} from '@/interfaces/api';

const omdbInstance = createAxios('https://www.omdbapi.com/');

const apiKey: string = import.meta.env.VITE_OMDB_API_KEY;

export const getFilms = async (
  search: string,
  category: IOption | null
): Promise<IFilmsApiResponse> => {
  const { data } = await omdbInstance.get<IGetFilmsReponse>('/', {
    params: {
      apikey: apiKey,
      s: search,
      type: category?.value,
    },
  });

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

export const getFilmById = async (id: string): Promise<IFilmDetail> => {
  const { data } = await omdbInstance.get<IFilmDetail>(
    `?apikey=${apiKey}&i=${id}`
  );

  return data;
};
