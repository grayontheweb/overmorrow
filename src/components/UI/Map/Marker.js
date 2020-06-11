import React from 'react';
import { Marker } from 'google-maps-react';

import markerPinActive from './img/marker-pin-active@3x.png';
import markerPinInactive from './img/marker-pin-inactive@3x.png';

const MarkerComponent = ({ active, google, ...props }) => (
  <Marker
    icon={{
      scaledSize: new google.maps.Size(30, 46),
      url: active ? markerPinActive : markerPinInactive,
    }}
    google={google}
    {...props}
  />
);

export default MarkerComponent;
