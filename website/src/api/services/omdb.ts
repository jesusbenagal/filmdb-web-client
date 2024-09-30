import { createAxios } from '@filmdb/utils';

const omdbInstance = createAxios('http://www.omdbapi.com/');

const apiKey: string = import.meta.env.OMDB_API_KEY;
