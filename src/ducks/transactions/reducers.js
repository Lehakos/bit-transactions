import { fromJS } from 'immutable';

import * as types from './types';

const initialState = fromJS({
  transactions: {
    byId: {},
    ids: [],
  },
  banks: {
    byId: {},
    ids: [],
  }
});

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_BANKS_SUCCESS:
      return state.set('banks', fromJS(payload.data));

    case types.GET_TRANSACTIONS_SUCCESS:
      return state.set('transactions', fromJS(payload.data));

    case types.ADD_TRANSACTION_SUCCESS:
      return state
        .setIn(['transactions', 'byId', payload.id], fromJS(payload))
        .updateIn(['transactions', 'ids'], ids => ids.unshift(payload.id));

    case types.DELETE_TRANSACTION_SUCCESS:
      return state
        .deleteIn(['transactions', 'byId', payload.id])
        .updateIn(['transactions', 'ids'], ids => ids.filter(id => id !== payload.id));

    default:
      return state;
  }
}
