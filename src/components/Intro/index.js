import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import IntroComponent from './Intro';

const Intro = ({ locale }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query IntroQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "intro" } }) {
        id

        frontmatter {
          english {
            subtitle
          }

          vietnamese {
            subtitle
          }
        }
      }
    }
  `);

  const content =
    locale !== 'vietnamese'
      ? {
          ...frontmatter.english,
        }
      : {
          ...frontmatter.vietnamese,
        };

  return <IntroComponent content={content} />;
};

export default Intro;
