import useSWR from 'swr';

import { getFilms } from '@/api/services/omdb';

import type { IOption } from '@/interfaces/api';

export const useGetFilms = (
  search: string,
  category: IOption | null,
  page: number
) => {
  const { data, isLoading, error } = useSWR(
    search === '' ? null : ['films', search, category, page],
    () => getFilms(search, category, page),
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
