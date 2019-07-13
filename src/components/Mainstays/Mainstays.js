import React from 'react';

import Mainstay from 'src/components/Mainstay';

const Mainstays = ({ mainstays }) => (
  <div className="Mainstays">
    {mainstays.map((mainstay, index) => (
      <Mainstay key={mainstay.id} mainstay={mainstay} reverse={index % 2} />
    ))}
  </div>
);

export default Mainstays;
