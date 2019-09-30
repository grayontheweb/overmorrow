import React from 'react';

// import React, { useEffect } from 'react';

import About from 'src/components/About';
import Intro from 'src/components/Intro';
import Layout from 'src/components/Layout';
import Story from 'src/components/Story';
import Founders from 'src/components/Founders';
import Mainstays from 'src/components/Mainstays';
// import Subscribe from 'src/components/Subscribe';

export default () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Story />
      <Founders />
      <Mainstays />
    </Layout>
  );
};
