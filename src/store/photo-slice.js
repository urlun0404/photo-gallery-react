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
      state.currentSearch = action.payload;
    },

    setPhotos(state, action) {
      state.photos = action.payload;
    },

    searchPhotos(state, action) {},
  },
});

export const photoActions = photoSlice.actions;

export default photoSlice;
