import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Container.css';

const Container = ({ className, children }) => {
  return (
    <div className={cn('container', className)}>
      {Children.toArray(children)}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
