import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.css';

const Input = ({ invalid, valid, ...rest }) => {
  const classNames = cn({
    input: true,
    input_valid: valid,
    input_invalid: invalid,
  });

  return (
    <input className={classNames} {...rest} />
  );
};

Input.propTypes = {
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default Input;
