import * as types from './types';

export const login = (payload) => ({
  type: types.LOGIN,
  payload,
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const loginFail = (err) => ({
  type: types.LOGIN_FAIL,
  payload: { err },
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutFail = (err) => ({
  type: types.LOGOUT_FAIL,
  payload: { err },
});
