import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  page: 1,
  currentSearch: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },

    setCurrentSearch(state, action) {
      const currSearch = action.payload.trim();

      if (state.currentSearch !== currSearch) {
        state.photos.length = 0;
        state.currentSearch = currSearch;
      }
    },

    setCurrentSearchUrl(state, action) {
      state.currentSearchUrl = action.payload;
    },

    setPhotos(state, action) {
      state.photos = [...state.photos, ...action.payload];
    },

    searchPhotos(state, action) {},
  },
});

export const photoActions = photoSlice.actions;

export default photoSlice;
