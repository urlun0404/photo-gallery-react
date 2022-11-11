import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
  page: 1,
  perPagePhotoNum: 15,
  currentSearch: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },

    setPerPagePhotoNum(state, action) {
      state.perPagePhotoNum = action.payload;
    },

    setCurrentSearch(state, action) {
      state.currentSearch = action.payload;
    },

    setPhotos(state, action) {
      if (action.payload.isNewSearch) {
        state.photos = [...action.payload.newPhotos];
      } else {
        state.photos = [...state.photos, ...action.payload.newPhotos];
      }
    },

    searchPhotos(state, action) {},
  },
});

export const photoActions = photoSlice.actions;

export default photoSlice;
