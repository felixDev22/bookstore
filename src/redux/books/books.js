import { createReducer, createAction } from '@reduxjs/toolkit';

// Define action type for addding & removing
export const ADD_BOOK = createAction('books/add');
export const REMOVE_BOOK = createAction('books/remove');

// set intial state to an empty array of books
const initialState = {
  books: [],
};

// Reducer
const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_BOOK, (state, action) => {
    state.books.push(action.payload);
  });
  builder.addCase(REMOVE_BOOK, (state, action) => {
    state.books.filter((books) => books.id !== action.payload);
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;
