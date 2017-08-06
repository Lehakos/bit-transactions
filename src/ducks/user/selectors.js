import { createSelector } from 'reselect';

const getDomainState = state => state.get('user');

const makeGetAuth = () => createSelector(
  getDomainState,
  userState => userState.get('auth'),
);

export {
  makeGetAuth,
};
