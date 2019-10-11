import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

// const Image = ({ height = 400, src, width = 400 }) => {
//   const data = useStaticQuery(graphql`
//     query ImageQuery {
//       file(relativePath: { eq: ${src} }) {
//         childImageSharp {
//           fixed(height: ${height}, width: ${width}) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `);

//   console.log(data);

//   return null;
// };

// export default Image;

export default (props) => {
  console.log(props);
  return null;
};

export const query = graphql`
  query ImageQuery($src: String!) {
    file(relativePath: { eq: "headshots-square-2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
