import React from 'react';
import Card from '../DisplayUI/Card';

import { addBook } from '../../redux/books/books';

const AddNewBook = () => (
  <Card>
    <div className="form-container">
      <h2>Add New Book</h2>
      <form className="bookInput">
        <div>
          <input type="text" placeholder="Book Title" className="bookTitle" />
        </div>
        <div>
          <select>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <div>
          <button type="button">Add Book</button>
        </div>
      </form>
    </div>
  </Card>
);

export default AddNewBook;
