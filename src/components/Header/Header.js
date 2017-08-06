import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Menu from '../Menu';
import LogoutButton from '../../containers/LogoutButton';

import './Header.css';

const menuItems = [
  { link: '/transactions', text: 'Все транзакции' },
  { link: '/transactions/new', text: 'Новая транзакция' }
];

const Header = props => {
  return (
    <header className="header">
      <Container className="header__container">
        <nav className="header__nav">
          <Menu items={menuItems} />
        </nav>
        <LogoutButton className="header__logout" />
      </Container>
    </header>
  );
};

Header.propTypes = {

};

export default Header;
