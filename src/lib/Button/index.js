import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const Button = ({ children, primary, onClick }) => {
  const buttonBaseClass = cn(primary ? styles.primary : styles.basic);

  return (
    <button className={buttonBaseClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Hello!!',
  primary: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
