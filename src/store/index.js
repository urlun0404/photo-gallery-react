import { configureStore } from '@reduxjs/toolkit';
import photoSlice from './photo-slice';

const store = configureStore({
  reducer: {
    photo: photoSlice.reducer,
  },
});

export default store;
