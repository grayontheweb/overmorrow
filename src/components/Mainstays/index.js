import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MainstaysComponent from './Mainstays';

const Mainstays = ({ locale = 'english' }) => {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query MainstaysQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "beers" } }) {
        id

        frontmatter {
          english {
            aromaAndTasteHeading
            heading
          }

          vietnamese {
            aromaAndTasteHeading
            heading
          }

          beerList {
            accentColor
            grains
            hops
            name
            yeast

            bottleImage {
              childImageSharp {
                fluid(quality: 70, maxWidth: 340) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }

            nameImage {
              childImageSharp {
                fluid(quality: 70, maxWidth: 350) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }

              publicURL
            }

            english {
              intro
              aromaAndTaste
              description
            }

            vietnamese {
              aromaAndTaste
              description
              intro
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
          beerList: frontmatter.beerList.map((beer) => ({
            accentColor: beer.accentColor,
            bottleImage: beer.bottleImage,
            grains: beer.grains,
            hops: beer.hops,
            name: beer.name,
            nameImage: beer.nameImage,
            yeast: beer.yeast,
            ...beer.english,
          })),
        }
      : {
          ...frontmatter.vietnamese,
          beerList: frontmatter.beerList.map((beer) => ({
            accentColor: beer.accentColor,
            bottleImage: beer.bottleImage,
            grains: beer.grains,
            hops: beer.hops,
            name: beer.name,
            nameImage: beer.nameImage,
            yeast: beer.yeast,
            ...beer.vietnamese,
          })),
        };

  return <MainstaysComponent content={content} />;
};

export default Mainstays;
