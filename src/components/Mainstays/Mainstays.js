import React from 'react';

import Mainstay from 'src/components/Mainstay';
import Section from 'src/components/Section';

import './Mainstays.scss';

const Mainstays = ({ content }) => (
  <Section className="Mainstays" id="beers">
    <div className="Mainstays__header">
      <h2>{content.heading}</h2>
    </div>

    {content.beerList.map((mainstay, index) => (
      <Mainstay
        aromaAndTasteHeading={content.aromaAndTasteHeading}
        index={index}
        key={index}
        mainstay={mainstay}
        reverse={index % 2 > 0}
      />
    ))}
  </Section>
);

export default Mainstays;
