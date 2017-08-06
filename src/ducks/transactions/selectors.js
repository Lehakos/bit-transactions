import { createSelector } from 'reselect';

const getDomainState = state => state.get('transactions');

const selectBanks = createSelector(
  getDomainState,
  state => state.get('banks'),
);

const selectTransactions = createSelector(
  getDomainState,
  state => state.get('transactions'),
);

const makeGetTransactions = () => createSelector(
  selectTransactions,
  transactions => transactions.get('ids').map(id => transactions.getIn(['byId', id])).toJS(),
);

const makeGetBanks = () => createSelector(
  selectBanks,
  banks => banks.get('ids').map(id => banks.getIn(['byId', id])).toJS()
);

const makeBanksSelect = () => createSelector(
  selectBanks,
  banks => banks.get('ids').map(id => {
    const bank = banks.getIn(['byId', id]).toJS();

    return {
      value: bank.id,
      label: bank.name,
    };
  }).toJS(),
);

const makeTransactionsTableData = () => createSelector(
  [selectBanks, selectTransactions],
  (banks, transactions) => transactions.get('ids').map(id => {
    const transaction = transactions.getIn(['byId', id]).toJS();
    const bank = banks.getIn(['byId', transaction.bankId, 'name']);

    return [transaction.id, transaction.amount, bank];
  }).toJS(),
);

export {
  makeGetBanks,
  makeBanksSelect,
  makeGetTransactions,
  makeTransactionsTableData,
};
