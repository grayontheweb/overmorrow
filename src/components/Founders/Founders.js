import React from 'react';

import ParallaxObserver from 'src/components/ParallaxObserver';
import Section from 'src/components/Section';
import Founder from 'src/components/Founder';

import './Founders.scss';

const Founders = ({ content }) => (
  <ParallaxObserver>
    {({ inView, top }) => {
      let opacity = null;
      const transform = top > 0 ? `translateY(${top / 2}px)` : null;

      if (typeof window !== 'undefined' && top) {
        opacity = (1 - top / window.innerHeight) * 1.5;
      }

      const style = inView
        ? {
            opacity,
            transform,
          }
        : null;

      return (
        <Section className="Founders" fullScreen id="founders">
          <div className="Founders__parallax-container" style={style}>
            <h2>{content.heading}</h2>

            <div className="Founders__container">
              {content.foundersList.map((founder, i) => (
                <Founder founder={founder} key={i} />
              ))}
            </div>
          </div>
        </Section>
      );
    }}
  </ParallaxObserver>
);

export default Founders;
