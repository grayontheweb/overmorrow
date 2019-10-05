import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ children, className, fullScreen, id }) => {
  const [boundingClientRect, setBoundingClientRect] = useState({});
  const sectionRef = useRef(null);

  const scrollAndResizeHandler = () => {
    // if (className === 'Intro') { console.log(sectionRef.current.getBoundingClientRect())}
    setBoundingClientRect(sectionRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    window.addEventListener('resize', scrollAndResizeHandler);
    window.addEventListener('scroll', scrollAndResizeHandler);

    return () => {
      window.removeEventListener('resize', scrollAndResizeHandler);
      window.removeEventListener('scroll', scrollAndResizeHandler);
    };
  }, []);

  // console.log('BOUNDING', boundingClientRect)

  return (
    <div
      className={classNames('Section', className, {
        fullScreen,
      })}
      id={id}
      ref={sectionRef}
    >
      {typeof children === 'function' ? children(boundingClientRect) : children}
    </div>
  );
};

export default Section;
