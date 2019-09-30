import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import horizontalLogo from './images/horizontal-logo.svg';

import './Logo.scss';

const Logo = ({ className, height = null, stacked = false, width = null }) => (
  <div
    className={classNames('Logo', className)}
    style={{
      height: height ? `${height}px` : null,
      width: width ? `${width}px` : null,
    }}
  >
    <h1
      style={{
        backgroundImage: `url(${horizontalLogo})`,
      }}
    >
      Overmorrow
    </h1>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  stacked: PropTypes.bool,
  width: PropTypes.number,
};

export default Logo;
