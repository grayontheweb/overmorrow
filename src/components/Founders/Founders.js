import React from 'react';

import Section from 'src/components/Section';
import Founder from 'src/components/Founder';

import './Founders.scss';

const Founders = ({ content }) => (
  <Section className="Founders" fullScreen>
    <div className="Founders__parallax-container">
      <h2 id="founders">{content.heading}</h2>

      <div className="Founders__container">
        {content.foundersList.map((founder, i) => (
          <Founder
            founder={founder}
            favoriteBeerStyleHeading={content.favoriteBeerStyleHeading}
            favoriteBreweriesHeading={content.favoriteBreweriesHeading}
            key={i}
          />
        ))}
      </div>
    </div>
  </Section>
);

export default Founders;
