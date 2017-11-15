import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.css';

const Item = ({
  active, to, children, as: Tag,
}) => (
  <Tag styleName={cn('item', { active })} href={to}>
    {children}
  </Tag>
);

Item.defaultProps = {
  as: 'a',
  to: '#',
};

Item.propTypes = {
  as: PropTypes.element,
  to: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default Item;
