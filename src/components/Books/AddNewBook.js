import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postBook } from '../../redux/api.js/apiCall';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Select Category');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: nanoid(),
      title,
      author,
      category,
    };

    dispatch(postBook(book));
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
        <select
          className="category"
          id="category"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">{category}</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Politics">Politics</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Poetry">Poetry</option>
          <option value="Adventure">Adventure</option>
          <option value="Science-fiction">Science-fiction</option>
        </select>
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
