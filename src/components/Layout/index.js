import React from 'react';

import logo from './images/logo.svg';

import LayoutHeader from './Header';

import './Layout.scss';

const Layout = ({ children, locale = 'english' }) => (
  <div className="Layout">
    <LayoutHeader locale={locale} />

    {children}

    <footer className="Layout__footer">
      <h3
        className="Layout__footer__navigation__logo"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <a href="#intro">Overmorrow</a>
      </h3>

      <span>© 2019 Overmorrow Brewing Company</span>
      <span>
        Công Ty TNHH Bia Ngày Nối Tiếp • Address: Xã Đông Dư, Gia Lâm, Hà Nội
      </span>

      <div className="Layout__footer__social">
        <ul>
          <li>Email</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Layout;
