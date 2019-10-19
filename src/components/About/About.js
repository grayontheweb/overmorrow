import React from 'react';
import Markdown from 'react-markdown';

import ParallaxObserver from 'src/components/ParallaxObserver';
import Section from 'src/components/Section';

import pronunciationImage from './images/pronunciation.png';
import termImage from './images/term.png';

import './About.scss';

const About = ({ intro }) => (
  <ParallaxObserver>
    {({ inView, top }) => {
      const transform = top > 0 ? `translateY(${top / 2}px)` : null;

      const parallaxContainerStyle = inView
        ? {
            opacity: 1,
            transform,
          }
        : null;

      return (
        <Section className="About" id="about">
          <div
            className="About__parallax-container"
            style={parallaxContainerStyle}
          >
            <div className="About__container">
              <div className="About__container__column-left">
                <div className="About__dictionary">
                  <h2
                    className="About__dictionary__term"
                    style={{ backgroundImage: `url(${termImage})` }}
                  >
                    Overmorrow
                  </h2>

                  <h3
                    className="About__dictionary__pronunciation"
                    style={{ backgroundImage: `url(${pronunciationImage})` }}
                  >
                    ˈō-vər-mȯr-ō
                  </h3>

                  <span className="About__dictionary__definition">
                    The day after or following tomorrow
                  </span>

                  <span className="About__dictionary__source">
                    (Webster’s English Dictionary, 1913)
                  </span>
                </div>
              </div>

              <div className="About__container__column-right">
                <Markdown className="About__description" source={intro} />
              </div>
            </div>
          </div>
        </Section>
      );
    }}
  </ParallaxObserver>
);

export default About;
