import useSWR from 'swr';

import { getFilms } from '@/api/services/omdb';

import type { IOption } from '@/interfaces/api';

export const useGetFilms = (search: string, category: IOption | null) => {
  const { data, isLoading, error } = useSWR(
    search === '' ? null : ['films', search, category],
    () => getFilms(search, category),
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
