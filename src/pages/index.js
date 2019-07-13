import React from 'react';

import About from 'src/components/About';
import Header from 'src/components/Header';
import Intro from 'src/components/Intro';
import Mainstays from 'src/components/Mainstays';
import Subscribe from 'src/components/Subscribe';

export default () => {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Mainstays />
      <Subscribe />
    </div>
  );
};
