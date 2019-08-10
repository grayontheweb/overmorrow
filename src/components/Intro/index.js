import React from 'react';
// import { get } from 'lodash';
// import { graphql, useStaticQuery } from 'gatsby';

import Header from '../Header';

// import horizon from './images/horizon.svg';

import './Intro.scss';

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

  return (
    <div className="Intro">
      <Header />

      <p>
        Our website is currently under development. We're redirecting you to our
        Facebook page.
      </p>
      {/*
      <div className="Intro__content">
        <div className="Intro__dictionary">
          <span className="Intro__dictionary__title">
            {intro.dictionary.title} /
          </span>
          <span className="Intro__dictionary__phonetic">
            {intro.dictionary.phonetic}
          </span>
          <span className="Intro__dictionary__definition">
            {intro.dictionary.definition}
          </span>
          <span className="Intro__dictionary__source">
            {intro.dictionary.source}
          </span>
        </div>

        <div className="Intro__text">
          <h2 className="Intro__heading">{intro.heading}</h2>
          <p className="Intro__description">{intro.description}</p>
        </div>
      </div>*/}

      {/*      <div className="Intro__horizon">
        <img alt="Horizon" src={horizon} />
      </div>*/}
    </div>
  );
};

export default Intro;
