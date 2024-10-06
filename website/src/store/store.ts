import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

import themeReducer from './slices/themeSlice';
import favouritesReducer from './slices/favouritesSlice';
import filtersReducer from './slices/filtersSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    favourites: favouritesReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
