import React from 'react';
import { get } from 'lodash';

import Map, { Marker } from 'src/components/UI/Map';
import Section from 'src/components/Section';

import LocationsCity from './City';
import LocationsList from './List';

import './Locations.scss';

const Locations = ({
  center,
  locations = [],
  onSelectLocation,
  onZoomChange,
  selectedLocation,
  zoom,
}) => (
  <Section className="Locations" fullScreen>
    <div className="Locations__header">
      <h2 id="where">Where</h2>
    </div>

    <div className="Locations__map-container" id="locations-map">
      <LocationsCity />

      <Map
        center={center}
        className="Locations__map"
        initialCenter={{
          lat: 21.0532,
          lng: 105.8261,
        }}
        onZoomChanged={(map, { zoom }) => onZoomChange(zoom)}
        zoom={zoom}
      >
        {locations.map((location) => (
          <Marker
            active={location.id === selectedLocation}
            name={location.name}
            title={location.name}
            key={location.id}
            onClick={() => onSelectLocation(location.id)}
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
      onSelectLocation={onSelectLocation}
      selectedLocation={selectedLocation}
    />
  </Section>
);

export default Locations;
