import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

import './Mainstay.scss';

const Mainstay = ({ mainstay, reverse = false }) => (
  <div
    className={classNames('Mainstay', `Mainstay-${mainstay.id}`, {
      Mainstay__reverse: reverse,
    })}
    style={{
      backgroundColor: mainstay.style.accentLight,
    }}
  >
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

    <div className="Mainstay__container">
      <div className="Mainstay__container__column-left">
        <div className="Mainstay__content">
          <img
            alt={mainstay.title}
            className="Mainstay__content__title"
            src={mainstay.nameImage}
          />

          <h3 className="Mainstay__content__introduction">
            {mainstay.introduction}
          </h3>

          <Markdown
            className="Mainstay__content__description"
            source={mainstay.description}
          />

          <div className="Mainstay__content__aroma-and-taste">
            <h4>Aroma & Taste</h4>
            <p>{mainstay.flavorProfile.aromaAndTaste}</p>
          </div>

          <dl className="Mainstay__content__recipe">
            <dt>Grains</dt>
            <dd>{mainstay.flavorProfile.grains}</dd>

            <dt>Hops</dt>
            <dd>{mainstay.flavorProfile.hops}</dd>

            <dt>Yeast</dt>
            <dd>{mainstay.flavorProfile.yeast}</dd>
          </dl>
        </div>
      </div>

      <div className="Mainstay__container__column-right">
        <div className="Mainstay__bottle-image">
          <img alt={`${mainstay.title} Bottle`} src={mainstay.bottleImage} />
        </div>
      </div>
    </div>

    {/*    <div
      className="Mainstay__border-bottom"
      style={{ backgroundColor: mainstay.style.accentLight }}
    />*/}
  </div>
);

Mainstay.propTypes = {
  mainstay: PropTypes.object,
  reverse: PropTypes.bool,
};

export default Mainstay;
