import React from 'react';

import Mainstay from 'src/components/Mainstay';

import './Mainstays.scss';

const Mainstays = ({ mainstays }) => (
  <div className="Mainstays">
    <div className="Mainstays__header">
      <h2>Our Beers</h2>
    </div>

    {mainstays.map((mainstay, index) => (
      <Mainstay key={mainstay.id} mainstay={mainstay} reverse={index % 2} />
    ))}
  </div>
);

export default Mainstays;
