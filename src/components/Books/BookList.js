import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddNewBook from './AddNewBook';
import { removeBook } from '../../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };
  const bookHolder = useSelector((state) => state.book);

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
