import React from 'react';
import { get } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';

import MainstaysComponent from './Mainstays';

const Mainstays = () => {
  const data = useStaticQuery(graphql`
    query MainstaysQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___position] }
        filter: { frontmatter: { templateKey: { eq: "mainstay" } } }
      ) {
        edges {
          node {
            frontmatter {
              bottleImage
              description
              nameImage
              position
              title

              flavorProfile {
                abv
                aromaAndTaste
                grains
                hops
                og
                yeast
              }

              style {
                accentDark
                accentLight
              }
            }
          }
        }
      }
    }
  `);

  const mainstays = get(data, 'allMarkdownRemark.edges', [])
    .map((founder) => founder.node.frontmatter)
    .sort((a, b) => a.position - b.position);

  return <MainstaysComponent mainstays={mainstays} />;
};

export default Mainstays;
