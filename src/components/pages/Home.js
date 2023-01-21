import React from 'react';

const BOOKS = [
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
      <BookList books={BOOKS} />
      <AddNewBook />
    </Card>
  </section>
);
