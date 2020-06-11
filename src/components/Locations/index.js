import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { graphql, useStaticQuery } from 'gatsby';

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

  useEffect(() => {
    const zoomIn = 16;
    const zoomOut = 13;

    if (selectedLocation && zoom !== zoomIn) {
      setZoom(zoomIn);
    } else if (!selectedLocation && zoom !== zoomOut) {
      setZoom(zoomOut);
    }
  }, [selectedLocation, zoom]);

  return (
    <LocationsComponent
      center={center}
      locations={locations}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      zoom={zoom}
    />
  );
};

export default Locations;
