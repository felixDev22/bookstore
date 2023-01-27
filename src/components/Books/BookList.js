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
    <div className="bookHolder container">
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
                onClick={() => handleDelete(book.Id)}
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
            <div className="spinner">
              <i className="fa-sharp fa-solid fa-circle-notch" />
            </div>
            <div>
              <h5>80%</h5>
              <p>completed</p>
            </div>
          </div>
          <div className="main-divider" />

          <div className="current">
            <p>CURRENT CHAPTER</p>
            <h5>Chapter 23</h5>
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
