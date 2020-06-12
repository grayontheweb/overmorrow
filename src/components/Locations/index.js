import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';

import isInViewport from 'src/helpers/isInViewport';
import useCompare from 'src/hooks/useCompare';

import LocationsComponent from './Locations';

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [zoom, setZoom] = useState(14);

  const { data } = useStaticQuery(graphql`
    query LocationsQuery {
      data: overmorrowApi {
        locations: business_location {
          id
          name

          address {
            city
            html
            id
            latitude
            longitude
          }

          business {
            email
            phone_number
            instagram_username
            facebook_username
            website
            id
          }
        }
      }
    }
  `);

  const locations = get(data, 'locations', []);

  const center = selectedLocation
    ? {
        lat: get(
          locations.find((l) => l.id === selectedLocation),
          'address.latitude',
        ),
        lng: get(
          locations.find((l) => l.id === selectedLocation),
          'address.longitude',
        ),
      }
    : undefined;

  const selectedLocationDidChange = useCompare(selectedLocation);

  const onSelectLocation = (id) => {
    const locationListItem = document.getElementById(
      `location-list-item-${id}`,
    );

    setSelectedLocation(id);

    if (locationListItem && !isInViewport(locationListItem)) {
      locationListItem.scrollIntoView(false);
    }
  };

  const onZoomChange = (z) => {
    if (z !== zoom) {
      setZoom(z);
    }
  };

  useEffect(() => {
    const zoomIn = 16;
    const zoomOut = 13;

    if (selectedLocationDidChange && selectedLocation) {
      setZoom(zoomIn);
    } else if (selectedLocationDidChange && !selectedLocation) {
      setZoom(zoomOut);
    }
  }, [selectedLocation, selectedLocationDidChange]);

  return (
    <LocationsComponent
      center={center}
      locations={locations}
      onSelectLocation={onSelectLocation}
      onZoomChange={onZoomChange}
      selectedLocation={selectedLocation}
      zoom={zoom}
    />
  );
};

export default Locations;
