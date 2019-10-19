import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import './Founder.scss';

const Founder = ({ founder = {} }) => (
  <div className="Founder">
    <div className="Founder__parallax-container">
      {founder.image && (
        <div className="Founder__image">
          <Img
            alt={founder.name}
            fixed={founder.image.childImageSharp.fixed}
            loading="eager"
          />
        </div>
      )}

      <div className="Founder__content">
        <h4 className="Founder__name">{founder.name}</h4>
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
                <a href={brewery.url} rel="noopener noreferrer" target="_blank">
                  {brewery.name}
                </a>
              </li>
            ))}
          </ul>
        </dd>

        <dt>{founder.favorites.other.classifier}</dt>
        <dd>{founder.favorites.other.favorite}</dd>
      </dl>
    </div>
  </div>
);

Founder.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Founder;
