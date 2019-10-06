import React from 'react';
import PropTypes from 'prop-types';

import Section from 'src/components/Section';

import './Founder.scss';

const Founder = ({ founder = {} }) => (
  <Section className="Founder">
    {(props) => (
      <div
        className="Founder__parallax-background"
        style={{
          transform: props.top > 0 ? `translateY(${props.top / 5}px)` : null,
        }}
      >
        {founder.image && (
          <div className="Founder__image">
            <img alt="beer person" src={founder.image} />
          </div>
        )}

        <div className="Founder__content">
          <h4 className="Founder__name">{founder.fullName}</h4>
          <h6 className="Founder__title">{founder.jobTitle}</h6>
          <h6 className="Founder__description">{founder.jobDescription}</h6>
        </div>

        <dl
          className="Founder__favorites"
          style={{
            backgroundColor: founder.backgroundColor,
          }}
        >
          <dt>Favorite Beer Style</dt>
          <dd>{founder.favorites.beerStyle}</dd>

          <dt>Favorite Breweries</dt>
          <dd>
            <ul>
              {founder.favorites.breweries.map((brewery, i) => (
                <li key={i}>
                  <a
                    href={brewery.breweryUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {brewery.breweryName}
                  </a>
                </li>
              ))}
            </ul>
          </dd>

          <dt>{founder.favorites.other.classifier}</dt>
          <dd>{founder.favorites.other.favorite}</dd>
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
