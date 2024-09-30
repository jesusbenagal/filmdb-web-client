import { useState } from 'react';
import { FilmCard, TextField } from '@filmdb/ui';

import { useGetFilms } from '@/hooks/use-get-films';

export default function MainView() {
  const [value, setValue] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const { data, isLoading } = useGetFilms(search);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
      }}
    >
      <TextField
        label="Search for a movie"
        placeholder="Search for a movie..."
        value={value}
        onChange={(value) => setValue(value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setSearch(value);
          }
        }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px',
          padding: '16px',
        }}
      >
        {isLoading && <p>Loading...</p>}
        {data?.films.map((film) => (
          <FilmCard
            key={film.imdbID}
            imgUrl={film.Poster}
            onClick={() => console.log(film.Title)}
          />
        ))}
      </div>
    </div>
  );
}
