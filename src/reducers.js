import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable';

import userReducer from './ducks/user';
import transactionsReducer from './ducks/transactions';

const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  user: userReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
