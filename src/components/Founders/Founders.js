import React from 'react';

import Section from 'src/components/Section';
import Founder from 'src/components/Founder';

import './Founders.scss';

const Founders = ({ founders }) => (
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
          <h2>The Founders</h2>

          <div className="Founders__container">
            {founders.map((founder) => (
              <Founder
                description={founder.jobDescription}
                imageUrl={founder.image}
                key={founder.position}
                name={founder.title}
                title={founder.jobTitle}
              />
            ))}
          </div>
        </div>
      );
    }}
  </Section>
);

export default Founders;
