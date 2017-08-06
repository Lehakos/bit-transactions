import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import requireAuth from '../../HOC/requireAuth';
import TransactionsListPage from '../TransactionsListPage';
import LoginPage from '../LoginPage';
import NewTransactionPage from '../NewTransactionPage';

import { selectors as userSelectors } from '../../ducks/user';

import './App.css';

class App extends Component {
  renderHomePage = this.renderHomePage.bind(this);

  renderHomePage() {
    const { auth } = this.props;

    if (auth) {
      return <Redirect to="/transactions/new" />;
    }

    return <Redirect to="/login" />;
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={this.renderHomePage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/transactions" component={requireAuth(TransactionsListPage)} />
          <Route path="/transactions/new" component={requireAuth(NewTransactionPage)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  auth: userSelectors.makeGetAuth(),
});

export default withRouter(connect(mapStateToProps)(App));
