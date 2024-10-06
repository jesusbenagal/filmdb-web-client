import { AutoComplete, TextField } from '@filmdb/ui';

import FilmsContainer from '@/components/films/films-container';
import Button from '@/components/button';

import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  setSearch,
  setCategory,
  setValue,
  setSortByRating,
  setSortByVotes,
} from '@/store/slices/filtersSlice';

import { useGetFilms } from '@/hooks/use-get-films';

import { getStyles } from './styles';

export default function MainView() {
  const styles = getStyles();

  const { category, page, search, value, sortByRating, sortByVotes } =
    useAppSelector((state) => state.filters);
  const { darkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetFilms({
    search,
    category,
    page,
    sortByRating,
    sortByVotes,
  });

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
        <Button
          label="Sort By Rating"
          color="primary"
          onClick={() => dispatch(setSortByRating(!sortByRating))}
          darkMode={darkMode}
          isActive={sortByRating}
        />
        <Button
          label="Sort By Votes"
          color="primary"
          onClick={() => dispatch(setSortByVotes(!sortByVotes))}
          darkMode={darkMode}
          isActive={sortByVotes}
        />
      </div>
      <FilmsContainer data={data} isLoading={isLoading} />
    </div>
  );
}
