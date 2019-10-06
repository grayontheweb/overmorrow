import React from 'react';
// import { get } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';

import FoundersComponent from './Founders';

const Founders = ({ locale = 'english' }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query FoundersQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "founders" } }) {
        id

        frontmatter {
          english {
            heading
          }

          vietnamese {
            heading
          }

          foundersList {
            image
            backgroundColor
            name

            english {
              jobTitle
              jobDescription
            }

            vietnamese {
              jobTitle
              jobDescription
            }

            favorites {
              beerStyle

              breweries {
                name
                url
              }

              other {
                classifier
                favorite
              }
            }
          }
        }
      }
    }
  `);

  const content =
    locale !== 'vietnamese'
      ? {
          ...frontmatter.english,
          foundersList: frontmatter.foundersList.map((founder) => ({
            backgroundColor: founder.backgroundColor,
            favorites: founder.favorites,
            name: founder.name,
            image: founder.image,
            ...founder.english,
          })),
        }
      : {
          ...frontmatter.vietnamese,
          foundersList: frontmatter.foundersList.map((founder) => ({
            backgroundColor: founder.backgroundColor,
            favorites: founder.favorites,
            name: founder.name,
            image: founder.image,
            ...founder.vietnamese,
          })),
        };

  return <FoundersComponent content={content} />;
};

export default Founders;
