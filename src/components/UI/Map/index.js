import React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

import { googlePlacesApiKey } from 'src/config/env';

import MarkerComponent from './Marker';
import mapStyles from './mapStyles.json';

const MapContainer = ({ children, google, onReady, ...props }) => {
  const mapOnReady = (mapProps, map) => {
    map.setOptions({ styles: mapStyles });

    if (onReady && typeof onReady === 'function') {
      return onReady(mapProps, map);
    }
  };

  return (
    <Map google={google} onReady={mapOnReady} {...props}>
      {children}
    </Map>
  );
};

export const Marker = MarkerComponent;

export default GoogleApiWrapper({
  apiKey: googlePlacesApiKey,
})(MapContainer);
