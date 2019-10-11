import React from 'react';
import { Link } from 'react-scroll';

import Logo from 'src/components/Logo';
import ParallaxObserver from 'src/components/ParallaxObserver';
import Section from 'src/components/Section';

import scrollIcon from './images/icon-down.svg';

import './Intro.scss';

const Intro = () => (
  <ParallaxObserver>
    {({ bottom, height, inView, top }) => {
      const opacity = bottom ? bottom / height : null;
      const transform = top ? `translateY(${top / 2}px)` : null;

      const parallaxContainerStyle = inView
        ? { opacity, position: 'fixed', transform }
        : null;

      return (
        <Section className="Intro" fullScreen>
          <div className="Intro__scroll-icon">
            <Link duration={500} smooth to="about">
              <img alt="Scroll down" src={scrollIcon} />
            </Link>
          </div>

          <div className="Intro__parallax-background">
            <div className="Intro__parallax-background__horizon" />
          </div>

          <div
            className="Intro__parallax-container"
            style={parallaxContainerStyle}
          >
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
