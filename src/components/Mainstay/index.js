import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

import Section from 'src/components/Section';

import './Mainstay.scss';

const Mainstay = ({
  aromaAndTasteHeading = 'Aroma & Taste',
  index,
  mainstay,
  reverse = false,
}) => (
  <Section
    className={classNames('Mainstay', `Mainstay-${index}`, {
      Mainstay__reverse: reverse,
    })}
    style={{
      backgroundColor: mainstay.accentColor,
    }}
  >
    {(props) => (
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
              <img
                alt={mainstay.name}
                className="Mainstay__content__title"
                src={mainstay.nameImage}
              />

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
            <div
              className="Mainstay__bottle-image"
              style={{
                transform: `translateY(${props.top / 12}px)`,
              }}
            >
              <img alt={`${mainstay.name} Bottle`} src={mainstay.bottleImage} />
            </div>
          </div>
        </div>
      </div>
    )}
  </Section>
);

Mainstay.propTypes = {
  mainstay: PropTypes.object,
  reverse: PropTypes.bool,
};

export default Mainstay;
