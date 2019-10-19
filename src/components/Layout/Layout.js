import React from 'react';
import Helmet from 'react-helmet';

import LayoutFooter from './Footer';
import LayoutHeader from './Header';

import './Layout.scss';

const Layout = ({ children, locale = 'english', meta }) => (
  <div className="Layout">
    <Helmet defer={false}>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.overmorrow.beer" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image"
        content="http://www.overmorrow.beer/img/meta-image.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta
        property="twitter:image"
        content="http://www.overmorrow.beer/img/meta-image.jpg"
      />
    </Helmet>

    <LayoutHeader locale={locale} />

    {children}

    <LayoutFooter locale={locale} />
  </div>
);

export default Layout;
