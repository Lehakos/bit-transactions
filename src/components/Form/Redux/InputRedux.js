import React from 'react';

import AbstractField from './AbstractField';
import Input from '../Input';

const InputRedux = (props) => {
  return <AbstractField Element={Input} {...props} />;
}

export default InputRedux;
