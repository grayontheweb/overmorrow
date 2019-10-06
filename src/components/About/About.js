import React, { Fragment } from 'react';
import Markdown from 'react-markdown';

import Section from 'src/components/Section';

import pronunciationImage from './images/pronunciation.svg';
import termImage from './images/term.svg';

import './About.scss';

const About = ({ intro }) => (
  <Section className="About" id="about">
    {(props = {}) => {
      let opacity = null;

      if (typeof window !== 'undefined' && props.top) {
        opacity = 1 - props.top / window.innerHeight;
      }

      return (
        <Fragment>
          <div
            className="About__parallax-background"
            style={{
              transform:
                props.top > 0 ? `translateY(${props.top / 2}px)` : null,
            }}
          />

          <div
            className="About__parallax-container"
            style={{
              opacity: opacity && opacity < 1 ? opacity : null,
              transform:
                props.top > 0 ? `translateY(${props.top / 2}px)` : null,
            }}
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
        </Fragment>
      );
    }}
  </Section>
);

export default About;
