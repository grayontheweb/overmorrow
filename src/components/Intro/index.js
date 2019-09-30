import React from 'react';

import IntroComponent from './Intro';

const Intro = () => {
  // const data = useStaticQuery(graphql`
  //   query IntroQuery {
  //     markdownRemark(frontmatter: { templateKey: { eq: "intro" } }) {
  //       id
  //       frontmatter {
  //         description
  //         heading
  //         dictionary {
  //           definition
  //           phonetic
  //           source
  //           title
  //         }
  //       }
  //     }
  //   }
  // `);

  // const intro = {
  //   id: get(data, 'markdownRemark.id'),
  //   ...get(data, 'markdownRemark.frontmatter'),
  // };

  return <IntroComponent />;
};

export default Intro;
