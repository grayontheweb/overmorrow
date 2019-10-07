import React from 'react';

import LayoutFooter from './Footer';
import LayoutHeader from './Header';

import './Layout.scss';

const Layout = ({ children, locale = 'english' }) => (
  <div className="Layout">
    <LayoutHeader locale={locale} />

    {children}

    <LayoutFooter locale={locale} />
  </div>
);

export default Layout;
