import React from 'react';
import PropTypes from 'prop-types';

import Section from 'src/components/Section';

import './Founder.scss';

const Founder = ({ imageUrl, description, name, title }) => (
  <Section className="Founder">
    {(props) => (
      <div
        className="Founder__parallax-background"
        style={{
          transform: props.top > 0 ? `translateY(${props.top / 5}px)` : null,
        }}
      >
        {imageUrl && (
          <div className="Founder__image">
            <img alt="beer person" src={imageUrl} />
          </div>
        )}

        <div className="Founder__content">
          <h4 className="Founder__name">{name}</h4>
          <h6 className="Founder__title">{title}</h6>
          <h6 className="Founder__description">{description}</h6>
        </div>

        <dl className="Founder__favorites">
          <dt>Favorite Beer Style</dt>
          <dd>Anything but the Milkshake IPA</dd>

          <dt>Favorite Breweries</dt>
          <dd>
            <ul>
              <li>
                <a href="https://www.stonebrewing.com/">Stone Brewing</a>
              </li>
              <li>
                <a href="https://www.dogfish.com/">Dogfish Head</a>
              </li>
              <li>
                <a href="https://www.stonebrewing.com/">Stone Brewing</a>
              </li>
              <li>
                <a href="https://www.dogfish.com/">Dogfish Head</a>
              </li>
            </ul>
          </dd>

          <dt>Favorite Ninja Turtle</dt>
          <dd>Leonardo</dd>
        </dl>
      </div>
    )}
  </Section>
);

Founder.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Founder;
