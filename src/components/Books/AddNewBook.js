import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook } from '../../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form className="bookInput" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          className="bookTitle"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="author"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <div>
          <button className="add-btn" value="ADD BOOK" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBook;
