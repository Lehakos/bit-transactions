import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ placeholder, value, items, ...rest }) => {
  return (
    <select
      defaultValue={value || 'placeholder'}
      {...rest}
    >
      {
        !!placeholder &&
        <option
          value="placeholder"
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
