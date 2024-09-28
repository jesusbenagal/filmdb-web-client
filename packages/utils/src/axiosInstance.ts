import axios, { type AxiosInstance } from 'axios';

export const createAxios = (baseURL: string): AxiosInstance => {
  if (!baseURL) throw new Error('baseURL is required');

  const instance = axios.create({ baseURL });

  return instance;
};
