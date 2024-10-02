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
}
