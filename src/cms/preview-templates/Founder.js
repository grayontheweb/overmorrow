import React from 'react';
import PropTypes from 'prop-types';

import Founder from 'src/components/Founder';

const FounderPreview = ({ entry, widgetFor }) => (
  <Founder
    description={entry.getIn(['data', 'jobDescription'])}
    imageUrl={entry.getIn(['data', 'image'])}
    name={entry.getIn(['data', 'title'])}
    title={entry.getIn(['data', 'jobTitle'])}
  />
);

FounderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FounderPreview;
