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
  content,
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
      'LayoutHeader--is-visible': isOpen || (isFixed && isVisible),
    })}
    ref={headerRef}
  >
    <div className="LayoutHeader__top">
      <h3
        className="LayoutHeader__top__logo"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <a href="#intro">Overmorrow</a>
      </h3>

      <Logo className="LayoutHeader__top__logo-horizontal" />

      <button
        className="LayoutHeader__top__menu-toggle"
        onClick={toggleIsOpen}
        style={{
          backgroundImage: `url(${hamburger})`,
        }}
      />
    </div>

    <nav
      className={classNames('LayoutHeader__navigation', {
        'LayoutHeader__navigation--is-open': isOpen,
      })}
    >
      <ul>
        <li>
          <ScrollLink
            duration={500}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="about"
          >
            {content.aboutUs}
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            duration={500}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="founders"
          >
            {content.founders}
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            duration={500}
            onClick={() => (isOpen ? setIsOpen(false) : null)}
            smooth
            to="beers"
          >
            {content.ourBeers}
          </ScrollLink>
        </li>

        {/*
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
        */}
      </ul>

      <ul className="LayoutHeader__language-toggle">
        <li>
          <Link className={locale !== 'vietnamese' ? 'active' : null} to="/">
            English
          </Link>
        </li>

        <li>
          <Link className={locale === 'vietnamese' ? 'active' : null} to="/vn">
            Tiếng Việt
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default LayoutHeader;
