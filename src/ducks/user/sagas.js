import { delay } from 'redux-saga';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import * as api from '../../api';

import * as types from './types';
import * as actions from './actions';

export function* login({ payload }) {
  try {
    yield call(delay, 500);
    const { data } = yield call(api.login, payload);

    if (!data.success) {
      throw new Error('Не удалось войти. Учетные данные не верны.');
    }

    localStorage.setItem('token', data.token);

    yield put(actions.loginSuccess());
  } catch (err) {
    yield put(actions.loginFail(err));
  }
}

export function* logout() {
  try {
    yield call(delay, 500);
    const { data } = yield call(api.logout);

    if (!data.success) {
      throw new Error('Не удалось выйти. Попробуйте еще раз.');
    }

    localStorage.removeItem('token');

    yield put(actions.logoutSuccess());
  } catch (err) {
    yield put(actions.logoutFail(err));
  }
}

export default function* () {
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.LOGOUT, logout);
}
