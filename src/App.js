import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/Books/BookList';
import Navbar from './components/Navbar';
import Categories from './components/pages/Categories';

import './index.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
export default App;
