import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import LoginForm from '../LoginForm';

import { selectors as userSelectors } from '../../ducks/user';

import './LoginPage.css';

class LoginPage extends PureComponent {
  render() {
    const { auth } = this.props;

    if (auth) {
      return <Redirect to="/transactions/new" />;
    }

    return (
      <div className="login-page">
        <LoginForm className="login-page__form" />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  auth: userSelectors.makeGetAuth(),
});

export default connect(mapStateToProps)(LoginPage);
