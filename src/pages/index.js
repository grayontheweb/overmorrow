import React from 'react';

import About from 'src/components/About';
import Intro from 'src/components/Intro';
import Founders from 'src/components/Founders';
import Layout from 'src/components/Layout';
import Locations from 'src/components/Locations';
import Mainstays from 'src/components/Mainstays';
import Story from 'src/components/Story';

export default (props) => {
  return (
    <Layout location={props.location}>
      <Intro />
      <About />
      <Story />
      <Founders />
      <Mainstays />
      <Locations />
    </Layout>
  );
};
