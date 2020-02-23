import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import StoryComponent from './Story';

const Story = ({ locale = 'english' }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query StoryQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
        id

        frontmatter {
          backgroundImage {
            childImageSharp {
              fluid(cropFocus: ATTENTION, quality: 70, maxWidth: 1440) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }

          english {
            content
            heading
          }

          vietnamese {
            content
            heading
          }
        }
      }
    }
  `);

  const content =
    locale !== 'vietnamese'
      ? {
          backgroundImage: frontmatter.backgroundImage,
          ...frontmatter.english,
        }
      : {
          backgroundImage: frontmatter.backgroundImage,
          ...frontmatter.vietnamese,
        };

  return (
    <StoryComponent
      backgroundImage={content.backgroundImage}
      content={content.content}
      heading={content.heading}
    />
  );
};

export default Story;
