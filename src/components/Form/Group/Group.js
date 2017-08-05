import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Group.css';

const Group = ({ children, center, horizontal }) => {
  const classNames = cn({
    'form-group': true,
    'form-group_center': center,
    'form-group_horizontal': horizontal,
  });

  return (
    <div className={classNames}>
      {Children.toArray(children)}
    </div>
  );
};

Group.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  horizontal: PropTypes.bool,
};

export default Group;
