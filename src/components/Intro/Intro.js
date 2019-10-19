import React from 'react';
import { Link } from 'react-scroll';

import Logo from 'src/components/Logo';
import ParallaxObserver from 'src/components/ParallaxObserver';
import Section from 'src/components/Section';

import scrollIcon from './images/icon-down.svg';

import './Intro.scss';

const Intro = ({ content }) => (
  <ParallaxObserver>
    {({ bottom, height, inView, top }) => {
      const opacity = bottom ? bottom / height : null;
      const transform = top ? `translateY(${Math.abs(top) / 2}px)` : null;

      const parallaxContainerStyle = inView ? { opacity, transform } : null;

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

            <h2 className="Intro__subtitle">{content.subtitle}</h2>
          </div>
        </Section>
      );
    }}
  </ParallaxObserver>
);

export default Intro;
