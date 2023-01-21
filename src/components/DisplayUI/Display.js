import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';

const Display = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

Display.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Display;
