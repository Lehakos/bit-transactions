import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../components/Buttons';

import {
  actions as userActions,
} from '../../ducks/user';

class LogoutButton extends PureComponent {
  onClick = this.onClick.bind(this);

  onClick() {
    this.props.logout();
  }

  render() {
    const { logout, ...props } = this.props;

    return (
      <Button onClick={this.onClick} {...props}>
        выйти
      </Button>
    );
  }
};

LogoutButton.propTypes = {
  logout: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userActions.logout()),
});

export default connect(null, mapDispatchToProps)(LogoutButton);
