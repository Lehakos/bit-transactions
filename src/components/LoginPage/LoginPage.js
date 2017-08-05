import React, { PureComponent } from 'react';

import { Group, Input, Label } from '../Form';
import Button from '../Buttons';

import './LoginPage.css';

const fields = [
  {
    key: 1,
    label: 'Введите адрес вашей электронной почты',
    name: 'email',
    type: 'email',
  }, {
    key: 2,
    label: 'Введите ваш пароль',
    name: 'password',
    type: 'password',
  }
];

class LoginPage extends PureComponent {
  renderField({ label, name, type, key }) {
    return (
      <Group key={key}>
        <Label text={label}>
          <Input
            name={name}
            type={type}
            required
          />
        </Label>
      </Group>
    );
  }

  render() {
    return (
      <div className="login-page">
        <form className="login-page__form">
          {fields.map(this.renderField)}
          <Group center>
            <Button>Войти</Button>
          </Group>
        </form>
      </div>
    );
  }
}

export default LoginPage;
