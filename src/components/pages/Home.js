import React from 'react';
import Card from '../DisplayUI/Card';
import AddNewBook from '../Books/AddNewBook';
import BookList from '../Books/BookList';

const SAMPLE_BOOKS = [
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
];

const Home = () => (
  <section>
    <Card>
      <BookList books={SAMPLE_BOOKS} />
      <AddNewBook />
    </Card>
  </section>
);

export default Home;
