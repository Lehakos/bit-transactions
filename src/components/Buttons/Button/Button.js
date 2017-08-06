import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.css';

const Button = ({ tag: Wrapper, className, theme, children, ...rest }) => {
  const classNames = cn({
    btn: true,
    btn_primary: theme === 'primary',
    btn_danger: theme === 'danger',
  }, className);

  return (
    <Wrapper className={classNames} {...rest}>
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
  className: PropTypes.string,
  tag: PropTypes.oneOf(['a', 'button']),
  theme: PropTypes.oneOf(['primary', 'danger']),
};

export default Button;
