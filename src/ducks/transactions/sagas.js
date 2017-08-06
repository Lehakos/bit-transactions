import { delay } from 'redux-saga';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import * as api from '../../api';

import * as types from './types';
import * as actions from './actions';

export function* addTransaction({ payload }) {
  try {
    yield call(delay, 500); // имитируем задержку
    const { data } = yield call(api.addTransaction, payload);

    if (!data.success) {
      throw new Error('Не удалось добавить транзакцию');
    }

    yield put(actions.addTransactionSuccess(data.transaction));
  } catch (err) {
    console.error(err);
    yield put(actions.addTransactionFail(err));
  }
}

export function* deleteTransaction({ payload }) {
  try {
    yield call(delay, 500); // имитируем задержку
    const { data } = yield call(api.deleteTransaction, payload.id);

    if (!data.success) {
      throw new Error('Не удалось удалить транзакцию');
    }

    yield put(actions.deleteTransactionSuccess(payload.id));
  } catch (err) {
    console.error(err);
    yield put(actions.deleteTransactionFail(err));
  }
}

export function* getTransactions() {
  try {
    yield call(delay, 500); // имитируем задержку
    const { data } = yield call(api.getTransactions);

    if (!data.success) {
      throw new Error('Не удалось получить список транзакций');
    }

    const transactions = data.transactions.reduce((acc, transaction) => {
      acc.byId[transaction.id] = transaction;
      acc.ids.push(transaction.id);

      return acc;
    }, { byId: {}, ids: [] });

    yield put(actions.getTransactionsSuccess(transactions));
  } catch (err) {
    console.error(err);
    yield put(actions.getTransactionsFail(err));
  }
}

export function* getBanks() {
  try {
    yield call(delay, 500); // имитируем задержку
    const { data } = yield call(api.getBanks);

    if (!data.success) {
      throw new Error('Не удалось получить список банков');
    }

    const banks = data.banks.reduce((acc, bank) => {
      acc.byId[bank.id] = bank;
      acc.ids.push(bank.id);

      return acc;
    }, { byId: {}, ids: [] });

    yield put(actions.getBanksSuccess(banks));
  } catch (err) {
    yield put(actions.getBanksFail(err));
  }
}

export default function* () {
  yield takeLatest(types.GET_BANKS, getBanks);
  yield takeLatest(types.GET_TRANSACTIONS, getTransactions);
  yield takeEvery(types.ADD_TRANSACTION, addTransaction);
  yield takeEvery(types.DELETE_TRANSACTION, deleteTransaction);
}
