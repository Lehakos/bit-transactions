import * as types from './types';

export const addTransaction = (payload) => ({
  type: types.ADD_TRANSACTION,
  payload,
});

export const addTransactionSuccess = (payload) => ({
  type: types.ADD_TRANSACTION_SUCCESS,
  payload,
});

export const addTransactionFail = (err) => ({
  type: types.ADD_TRANSACTION_FAIL,
  payload: { err },
});

export const deleteTransaction = (id) => ({
  type: types.DELETE_TRANSACTION,
  payload: { id },
});

export const deleteTransactionSuccess = (id) => ({
  type: types.DELETE_TRANSACTION_SUCCESS,
  payload: { id },
});

export const deleteTransactionFail = (err) => ({
  type: types.DELETE_TRANSACTION_FAIL,
  payload: { err },
});

export const getTransactions = () => ({
  type: types.GET_TRANSACTIONS,
});

export const getTransactionsSuccess = (data) => ({
  type: types.GET_TRANSACTIONS_SUCCESS,
  payload: { data },
});

export const getTransactionsFail = (err) => ({
  type: types.GET_TRANSACTIONS_FAIL,
  payload: { err },
});

export const getBanks = () => ({
  type: types.GET_BANKS,
});

export const getBanksSuccess = (data) => ({
  type: types.GET_BANKS_SUCCESS,
  payload: { data },
});

export const getBanksFail = (err) => ({
  type: types.GET_BANKS_FAIL,
  payload: { err },
});
