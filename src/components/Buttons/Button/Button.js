import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.css';

const Button = ({ tag: Wrapper, type, children }) => {
  const classNames = cn({
    btn: true,
    btn_primary: type === 'primary',
    btn_danger: type === 'danger',
  });

  return (
    <Wrapper className={classNames}>
      {Children.toArray(children)}
    </Wrapper>
  );
};

Button.defaultProps = {
  tag: 'button',
  type: 'primary',
};

Button.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['a', 'button']),
  type: PropTypes.oneOf(['primary', 'danger']),
};

export default Button;
