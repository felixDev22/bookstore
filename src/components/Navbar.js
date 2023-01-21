import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div>
        <h2>Bookstore CMS</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>

      </ul>

    </nav>

  </header>
);

export default Navbar;
