import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BookList from './components/Books/BookList';
import Navbar from './components/Navbar';
import Categories from './components/pages/Categories';
import { getBooks } from './redux/api.js/apiCall';

import './index.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
export default App;
