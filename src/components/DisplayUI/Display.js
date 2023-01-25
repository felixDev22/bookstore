import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';

const Display = ({ children }) => (
  <div className="container">
    <Navbar />
    <main>{children}</main>
  </div>
);

Display.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Display;
