import React from 'react';

import email from './images/icon-email.svg';
import facebook from './images/icon-fb.svg';
import instagram from './images/icon-ig.svg';

import './Social.scss';

const LayoutFooterSocial = () => (
  <div className="LayoutFooterSocial">
    <ul>
      <li>
        <a
          href="https://www.facebook.com/overmorrowbrewingco"
          rel="noopener noreferrer"
          style={{ backgroundImage: `url(${facebook})` }}
          target="_blank"
        >
          Facebook
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/overmorrowbrewingco"
          rel="noopener noreferrer"
          style={{ backgroundImage: `url(${instagram})` }}
          target="_blank"
        >
          Instagram
        </a>
      </li>

      <li>
        <a
          href="mailto:info@overmorrow.beer"
          style={{ backgroundImage: `url(${email})` }}
          target="_top"
        >
          Email
        </a>
      </li>
    </ul>
  </div>
);

export default LayoutFooterSocial;
