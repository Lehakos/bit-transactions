import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';

import './Menu.css';

const Menu = ({ items }) => {
  return (
    <ul className="menu">
      {items.map(item => (
        <li key={shortid.generate()} className="menu__item">
          <NavLink
            className="menu__link"
            activeClassName="menu__link_active"
            to={item.link}
            exact
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default Menu;
