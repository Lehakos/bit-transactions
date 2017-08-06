import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';

import { Group } from '../../components/Form';
import { InputRedux, SelectRedux } from '../../components/Form/Redux';
import Button from '../../components/Buttons';
import Container from '../../components/Container';
import BaseLayout from '../../components/Layouts';

import {
  actions as transactionsActions,
  selectors as transactionsSelectors,
} from '../../ducks/transactions';
import { required } from '../../shared/validate-rules';

class NewTransactionPage extends PureComponent {
  onSubmit = this.onSubmit.bind(this);

  componentDidMount() {
    this.props.getBanks();
  }

  onSubmit(dataImmutable) {
    const data = dataImmutable.toJS();

    this.props.addTransaction(data);
    this.props.reset('newTransaction');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <BaseLayout>
        <Container>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Group horizontal>
              <Field
                name="amount"
                type="number"
                min="0"
                step="1000"
                component={InputRedux}
                validate={[required]}
              />
              <Field
                name="bankId"
                placeholder="Выберите банк"
                items={this.props.banks}
                component={SelectRedux}
                validate={[required]}
              />
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

const mapStateToProps = createStructuredSelector({
  banks: transactionsSelectors.makeBanksSelect(),
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: data => dispatch(transactionsActions.addTransaction(data)),
  getBanks: () => dispatch(transactionsActions.getBanks()),
  reset: (form) => dispatch(reset(form)),
});

export default reduxForm({
  form: 'newTransaction',
  destroyOnUnmount: false,
})(connect(mapStateToProps, mapDispatchToProps)(NewTransactionPage));
