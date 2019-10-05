import React, { Fragment } from 'react';

import Logo from 'src/components/Logo';
import Section from 'src/components/Section';

import './Intro.scss';

const Intro = () => (
  <Section className="Intro" fullScreen>
    {(props) => {
      const opacity = props.bottom ? props.bottom / props.height : null;
      const transform = props.top ? `translateY(${props.top / 2}px)` : null;

      return (
        <Fragment>
          <div
            className="Intro__parallax-container"
            style={{
              opacity,
              transform,
            }}
          >
            <Logo className="Intro__logo" />

            <h2 className="Intro__subtitle">
              Craft beer for today, tomorrow, and the day after
            </h2>
          </div>
        </Fragment>
      );
    }}
  </Section>
);

export default Intro;
