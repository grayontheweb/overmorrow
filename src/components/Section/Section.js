import React from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ children, className, fullScreen }) => (
  <div
    className={classNames('Section', className, {
      fullScreen,
    })}
  >
    {children}
  </div>
);

export default Section;
