import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import LayoutFooterComponent from './Footer';

import './Footer.scss';

const LayoutFooter = ({ locale }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "footer" } }) {
        id

        frontmatter {
          designerName
          designerUrl

          english {
            designAttribution
          }

          vietnamese {
            designAttribution
          }
        }
      }
    }
  `);

  const content =
    locale !== 'vietnamese'
      ? {
          ...frontmatter,
          ...frontmatter.english,
        }
      : {
          ...frontmatter,
          ...frontmatter.vietnamese,
        };

  return <LayoutFooterComponent content={content} />;
};

export default LayoutFooter;
