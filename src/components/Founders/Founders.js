import React from 'react';

import Section from 'src/components/Section';
import Founder from 'src/components/Founder';

import './Founders.scss';

const Founders = ({ founders }) => (
  <Section className="Founders" fullScreen id="founders">
    <div className="container">
      <h2>The Founders</h2>

      {founders.map((founder) => (
        <Founder
          imageUrl={founder.image}
          key={founder.position}
          name={founder.title}
          title={founder.jobTitle}
        />
      ))}
    </div>
  </Section>
);

export default Founders;
