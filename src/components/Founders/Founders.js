import React from 'react';

import Section from 'src/components/Section';
import Founder from 'src/components/Founder';

import './Founders.scss';

const Founders = ({ content }) => (
  <Section className="Founders" fullScreen id="founders">
    {(props = {}) => {
      let opacity = null;

      if (typeof window !== 'undefined' && props.top) {
        opacity = (1 - props.top / window.innerHeight) * 1.5;
      }

      return (
        <div
          className="Founders__parallax-container"
          style={{
            opacity: opacity < 1 ? opacity : null,
            transform: props.top > 0 ? `translateY(${props.top / 2}px)` : null,
          }}
        >
          <h2>{content.heading}</h2>

          <div className="Founders__container">
            {content.foundersList.map((founder, i) => (
              <Founder founder={founder} key={i} />
            ))}
          </div>
        </div>
      );
    }}
  </Section>
);

export default Founders;
