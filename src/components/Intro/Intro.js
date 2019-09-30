import React from 'react';

import Logo from 'src/components/Logo';
import Section from 'src/components/Section';

import './Intro.scss';

const Intro = () => (
  <Section className="Intro" fullScreen>
    <Logo className="Intro__logo" />

    <h2 className="Intro__subtitle">
      Craft beer for today, tomorrow, and the day after
    </h2>
  </Section>
);

export default Intro;
