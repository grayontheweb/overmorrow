import React from 'react';

import Mainstay from 'src/components/Mainstay';

const Mainstays = ({ mainstays }) => (
  <div className="Mainstays">
    {mainstays.map((mainstay) => (
      <Mainstay key={mainstay.position} mainstay={mainstay} />
    ))}
  </div>
);

export default Mainstays;
