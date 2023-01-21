import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category,
}) => (
  <li>
    <Card id={id}>
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{author}</p>
    </Card>
  </li>
);
export default Book;