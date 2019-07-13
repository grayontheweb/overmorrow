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
            id
            frontmatter {
              bottleImage
              description
              introduction
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
                accent
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
    .map((mainstay) => ({ id: mainstay.node.id, ...mainstay.node.frontmatter }))
    .sort((a, b) => a.position - b.position);

  return <MainstaysComponent mainstays={mainstays} />;
};

export default Mainstays;
