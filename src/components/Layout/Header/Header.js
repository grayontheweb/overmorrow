import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import ReactScroll from 'react-scroll';

import Logo from 'src/components/Logo';

import hamburger from './images/hamburger.svg';
import logo from '../images/logo.svg';

import './Header.scss';

const { Link: ScrollLink } = ReactScroll;

const LayoutHeader = ({
  headerRef,
  isFixed,
  isOpen,
  isVisible,
  locale,
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
          <ScrollLink
            duration={500}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="about"
          >
            About Us
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            duration={500}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="founders"
          >
            The Founders
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            duration={500}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="beers"
          >
            Our Beers
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            duration={500}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="where"
          >
            Where
          </ScrollLink>
        </li>
      </ul>
    </nav>

    <ul className="LayoutHeader__language-toggle">
      <li>
        <Link activeClassName="active" to="/">
          English
        </Link>
      </li>

      <li>
        <Link activeClassName="active" to="/vn">
          Tiếng Việt
        </Link>
      </li>
    </ul>
  </header>
);

export default LayoutHeader;
