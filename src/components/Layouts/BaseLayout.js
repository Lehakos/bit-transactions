import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

const BaseLayout = ({ children }) => {
  return (
    <div className="layout layout_base">
      <Header />
      <main className="layout__main">
        {Children.toArray(children)}
      </main>
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
