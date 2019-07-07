import React from 'react';

import Founder from 'src/components/Founder';

import './Founders.scss';

const Founders = ({ founders }) => (
  <div className="Founders">
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
  </div>
);

export default Founders;
