import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
});

export default store;
