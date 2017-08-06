import { all } from 'redux-saga/effects';

import { saga as userSaga } from './ducks/user';
import { saga as transactionsSaga } from './ducks/transactions';

export default function* () {
  yield all([
    userSaga(),
    transactionsSaga(),
  ]);
}
