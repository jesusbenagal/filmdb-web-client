import { useState } from 'react';
import { AutoComplete, TextField } from '@filmdb/ui';

import FilmsContainer from '@/components/films/films-container';

import { useGetFilms } from '@/hooks/use-get-films';

import { getStyles } from './styles';

import type { IOption } from '@/interfaces/api';

export default function MainView() {
  const styles = getStyles();

  const [value, setValue] = useState<string>('');
  const [category, setCategory] = useState<IOption | null>(null);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useGetFilms(search, category, page);

  const handleKeyDown = (e: React.KeyboardEvent<Element>) => {
    if (e.key === 'Enter') {
      setSearch(value);
    }
  };

  return (
    <div style={styles.root}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <TextField
          label="Film Title"
          value={value}
          onChange={(value) => setValue(value)}
          onKeyDown={handleKeyDown}
          style={{
            width: '60%',
          }}
        />
        <AutoComplete
          label="Category"
          value={category}
          onChange={(value) => setCategory(value)}
          options={[
            { label: 'Movie', value: 'movie' },
            { label: 'Series', value: 'series' },
            { label: 'Episode', value: 'episode' },
          ]}
          style={{
            width: '20%',
          }}
        />
      </div>
      <FilmsContainer
        data={data}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
      />
    </div>
  );
}
