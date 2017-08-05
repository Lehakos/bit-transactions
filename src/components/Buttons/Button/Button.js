import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.css';

const Button = ({ tag: Wrapper, theme, children }) => {
  const classNames = cn({
    btn: true,
    btn_primary: theme === 'primary',
    btn_danger: theme === 'danger',
  });

  return (
    <Wrapper className={classNames}>
      {Children.toArray(children)}
    </Wrapper>
  );
};

Button.defaultProps = {
  tag: 'button',
  theme: 'primary',
};

Button.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['a', 'button']),
  theme: PropTypes.oneOf(['primary', 'danger']),
};

export default Button;
