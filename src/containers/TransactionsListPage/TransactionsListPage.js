import React, { PureComponent } from 'react';

import Container from '../../components/Container';
import Table from '../../components/Table';
import BaseLayout from '../../components/Layouts';

const headerData = [
  'Id транзакции',
  'Сумма',
  'Банк',
  'Удалить'
];

const data = [
  [1, 2000, 'Альфа Банк'],
  [2, 5000, 'Сбербанк'],
  [3, 1000, 'Тинькофф'],
];

class TransactionsListPage extends PureComponent {
  render() {
    return (
      <BaseLayout>
        <Container>
          <Table
            headerData={headerData}
            data={data}
          />
        </Container>
      </BaseLayout>
    );
  }
}

export default TransactionsListPage;
