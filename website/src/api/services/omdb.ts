import { createAxios } from '@filmdb/utils';

import type {
  IGetFilmsReponse,
  IFilmsApiResponse,
  IFilmDetail,
  IOption,
} from '@/interfaces/api';

const omdbInstance = createAxios('https://www.omdbapi.com');

const apiKey: string = import.meta.env.VITE_OMDB_API_KEY;

interface IGetFilmsParams {
  search: string;
  category: IOption | null;
  page: number;
  sortByRating: boolean;
  sortByVotes: boolean;
}

export const getFilms = async ({
  search,
  category,
  page,
  sortByRating,
  sortByVotes,
}: IGetFilmsParams): Promise<IFilmsApiResponse> => {
  const { data } = await omdbInstance.get<IGetFilmsReponse>('/', {
    params: {
      apikey: apiKey,
      s: search,
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

  if (!sortByRating && !sortByVotes) {
    return {
      totalResults: data.totalResults,
      films: data.Search,
      totalPages: Math.ceil(parseInt(data.totalResults, 10) / 10),
    };
  }

  const filmDetailsPromises = data.Search.map(async (movie) => {
    const movieDetailsResponse = await omdbInstance.get('/', {
      params: {
        apikey: apiKey,
        i: movie.imdbID,
      },
    });
    return movieDetailsResponse.data;
  });

  const filmDetails = await Promise.all(filmDetailsPromises);

  let sortedFilms = filmDetails;
  if (sortByRating) {
    sortedFilms = sortedFilms.sort(
      (a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating)
    );
  }

  if (sortByVotes) {
    sortedFilms = sortedFilms.sort(
      (a, b) =>
        parseInt(b.imdbVotes.replace(/,/g, ''), 10) -
        parseInt(a.imdbVotes.replace(/,/g, ''), 10)
    );
  }

  return {
    totalResults: data.totalResults,
    films: sortedFilms,
    totalPages: Math.ceil(parseInt(data.totalResults, 10) / 10),
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
