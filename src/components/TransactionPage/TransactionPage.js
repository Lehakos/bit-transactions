import React, { PureComponent } from 'react';

import { Group, Input, Label, Select } from '../Form';
import Button from '../Buttons';
import Container from '../Container';

const banks = [
  {
    value: 'alfa',
    label: 'Альфа банк',
  },
  {
    value: 'sber',
    label: 'Сбербанк',
  },
  {
    value: 'tinkoff',
    label: 'Тинькофф банк',
  },
];

class TransactionPage extends PureComponent {
  render() {
    return (
      <div>
        <Container>
          <form>
            <Group horizontal>
              <Label text="Сумма">
                <Input
                  name="sum"
                  type="number"
                  min="0"
                  step="1000"
                />
              </Label>
              <Label text="Банк">
                <Select
                  name="bank"
                  placeholder="Выберите банк"
                  items={banks}
                />
              </Label>
            </Group>

            <Group center>
              <Button>Добавить</Button>
            </Group>
          </form>
        </Container>
      </div>
    );
  }
}

export default TransactionPage;
