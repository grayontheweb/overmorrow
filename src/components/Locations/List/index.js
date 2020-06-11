import React, { Fragment } from 'react';
import { get } from 'lodash';

import './List.scss';

const LocationsList = ({ locations = [], setSelectedLocation }) => (
  <ul className="LocationsList">
    {locations.map((location) => (
      <li className="LocationsList__item" key={location.id}>
        <h3
          onClick={() => setSelectedLocation(location.id)}
          onKeyDown={() => setSelectedLocation(location.id)}
          role="link"
        >
          {location.name}
        </h3>

        <div
          dangerouslySetInnerHTML={{
            __html: get(location, 'address.html'),
          }}
        />

        <dl>
          {get(location, 'business.phone_number') && (
            <Fragment>
              <dt>Tel:</dt>
              <dd>
                <a href={`tel: ${location.business.phone_number}`}>
                  {location.business.phone_number}
                </a>
              </dd>
            </Fragment>
          )}

          {get(location, 'business.email') && (
            <Fragment>
              <dt>Email:</dt>
              <dd>
                {' '}
                <a
                  href={`mailto:${location.business.email}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {location.business.email}{' '}
                </a>
              </dd>
            </Fragment>
          )}

          {get(location, 'business.website') && (
            <Fragment>
              <dt>Website:</dt>
              <dd>
                <a
                  href={location.business.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  {location.business.website}
                </a>
              </dd>
            </Fragment>
          )}
        </dl>

        {get(location, 'business.facebook_username') && (
          <dl>
            <dt>Facebook</dt>
            <dd>
              <a
                href={`http://www.facebook.com/${location.business.facebook_username}`}
                rel="noreferrer"
                target="_blank"
              >
                {location.business.facebook_username}
              </a>
            </dd>
          </dl>
        )}
      </li>
    ))}
  </ul>
);

export default LocationsList;
