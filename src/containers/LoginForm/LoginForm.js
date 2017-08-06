import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';

import { Group } from '../../components/Form';
import { InputRedux } from '../../components/Form/Redux';
import Button from '../../components/Buttons';

import { actions as userActions } from '../../ducks/user';
import { required, email } from '../../shared/validate-rules';

class LoginForm extends PureComponent {
  onSubmit = this.onSubmit.bind(this);

  onSubmit(dataImmutable) {
    const data = dataImmutable.toJS();
    this.props.login(data);
  }

  render() {
    const { handleSubmit, className } = this.props;

    return (
      <form
        noValidate
        onSubmit={handleSubmit(this.onSubmit)}
        className={className}
      >
        <Group>
          <Field
            name="email"
            type="email"
            label="Введите адрес вашей электронной почты"
            component={InputRedux}
            validate={[required, email]}
          />
        </Group>
        <Group>
          <Field
            name="password"
            type="password"
            label="Введите ваш пароль"
            component={InputRedux}
            validate={[required]}
          />
        </Group>
        <Group center>
          <Button>Войти</Button>
        </Group>
        </form>
    );
  }
};

LoginForm.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  login: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(userActions.login(data)),
});

export default reduxForm({
  form: 'login',
})(connect(null, mapDispatchToProps)(LoginForm));
