import React from 'react';

import logo from '../images/logo.svg';

import LayoutFooterSocial from './Social';

import './Footer.scss';

const LayoutFooter = ({ locale }) => (
  <footer className="LayoutFooter">
    <h3
      className="LayoutFooter__navigation__logo"
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

    <LayoutFooterSocial />
  </footer>
);

export default LayoutFooter;
