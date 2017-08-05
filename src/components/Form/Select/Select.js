import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ placeholder, value, items, ...rest }) => {
  return (
    <select
      className="select"
      defaultValue={value || 'placeholder'}
      {...rest}
    >
      {
        !!placeholder &&
        <option
          value="placeholder"
          className="select__placeholder"
          disabled
        >
          {placeholder}
        </option>
      }
      {items.map((item) => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
  })).isRequired,
};

export default Select;
