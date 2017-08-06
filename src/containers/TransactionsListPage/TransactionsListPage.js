import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Container from '../../components/Container';
import Table from '../../components/Table';
import Button from '../../components/Buttons';
import BaseLayout from '../../components/Layouts';

import {
  actions as transactionsActions,
  selectors as transactionsSelectors,
} from '../../ducks/transactions';

const headerData = [
  'Id транзакции',
  'Сумма',
  'Банк',
  'Удалить'
];

class TransactionsListPage extends PureComponent {
  componentDidMount() {
    this.props.getBanks();
    this.props.getTransactions();
  }

  addDeleteButton() {
    return this.props.tableData.map(transaction => [
      ...transaction,
      <Button
        onClick={() => this.props.deleteTransaction(transaction[0])}
        theme="danger"
      >
        Удалить
      </Button>
    ]);
  }

  render() {
    return (
      <BaseLayout>
        <Container>
          <Table
            headerData={headerData}
            data={this.addDeleteButton()}
          />
        </Container>
      </BaseLayout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tableData: transactionsSelectors.makeTransactionsTableData(),
});

const mapDispatchToProps = (dispatch) => ({
  getBanks: () => dispatch(transactionsActions.getBanks()),
  getTransactions: () => dispatch(transactionsActions.getTransactions()),
  deleteTransaction: id => dispatch(transactionsActions.deleteTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListPage);
