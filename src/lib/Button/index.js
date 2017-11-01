import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const Button = ({ children, primary }) => {
  const buttonBaseClass = cn(primary ? styles.primary : styles.basic);

  return <button className={buttonBaseClass}>{children}</button>;
};

Button.defaultProps = {
  children: 'Hello!!',
  primary: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  primary: PropTypes.bool,
};

export default Button;
