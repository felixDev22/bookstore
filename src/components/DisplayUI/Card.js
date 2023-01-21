import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.css';

const Card = (props) => {
  const { extra, children } = props;

  return (
    <div
      className={extra ? `${classes.card} ${extra}` : classes.card}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  extra: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  extra: '',
};

export default Card;
