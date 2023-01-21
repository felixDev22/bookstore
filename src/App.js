import React from 'react';
import { Routes, Route } from 'React-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories'

import './Index.css';

const App = () => (
  <Display>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Display>
);

export default App;
