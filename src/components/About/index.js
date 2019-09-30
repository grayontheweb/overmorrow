import React from 'react';
// import Markdown from 'react-markdown';
// import { get } from 'lodash';
// import { graphql, useStaticQuery } from 'gatsby';

import AboutComponent from './About';

import './About.scss';

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query AboutQuery {
  //     markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
  //       id
  //       frontmatter {
  //         introduction
  //         content
  //       }
  //     }
  //   }
  // `);

  // const about = {
  //   id: get(data, 'markdownRemark.id'),
  //   ...get(data, 'markdownRemark.frontmatter'),
  // };

  return <AboutComponent />;

  // return (
  //   <div className="About" id="about-us">
  //     <div className="About__content">
  //       <Markdown source={about.introduction} />
  //       <Markdown source={about.content} />
  //     </div>
  //   </div>
  // );
};

export default About;
