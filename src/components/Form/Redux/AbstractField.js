import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

const AbstractField = ({
  input,
  meta: {
    error,
    touched,
    valid,
  },
  label,
  Element,
  ...props
}) => {
  const showError = touched && !!error;

  return (
    <Label
      text={label}
      error={showError ? error : null}
    >
      <Element
        valid={touched && valid}
        invalid={showError}
        {...input}
        {...props}
      />
    </Label>
  );
};

AbstractField.propTypes = {
  Element: PropTypes.func.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
};

export default AbstractField;
