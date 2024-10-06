export interface IGetFilmsReponse {
  Response: string;
  Search: IFilm[];
  totalResults: string;
  Error?: string;
}

export interface IFilm {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  imdbRating?: string;
  imdbVotes?: string;
}

export interface IFilmsApiResponse {
  films: IFilm[];
  totalResults: string;
  error?: string;
  totalPages: number;
}
export interface IFilmDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Error?: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IOption {
  label: string;
  value: string;
}
