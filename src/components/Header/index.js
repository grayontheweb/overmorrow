import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <h1>Overmorrow</h1>

      <nav>
        <ul>
          <li>
            <a href="#about-us">About us</a>
          </li>

          <li>
            <a href="#founders">The Founders</a>
          </li>

          <li>
            <a href="#our-beers">Our Beers</a>
          </li>

          <li>
            <a href="#where">Where</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
