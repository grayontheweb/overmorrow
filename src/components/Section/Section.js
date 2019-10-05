import React from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ children, className, fullScreen, id, sectionRef }) => (
  <div
    className={classNames('Section', className, {
      fullScreen,
    })}
    id={id}
    ref={sectionRef}
  >
    {children}
  </div>
);

export default Section;
