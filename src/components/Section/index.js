import React from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ children, className, fullScreen, id, style }) => (
  <div
    className={classNames('Section', className, {
      fullScreen,
    })}
    id={id}
    style={style}
  >
    {children}
  </div>
);

export default Section;
