import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable';

import userReducer from './ducks/user';

const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  user: userReducer,
});

export default rootReducer;
