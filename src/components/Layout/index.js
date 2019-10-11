import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import LayoutComponent from './Layout';

const Layout = ({ children, locale = 'english' }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "meta" } }) {
        id

        frontmatter {
          description
          title

          image {
            childImageSharp {
              fixed(height: 1200, quality: 100, width: 1200) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      }
    }
  `);

  return (
    <LayoutComponent
      children={children}
      locale={locale}
      meta={{
        ...frontmatter,
        imageUrl: `http://www.overmorrow.beer${frontmatter.image.childImageSharp.fixed.src}`,
      }}
    />
  );
};

export default Layout;
