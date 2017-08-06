import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './Label.css';

const Label = ({ children, text, error, ...rest }) => {
  return (
    <label {...rest}>
      {
        !!text &&
        <span className="label__text">{text}</span>
      }
      {Children.toArray(children)}
      {
        !!error &&
        <span className="label__error">{error}</span>
      }
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  text: PropTypes.string,
};

export default Label;
