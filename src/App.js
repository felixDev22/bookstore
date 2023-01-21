import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Display from './components/DisplayUI/Display';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';

import './index.css';

const App = () => (
  <Display>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/categories"
        element={<Categories />}
      />
    </Routes>
  </Display>
);

export default App;
