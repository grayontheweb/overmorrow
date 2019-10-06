import React from 'react';

import Mainstay from 'src/components/Mainstay';
import Section from 'src/components/Section';

import './Mainstays.scss';

const Mainstays = ({ mainstays }) => (
  <Section className="Mainstays" id="beers">
    {(props) => (
      <div
        className="Mainstays__parallax-container"
        style={{
          transform:
            props.top > 0 ? `translateY(${props.top / 2}px)` : 'translateY(0)',
        }}
      >
        <div className="Mainstays__header">
          <h2>Our Beers</h2>
        </div>

        {mainstays.map((mainstay, index) => (
          <Mainstay
            key={mainstay.id}
            mainstay={mainstay}
            reverse={index % 2 > 0}
          />
        ))}
      </div>
    )}
  </Section>
);

export default Mainstays;
