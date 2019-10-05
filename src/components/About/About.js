import React from 'react';

import Section from 'src/components/Section';

import pronunciationImage from './images/pronunciation.svg';
import termImage from './images/term.svg';

import './About.scss';

const About = () => (
  <Section className="About" id="about">
    {(props) => {
      const opacity = 1 - props.top / window.innerHeight;

      return (
        <div
          className="About__parallax-container"
          style={{
            opacity: opacity && opacity < 1 ? opacity : null,
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
              <div className="About__description">
                <p>
                  Inspired by our namesake, an old word to talk about the
                  future, here at Overmorrow Brewing we craft beers to promote
                  and honor classic styles throughout history – while updating
                  them for the present and the future here in Vietnam.
                </p>

                <p>
                  Just like our founding team, our beers are a mix of
                  well-traveled styles from around the world with local
                  Vietnamese flavors and ingredients. We are experimental but
                  never compromise on quality and never launch anything that we
                  are not happy to drink ourselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </Section>
);

export default About;
