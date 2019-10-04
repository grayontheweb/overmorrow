import React from 'react';
import { get } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';

import Section from 'src/components/Section';

import './Subscribe.scss';

const Subscribe = () => {
  const data = useStaticQuery(graphql`
    query SubscribeQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "subscribe" } }) {
        id
        frontmatter {
          buttonText
          content
        }
      }
    }
  `);

  const subscribe = {
    id: get(data, 'markdownRemark.id'),
    ...get(data, 'markdownRemark.frontmatter'),
  };

  return (
    <Section className="Subscribe">
      <div className="Subscribe__content">
        <h2>{subscribe.content}</h2>
        <a className="Subscribe__button" href="/subscribe">
          {subscribe.buttonText}
        </a>
      </div>
    </Section>
  );
};

export default Subscribe;
