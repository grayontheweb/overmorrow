import React from 'react';
import { get } from 'lodash';

import Map, { Marker } from 'src/components/UI/Map';

import LocationsList from './List';

import './Locations.scss';

const Locations = ({
  center,
  locations = [],
  selectedLocation,
  setSelectedLocation,
  zoom,
}) => (
  <div className="Locations">
    <h2 className="Locations__title">Where</h2>
    <div className="Locations__map-container">
      <Map
        center={center}
        className="Locations__map"
        initialCenter={{
          lat: 21.0532,
          lng: 105.8261,
        }}
        zoom={zoom}
      >
        {locations.map((location) => (
          <Marker
            active={location.id === selectedLocation}
            name={location.name}
            title={location.name}
            key={location.id}
            onClick={() => setSelectedLocation(location.id)}
            position={{
              lat: get(location, 'address.latitude'),
              lng: get(location, 'address.longitude'),
            }}
          />
        ))}
      </Map>
    </div>

    <LocationsList
      locations={locations}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
    />
  </div>
);

export default Locations;
