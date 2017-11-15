import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Menu from './Menu';
import Item from './Item';

import './styles.css';

class BaseMenu extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    fixed: PropTypes.bool,
  };

  static defaultProps = {
    fixed: true,
  };

  static Menu = Menu;
  static Item = Item;

  render() {
    const { children, fixed } = this.props;

    const stylesClass = cn('menu', { fixed });
    return (
      <div styleName={stylesClass}>
        <div styleName="container">{children}</div>
      </div>
    );
  }
}

export default BaseMenu;
