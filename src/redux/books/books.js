import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// set intial state to an empty array of books
const initialState = [
  {
    id: uuidv4(),
    title: 'Maasai Mara',
    author: 'Bazu Bazu',
  },
  {
    id: uuidv4(),
    title: 'Giraffe Park',
    author: 'Sonko Bazu',
  },
  {
    id: uuidv4(),
    title: 'Amboseli Mambo',
    author: 'Kitu Safi',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: ADD_BOOK,
  payload: bookId,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book !== action.payload)];
    default:
      return state;
  }
};

export default booksReducer;
