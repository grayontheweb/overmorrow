import React from 'react';

import Logo from 'src/components/Logo';
import ParallaxObserver from 'src/components/ParallaxObserver';
import Section from 'src/components/Section';

import './Intro.scss';

const Intro = () => (
  <ParallaxObserver>
    {({ bottom, height, inView, top }) => {
      const opacity = bottom ? bottom / height : null;
      const transform = top ? `translateY(${top / 2}px)` : null;
      const style = inView ? { opacity, position: 'fixed', transform } : null;

      return (
        <Section className="Intro" fullScreen>
          <div className="Intro__parallax-container" style={style}>
            <Logo className="Intro__logo" />

            <h2 className="Intro__subtitle">
              Craft beer for today, tomorrow, and the day after
            </h2>
          </div>
        </Section>
      );
    }}
  </ParallaxObserver>
);

export default Intro;
