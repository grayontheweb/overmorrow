import React from 'react';
import PropTypes from 'prop-types';

const MainstayPreview = ({ entry, widgetFor }) => (
  <div>
    <h1>MUTHAFUCKIN TITLE YO: {entry.getIn(['data', 'title'])}</h1>
  </div>
);

MainstayPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MainstayPreview;
