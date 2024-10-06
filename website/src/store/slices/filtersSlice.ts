import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IOption } from '@/interfaces/api';

interface FiltersState {
  value: string;
  category: IOption | null;
  search: string;
  page: number;
  sortByRating: boolean;
  sortByVotes: boolean;
}

const initialState: FiltersState = {
  value: '',
  category: null,
  search: '',
  page: 1,
  sortByRating: false,
  sortByVotes: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setCategory(state, action: PayloadAction<IOption | null>) {
      state.category = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSortByRating(state, action: PayloadAction<boolean>) {
      state.sortByRating = action.payload;
      state.sortByVotes = false;
    },
    setSortByVotes(state, action: PayloadAction<boolean>) {
      state.sortByVotes = action.payload;
      state.sortByRating = false;
    },
  },
});

export const {
  setValue,
  setCategory,
  setSearch,
  setPage,
  setSortByRating,
  setSortByVotes,
} = filtersSlice.actions;

export default filtersSlice.reducer;
