import { useState } from 'react';
import { TextField, type IStyles } from '@filmdb/ui';

import FilmsContainer from '@/components/films/films-container';

import { useGetFilms } from '@/hooks/use-get-films';

const getStyles = (): IStyles => ({
  root: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
});

export default function MainView() {
  const styles = getStyles();

  const [value, setValue] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const { data, isLoading } = useGetFilms(search);

  const handleKeyDown = (e: React.KeyboardEvent<Element>) => {
    if (e.key === 'Enter') {
      setSearch(value);
    }
  };

  return (
    <div style={styles.root}>
      <TextField
        label="Film Title"
        value={value}
        onChange={(value) => setValue(value)}
        onKeyDown={handleKeyDown}
      />
      <FilmsContainer data={data} isLoading={isLoading} />
    </div>
  );
}
