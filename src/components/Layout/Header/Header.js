import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import Logo from 'src/components/Logo';

import hamburger from './images/hamburger.svg';
import logo from '../images/logo.svg';

import './Header.scss';

const LayoutHeader = ({
  headerRef,
  isFixed,
  isOpen,
  isVisible,
  setIsOpen,
  toggleIsOpen,
}) => (
  <header
    className={classNames('LayoutHeader', {
      'LayoutHeader--is-fixed': isFixed,
      'LayoutHeader--is-open': isOpen,
      'LayoutHeader--is-visible': isFixed && isVisible,
    })}
    ref={headerRef}
  >
    <nav className="LayoutHeader__navigation">
      <h3
        className="LayoutHeader__navigation__logo"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <a href="#intro">Overmorrow</a>
      </h3>

      <button
        className="LayoutHeader__navigation__menu-toggle"
        onClick={toggleIsOpen}
        style={{
          backgroundImage: `url(${hamburger})`,
        }}
      />

      <Logo
        className="LayoutHeader__navigation__logo-horizontal"
        height={26.5}
        width={260}
      />

      <ul>
        <li>
          <Link
            duration={300}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="about"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            duration={300}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="founders"
          >
            The Founders
          </Link>
        </li>

        <li>
          <Link
            duration={300}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="beers"
          >
            Our Beers
          </Link>
        </li>

        <li>
          <Link
            duration={300}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="where"
          >
            Where
          </Link>
        </li>
      </ul>
    </nav>

    <ul className="LayoutHeader__language-toggle">
      <li className="active">
        <a href="#english">English</a>
      </li>

      <li>
        <a href="#viet">Tiếng Việt</a>
      </li>
    </ul>
  </header>
);

export default LayoutHeader;
