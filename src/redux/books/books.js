import { createReducer } from '@reduxjs/toolkit';

// Define action type for addding & removing
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: ADD_BOOK,
  payload: bookId,
});

// set intial state to an empty array of books
const initialState = [];

const booksReducer = createReducer(initialState, {
  [ADD_BOOK]: (state, action) => {
    state.push(action.payload);
  },
  [REMOVE_BOOK]: (state, action) => {
    state.filter((book) => book.id !== action.payload);
  },
});

export default booksReducer;
