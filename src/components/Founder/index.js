import React from 'react';
import PropTypes from 'prop-types';

import './Founder.scss';

const Founder = ({ imageUrl, name, title }) => (
  <div className="Founder">
    {imageUrl && (
      <div className="Founder__image">
        <img alt="beer person" src={imageUrl} />
      </div>
    )}

    <h4 className="Founder__name">{name}</h4>
    <h6 className="Founder__title">{title}</h6>
  </div>
);

Founder.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Founder;
