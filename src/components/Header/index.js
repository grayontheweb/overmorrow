import React from 'react';
// import { get } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';

import './Header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "assets" } }) {
        frontmatter {
          horizontalLogo
        }
      }
    }
  `);

  // console.log(data.markdownRemark.frontmatter.horizontalLogo);

  return (
    <header className="Header">
      <h1
        style={{
          backgroundImage: `url(${data.markdownRemark.frontmatter.horizontalLogo})`,
        }}
      >
        Overmorrow
      </h1>

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
