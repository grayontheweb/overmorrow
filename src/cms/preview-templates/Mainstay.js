import React from 'react';
import PropTypes from 'prop-types';

import Mainstay from 'src/components/Mainstay';

const MainstayPreview = ({ entry, widgetFor }) => (
  <Mainstay
    imageUrl={entry.getIn(['data', 'image'])}
    name={entry.getIn(['data', 'title'])}
    title={entry.getIn(['data', 'jobTitle'])}
  />
);

MainstayPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MainstayPreview;
