import useSWR from 'swr';

import { getFilms } from '@/api/services/omdb';

import type { IOption } from '@/interfaces/api';

interface IUseGetFilmsParams {
  search: string;
  category: IOption | null;
  page: number;
  sortByRating: boolean;
  sortByVotes: boolean;
}

export const useGetFilms = ({
  search,
  category,
  page,
  sortByRating,
  sortByVotes,
}: IUseGetFilmsParams) => {
  const { data, isLoading, error } = useSWR(
    search === ''
      ? null
      : ['films', search, category, page, sortByRating, sortByVotes],
    () => getFilms({ search, category, page, sortByRating, sortByVotes }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  return {
    data,
    isLoading,
    isError: !!error,
  };
};
