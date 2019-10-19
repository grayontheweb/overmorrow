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
            favoriteBeerStyleHeading
            favoriteBreweriesHeading
            heading
          }

          vietnamese {
            favoriteBeerStyleHeading
            favoriteBreweriesHeading
            heading
          }

          foundersList {
            backgroundColor
            name

            image {
              id
              childImageSharp {
                fixed(
                  cropFocus: ATTENTION
                  height: 360
                  quality: 50
                  width: 360
                ) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }

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
                classifierVietnamese
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
            favorites: {
              ...founder.favorites,
              other: {
                ...founder.favorites.other,
                classifier: founder.favorites.other.classifierVietnamese,
              },
            },
            name: founder.name,
            image: founder.image,
            ...founder.vietnamese,
          })),
        };

  return <FoundersComponent content={content} />;
};

export default Founders;
