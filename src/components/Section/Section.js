import React from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({
  children,
  className,
  fullScreen,
  id,
  sectionRef,
  style,
}) => (
  <div
    className={classNames('Section', className, {
      fullScreen,
    })}
    id={id}
    ref={sectionRef}
    style={style}
  >
    {children}
  </div>
);

export default Section;
