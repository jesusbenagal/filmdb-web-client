import { createAxios } from '@filmdb/utils';

import type {
  IGetFilmsReponse,
  IFilmsApiResponse,
  IFilmDetail,
  IOption,
} from '@/interfaces/api';

const omdbInstance = createAxios('https://www.omdbapi.com');

const apiKey: string = import.meta.env.VITE_OMDB_API_KEY;

export const getFilms = async (
  search: string,
  category: IOption | null,
  page: number
): Promise<IFilmsApiResponse> => {
  const { data } = await omdbInstance.get<IGetFilmsReponse>('/', {
    params: {
      apikey: apiKey,
      s: search,
      plot: 'full',
      type: category?.value,
      page: page,
    },
  });

  if (data.Error) {
    return {
      totalResults: '0',
      films: [],
      error: data.Error,
      totalPages: 0,
    };
  }

  return {
    totalResults: data.totalResults,
    films: data.Search,
    totalPages: Math.ceil(parseInt(data.totalResults) / 10),
  };
};

export const getFilmById = async (id: string): Promise<IFilmDetail> => {
  const { data } = await omdbInstance.get<IFilmDetail>(`/`, {
    params: {
      apikey: apiKey,
      i: id,
      plot: 'full',
    },
  });

  return data;
};
