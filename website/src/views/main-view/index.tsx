import { AutoComplete, TextField } from '@filmdb/ui';

import FilmsContainer from '@/components/films/films-container';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { setSearch, setCategory, setValue } from '@/store/slices/filtersSlice';

import { useGetFilms } from '@/hooks/use-get-films';

import { getStyles } from './styles';

export default function MainView() {
  const styles = getStyles();

  const { category, page, search, value } = useAppSelector(
    (state) => state.filters
  );
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetFilms(search, category, page);

  const handleKeyDown = (e: React.KeyboardEvent<Element>) => {
    if (e.key === 'Enter') {
      dispatch(setSearch(value));
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
          onChange={(value) => dispatch(setValue(value))}
          onKeyDown={handleKeyDown}
          style={{
            width: '60%',
          }}
        />
        <AutoComplete
          label="Category"
          value={category}
          onChange={(value) => dispatch(setCategory(value))}
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
      <FilmsContainer data={data} isLoading={isLoading} />
    </div>
  );
}
