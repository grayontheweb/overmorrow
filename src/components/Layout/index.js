import React from 'react';
import Helmet from 'react-helmet';

import LayoutFooter from './Footer';
import LayoutHeader from './Header';

import './Layout.scss';

const Layout = ({ children, locale = 'english' }) => (
  <div className="Layout">
    <Helmet defer={false}>
      <title>Overmorrow Brewing Company</title>
      <meta
        content="Here at Overmorrow, we craft beers to promote and honor classic styles throughout history – while updating them for the present and the future here in Vietnam. Our beers are a mix of well-traveled styles from around the world, infused with local Vietnamese flavors and ingredients."
        name="description"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="European Travel Destinations" />
      <meta
        property="og:description"
        content="Offering tour packages for individuals or groups."
      />
      <meta
        property="og:image"
        content="http://euro-travel-example.com/thumbnail.jpg"
      />
      <meta
        property="og:url"
        content="http://euro-travel-example.com/index.htm"
      />

      <meta name="twitter:title" content="European Travel Destinations " />
      <meta
        name="twitter:description"
        content="Offering tour packages for individuals or groups."
      />
      <meta
        name="twitter:image"
        content=" http://euro-travel-example.com/thumbnail.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <LayoutHeader locale={locale} />

    {children}

    <LayoutFooter locale={locale} />
  </div>
);

export default Layout;
