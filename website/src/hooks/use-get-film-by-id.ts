import useSWR from 'swr';

import { getFilmById } from '@/api/services/omdb';

export const useGetFilmById = (id: string) => {
  const { data, isLoading, error } = useSWR(
    ['film', id],
    () => getFilmById(id),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      revalidateOnMount: true,
    }
  );

  return {
    data,
    isLoading,
    isError: !!error,
  };
};
