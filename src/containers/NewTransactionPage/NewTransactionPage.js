import React, { PureComponent } from 'react';

import { Group, Input, Label, Select } from '../../components/Form';
import Button from '../../components/Buttons';
import Container from '../../components/Container';
import BaseLayout from '../../components/Layouts';

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

class NewTransactionPage extends PureComponent {
  render() {
    return (
      <BaseLayout>
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
      </BaseLayout>
    );
  }
}

export default NewTransactionPage;
