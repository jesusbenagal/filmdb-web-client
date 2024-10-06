import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IOption } from '@/interfaces/api';

interface FiltersState {
  value: string;
  category: IOption | null;
  search: string;
  page: number;
}

const initialState: FiltersState = {
  value: '',
  category: null,
  search: '',
  page: 1,
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
  },
});

export const { setValue, setCategory, setSearch, setPage } =
  filtersSlice.actions;

export default filtersSlice.reducer;
