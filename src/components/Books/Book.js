import Card from '../DisplayUI/Card';

// eslint-disable-next-line object-curly-newline
const Book = ({ title, author }) => (
  <li className="bookHolder">
    <h3>{title}</h3>
    <p>{author}</p>
  </li>
);

export default Book;
