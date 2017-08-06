import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Select.css';

const Select = ({ placeholder, valid, invalid, value, items, ...rest }) => {
  const classNames = cn({
    select: true,
    select_valid: valid,
    select_invalid: invalid,
  });

  return (
    <select
      className={classNames}
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
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
  })).isRequired,
};

export default Select;
