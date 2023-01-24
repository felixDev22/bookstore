
// Define action type for addding & removing
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// set intial state to an empty array of books
const initialState = {
  books: [
    {
      id: 1,
      title: 'Maasai Mara',
      author: 'Bazu Bazu',
      category: 'Adventure',
    },
    {
      id: 2,
      title: 'Giraffe Park',
      author: 'Sonko Bazu',
      category: 'Comedy',
    },
    {
      id: 3,
      title: 'Amboseli Mambo',
      author: 'Kitu Safi',
      category: 'Romance',
    },
  ],
};

// Reducer
const booksReducer = (state = initialState, action = {}) => {
  if( act)
export default booksReducer;
