import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
