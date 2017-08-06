import React from 'react';

import AbstractField from './AbstractField';
import Select from '../Select';

const SelectRedux = (props) => {
  return <AbstractField Element={Select} {...props} />;
}

export default SelectRedux;
