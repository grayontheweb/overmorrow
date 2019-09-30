import React from 'react';

import logo from './images/logo.svg';

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header className="Layout__header">
        <nav className="Layout__header__navigation">
          <h3
            className="Layout__header__navigation__logo"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          >
            <a href="#intro">Overmorrow</a>
          </h3>

          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <a href="#founders">The Founders</a>
            </li>

            <li>
              <a href="#beers">Our Beers</a>
            </li>

            <li>
              <a href="#where">Where</a>
            </li>
          </ul>
        </nav>

        <ul className="Layout__header__language-toggle">
          <li className="active">
            <a href="#english">English</a>
          </li>

          <li>
            <a href="#viet">Tiếng Việt</a>
          </li>
        </ul>
      </header>

      {children}
    </div>
  );
};

export default Layout;
