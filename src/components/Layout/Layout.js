import React from 'react';
import Helmet from 'react-helmet';

import LayoutFooter from './Footer';
import LayoutHeader from './Header';

import './Layout.scss';

const Layout = ({ children, locale = 'english', meta }) => (
  <div className="Layout">
    <Helmet defer={false}>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.imageUrl} />
      <meta property="og:url" content="http://overmorrow.beer" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <LayoutHeader locale={locale} />

    {children}

    <LayoutFooter locale={locale} />
  </div>
);

export default Layout;
