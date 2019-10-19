import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import LayoutComponent from './Layout';

const Layout = ({ children, locale = 'english', location }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "meta" } }) {
        id

        frontmatter {
          description
          title
          vnDescription

          image {
            relativePath
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

  const meta = {
    ...frontmatter,
    description:
      locale !== 'vietnamese'
        ? frontmatter.description
        : frontmatter.vnDescription,
    imageUrl: `${location.origin}/img/${frontmatter.image.relativePath}`,
    url: location.href,
  };

  return <LayoutComponent children={children} locale={locale} meta={meta} />;
};

export default Layout;
