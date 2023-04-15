import classes from './Button.module.scss';
import React from 'react';

const Button = ({ label, onClick, type }) => {
  return (
    <button 
      className={classes.button}
      type={type} onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;