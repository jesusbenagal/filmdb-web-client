import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavouritesState {
  favourites: string[];
}

const getInitialFavourites = (): string[] => {
  const favourites = localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
};

const initialState: FavouritesState = {
  favourites: getInitialFavourites(),
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(
        (favourite) => favourite !== action.payload
      );
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
