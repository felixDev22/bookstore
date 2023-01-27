/* eslint-disable no-param-reassign */
const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

// action type
const POST_BOOKS = 'bookstore/POST_BOOKS';
const GET_BOOKS = 'bookstore/GET_BOOKS';
const DELETE_BOOKS = 'bookstore/DELETE_BOOKS';

const BooksID = 'C1cSMj0ZDVI91rbGgKJ9';

// Get action
const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const endpoint = `/apps/${BooksID}/books`;
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi${endpoint}`;
  const response = await axios.get(url);
  const bookList = Object.entries(response.data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });

  return bookList;
});

// post action
const postBook = createAsyncThunk(POST_BOOKS, async (payload, api) => {
  const endpoint = `/apps/${BooksID}/books`;
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi${endpoint}`;
  await axios.post(url, payload);

  return api.dispatch(getBooks());
});

// delete action
const deleteBook = createAsyncThunk(DELETE_BOOKS, async (payload, api) => {
  const endpoint = `/apps/${BooksID}/books/${payload.id}`;
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi${endpoint}`;
  await axios.delete(url);

  return api.dispatch(getBooks());
});

// reducers

const bookApiReducer = createSlice({
  name: 'bookApi',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    },
  },
});

export default bookApiReducer;
export { getBooks, postBook, deleteBook };
