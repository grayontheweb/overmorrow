import React from 'react';
import classNames from 'classnames';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

import './Mainstay.scss';

const Mainstay = ({
  aromaAndTasteHeading = 'Aroma & Taste',
  index,
  mainstay,
  reverse = false,
}) => (
  <div
    className={classNames('Mainstay', `Mainstay-${index}`, {
      Mainstay__reverse: reverse,
    })}
    style={{
      backgroundColor: mainstay.accentColor,
    }}
  >
    <div className="Mainstay__parallax-container">
      {/* Sets the color on the strong tags in the description Markdown */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .Mainstay-${index} strong,
          .Mainstay-${index} h1,
          .Mainstay-${index} h2,
          .Mainstay-${index} h3,
          .Mainstay-${index} h4,
          .Mainstay-${index} h5,
          .Mainstay-${index} h6
          {
            color: ${mainstay.accentColor}
          }

          .Mainstay-${index} dl {
            color: ${mainstay.accentColor}
          }

          .Mainstay-${index} dl dt {
            color: ${mainstay.accentColor}
          }
        `,
        }}
      />

      <div className="Mainstay__container">
        <div className="Mainstay__container__column-left">
          <div className="Mainstay__content">
            {mainstay.nameImage.childImageSharp ? (
              <Img
                alt={mainstay.name}
                className="Mainstay__content__title"
                fluid={mainstay.nameImage.childImageSharp.fluid}
                loading="eager"
              />
            ) : (
              <img
                alt={mainstay.name}
                className="Mainstay__content__title"
                src={mainstay.nameImage.publicURL}
              />
            )}

            <h3 className="Mainstay__content__introduction">
              {mainstay.intro}
            </h3>

            <Markdown
              className="Mainstay__content__description"
              source={mainstay.description}
            />

            <div className="Mainstay__content__aroma-and-taste">
              <h4>{aromaAndTasteHeading}</h4>
              <p>{mainstay.aromaAndTaste}</p>
            </div>

            <dl className="Mainstay__content__recipe">
              <dt>Grains</dt>
              <dd>{mainstay.grains.join(', ')}</dd>

              <dt>Hops</dt>
              <dd>{mainstay.hops.join(', ')}</dd>

              <dt>Yeast</dt>
              <dd>{mainstay.yeast.join(', ')}</dd>
            </dl>
          </div>
        </div>

        <div className="Mainstay__container__column-right">
          <div className="Mainstay__bottle-image">
            <Img
              alt={`${mainstay.name} Bottle`}
              fluid={mainstay.bottleImage.childImageSharp.fluid}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Mainstay.propTypes = {
  mainstay: PropTypes.object,
  reverse: PropTypes.bool,
};

export default Mainstay;
