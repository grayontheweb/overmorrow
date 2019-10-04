import React from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ children, className, fullScreen, id }) => (
  <div
    className={classNames('Section', className, {
      fullScreen,
    })}
    id={id}
  >
    {children}
  </div>
);

export default Section;
