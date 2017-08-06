import { fromJS } from 'immutable';

import * as types from './types';

const initialState = fromJS({
  auth: !!localStorage.getItem('token'),
});

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return state.set('auth', true);

      case types.LOGOUT_SUCCESS:
      return state.set('auth', false);

    default:
      return state;
  }
}
