import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { createStructuredSelector } from 'reselect';

import { selectors as userSelectors } from '../ducks/user';

export default function requireAuth (ComposedComponent) {
  function getDisplayName() {
    return ComposedComponent.displayName || ComposedComponent.name || 'Component';
  }

  class RequireAuth extends PureComponent {
    checkAuth(props) {
      const { history, auth } = props;

      if (!auth) {
        history.push('/');
      }
    }

    componentDidMount() {
      this.checkAuth(this.props);
    }

    componentWillUpdate(nextProps) {
      this.checkAuth(nextProps);
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  // копируем статические методы и свойства класса
  hoistNonReactStatic(RequireAuth, ComposedComponent);

  RequireAuth.displayName = `RequireAuth(${getDisplayName(ComposedComponent)})`;

  const mapStateToProps = createStructuredSelector({
    auth: userSelectors.makeGetAuth(),
  });

  RequireAuth = withRouter(RequireAuth);

  return connect(mapStateToProps)(RequireAuth);
}
