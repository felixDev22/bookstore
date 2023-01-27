import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddNewBook from './AddNewBook';
import { deleteBook } from '../../redux/api.js/apiCall';

const BookList = () => {
  const dispatch = useDispatch();

  const handleDelete = (bookId) => {
    dispatch(deleteBook({ id: bookId }));
  };
  const bookHolder = useSelector((state) => state.bookApi.data);

  return (
    <div className="bookHolder">
      {bookHolder.map((book) => (
        <div key={book.id} className="book-item">
          <div className="book-details">
            <Book title={book.title} author={book.author} />
            <br />
            <div className="comment">
              <button type="button" className="btn">
                Comments
              </button>
              <div className="line-divider" />
              <button
                type="button"
                className="btn"
                onClick={() => handleDelete(book.id)}
              >
                Remove
              </button>
              <div className="line-divider" />
              <button type="button" className="btn">
                Edit
              </button>
            </div>
          </div>

          <div className="loading">
            <h3>80% completed</h3>
          </div>
          <div className="main-divider" />

          <div className="Current">
            <p>CURRENT CHAPTER</p>
            <p>CHAPTER 23</p>
            <br />
            <button type="button" className="update">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      ))}
      <hr />
      <AddNewBook />
    </div>
  );
};

export default BookList;
