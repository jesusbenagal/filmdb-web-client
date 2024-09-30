import useSWR from 'swr';

import { getFilms } from '@/api/services/omdb';

export const useGetFilms = (search: string) => {
  const { data, isLoading, error } = useSWR(
    search === '' ? null : ['films', search],
    () => getFilms(search),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      onError: (error) => console.error(error),
    }
  );

  return {
    data,
    isLoading,
    isError: !!error,
  };
};
