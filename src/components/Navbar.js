import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav-items container">
        <div>
          <h2>Bookstore CMS</h2>
        </div>
        <ul>
          <li>
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
        <button type="button">
          <i className="fa-sharp fa-solid fa-circle-user" />
        </button>
      </div>
    </nav>
  </header>
);

export default Navbar;
