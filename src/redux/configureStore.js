import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';
import bookApiReducer from './api.js/apiCall';

const store = configureStore({
  reducer: {
    book: booksReducer, // to the local storage
    category: categoriesReducer,
    bookApi: bookApiReducer.reducer, // to the api storage
  },
});

export default store;
