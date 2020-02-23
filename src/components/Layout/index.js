import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import LayoutComponent from './Layout';

const Layout = (props) => {
  const { children, locale = 'english', location } = props;
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
              fixed(height: 1200, quality: 70, width: 1200) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);

  const host = location.origin
    ? location.origin
    : 'https://www.overmorrow.beer';

  const meta = {
    ...frontmatter,
    description:
      locale !== 'vietnamese'
        ? frontmatter.description
        : frontmatter.vnDescription,
    imageUrl: `${host}/img/${frontmatter.image.relativePath}`,
    locale: locale !== 'vietnamese' ? 'en_US' : 'vi_VN',
    url: `${host}${props.location.pathname}`,
  };

  return <LayoutComponent children={children} locale={locale} meta={meta} />;
};

export default Layout;
