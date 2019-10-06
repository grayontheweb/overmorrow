import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import AboutComponent from './About';

import './About.scss';

const About = ({ locale = 'english' }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
        id

        frontmatter {
          english {
            intro
          }

          vietnamese {
            intro
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

  return <AboutComponent intro={content.intro} />;
};

export default About;
