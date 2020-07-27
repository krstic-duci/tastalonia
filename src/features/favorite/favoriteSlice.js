import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favRecipe: [],
  },
  reducers: {
    addFavRecipe: (state, action) => {
      state.favRecipe.push(action.payload);
    },
    removeFavRecipe: (state, action) => {
      state.favRecipe.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const { addFavRecipe, removeFavRecipe } = favoriteSlice.actions;

export const selectFavRecipe = (state) => state.favorite.favRecipe;

export default favoriteSlice.reducer;
