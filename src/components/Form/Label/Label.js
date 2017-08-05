import React, { Children } from 'react';
import PropTypes from 'prop-types';

import './Label.css';

const Label = ({ children, text, ...rest }) => {
  return (
    <label {...rest}>
      {
        !!text &&
        <span className="label__text">{text}</span>
      }
      {Children.toArray(children)}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

export default Label;
