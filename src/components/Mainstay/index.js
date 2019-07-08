import React from 'react';

import './Mainstay.scss';

const Mainstay = ({ mainstay }) => (
  <div className="Mainstay">
    <div className="container">
      <div className="Mainstay__bottle-image">
        <img alt={`${mainstay.title} Bottle`} src={mainstay.bottleImage} />
      </div>

      <div className="Mainstay__content">
        <h2
          className="Mainstay__title"
          style={{
            backgroundImage: `url("${mainstay.nameImage}")`,
          }}
        >
          {mainstay.title}
        </h2>

        <h3
          style={{
            color: mainstay.style.accentDark,
          }}
          className="Mainstay__introduction"
        >
          {mainstay.introduction}
        </h3>

        <p>{mainstay.description}</p>

        <h4>Aroma & Taste</h4>
        <p>{mainstay.flavorProfile.aromaAndTaste}</p>

        <dl>
          <dt>Grains</dt>
          <dd>{mainstay.flavorProfile.grains}</dd>

          <dt>Hops</dt>
          <dd>{mainstay.flavorProfile.hops}</dd>

          <dt>Yeast</dt>
          <dd>{mainstay.flavorProfile.yeast}</dd>
        </dl>
      </div>
    </div>

    <div className="Mainstay__border-bottom" />
  </div>
);

export default Mainstay;
