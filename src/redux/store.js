import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categoryReducer';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});