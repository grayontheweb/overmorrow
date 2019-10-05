import React from 'react';

import Section from 'src/components/Section';
import Founder from 'src/components/Founder';

import './Founders.scss';

const Founders = ({ founders }) => (
  <Section className="Founders" fullScreen id="founders">
    <h2>The Founders</h2>

    <div className="Founders__container">
      {founders.map((founder) => (
        <Founder
          description={founder.jobDescription}
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
