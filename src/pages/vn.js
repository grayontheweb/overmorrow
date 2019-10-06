import React from 'react';

import About from 'src/components/About';
import Intro from 'src/components/Intro';
import Layout from 'src/components/Layout';
import Story from 'src/components/Story';
import Founders from 'src/components/Founders';
import Mainstays from 'src/components/Mainstays';

export default () => {
  return (
    <Layout locale="vietnamese">
      <Intro locale="vietnamese" />
      <About locale="vietnamese" />
      <Story locale="vietnamese" />
      <Founders locale="vietnamese" />
      <Mainstays locale="vietnamese" />
    </Layout>
  );
};
