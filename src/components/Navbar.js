import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav-left">
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
      </div>
      <div className="nav-right">
        <div>
          <a href="/public/index.html" aria-label="user">
            <i className="fa-sharp fa-solid fa-circle-user" />
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
