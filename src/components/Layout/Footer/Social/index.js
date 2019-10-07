import React from 'react';

import email from './images/icon-email.svg';
import facebook from './images/icon-fb.svg';
import instagram from './images/icon-ig.svg';

const LayoutFooterSocial = () => (
  <div className="LayoutFooterSocial">
    <ul>
      <li>
        <a
          href="https://www.facebook.com/overmorrowbrewingco"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="Facebook" src={facebook} />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/overmorrowbrewingco"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="Instagram" src={instagram} />
        </a>
      </li>

      <li>
        <a href="mailto:info@overmorrow.beer" target="_top">
          <img alt="Email" src={email} />
        </a>
      </li>
    </ul>
  </div>
);

export default LayoutFooterSocial;
