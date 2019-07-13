import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';

import './Mainstay.scss';

const Mainstay = ({ mainstay }) => (
  <div className={classNames('Mainstay', `Mainstay-${mainstay.id}`)}>
    {/* Sets the color on the strong tags in the description Markdown */}
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .Mainstay-${mainstay.id} strong,
      .Mainstay-${mainstay.id} h1,
      .Mainstay-${mainstay.id} h2,
      .Mainstay-${mainstay.id} h3,
      .Mainstay-${mainstay.id} h4,
      .Mainstay-${mainstay.id} h5,
      .Mainstay-${mainstay.id} h6
      {
        color: ${mainstay.style.accentDark}
      }

      .Mainstay-${mainstay.id} dl {
        color: ${mainstay.style.accent}
      }

      .Mainstay-${mainstay.id} dl dt {
        color: ${mainstay.style.accentLight}
      }
    `,
      }}
    />

    <div className="container">
      <div className="Mainstay__content">
        <h2
          className="Mainstay__title"
          style={{
            backgroundImage: `url("${mainstay.nameImage}")`,
          }}
        >
          {mainstay.title}
        </h2>

        <h3 className="Mainstay__introduction">{mainstay.introduction}</h3>

        <Markdown
          className="Mainstay__description"
          source={mainstay.description}
        />

        <h4 className="Mainstay__aroma-and-taste">Aroma & Taste</h4>
        <p>{mainstay.flavorProfile.aromaAndTaste}</p>

        <dl className="Mainstay__recipe">
          <dt>Grains</dt>
          <dd>{mainstay.flavorProfile.grains}</dd>

          <dt>Hops</dt>
          <dd>{mainstay.flavorProfile.hops}</dd>

          <dt>Yeast</dt>
          <dd>{mainstay.flavorProfile.yeast}</dd>
        </dl>
      </div>

      <div
        className="Mainstay__bottle-image"
        style={{ backgroundImage: `url("${mainstay.bottleImage}")` }}
      />
    </div>

    <div
      className="Mainstay__border-bottom"
      style={{ backgroundColor: mainstay.style.accentLight }}
    />
  </div>
);

export default Mainstay;
