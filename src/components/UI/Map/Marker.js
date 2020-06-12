import React from 'react';
import { Marker } from 'google-maps-react';

const MarkerComponent = ({ active, google, ...props }) => {
  const markerPinActive = '/img/marker-pin-active@3x.png';
  const markerPinInactive = '/img/marker-pin-inactive@3x.png';

  return (
    <Marker
      icon={{
        scaledSize: new google.maps.Size(30, 46),
        url: active ? markerPinActive : markerPinInactive,
      }}
      google={google}
      {...props}
    />
  );
};

export default MarkerComponent;
