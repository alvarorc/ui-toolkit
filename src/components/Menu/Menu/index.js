import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

const Menu = ({ children, pullLeft, pullRight }) => (
  <div styleName={cn('group', { left: pullLeft, right: pullRight })}>{children}</div>
);

Menu.propTypes = {
  children: PropTypes.node,
  pullLeft: PropTypes.bool,
  pullRight: PropTypes.bool,
};

export default Menu;
