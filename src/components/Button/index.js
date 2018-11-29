import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './style.css';

const Button = ({ children, primary, onClick }) => {
  const buttonBaseClass = cn(primary ? 'primary' : 'basic');

  return (
    <button onClick={onClick} styleName={buttonBaseClass}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Hello new change',
  primary: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
