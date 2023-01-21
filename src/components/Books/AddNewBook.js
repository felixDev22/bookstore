import React from 'react';
import Card from '../DisplayUI/Card';

const AddNewBook = () => (
  <Card>
    <h2>Add New Book</h2>
    <form>
      <div>
        <input
          type="text"
          placeholder="Book Title"
        />
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
  </Card>
);

export default AddNewBook;
