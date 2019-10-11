import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import './Section.scss';

const Section = ({ children, className, fullScreen, id, style }) => {
  const [boundingClientRect, setBoundingClientRect] = useState({});
  const [ref, inView] = useInView();
  const sectionRef = useRef(null);

  const scrollAndResizeHandler = () => {
    setBoundingClientRect(sectionRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    if (inView) {
      window.addEventListener('scroll', scrollAndResizeHandler);
    } else {
      window.removeEventListener('scroll', scrollAndResizeHandler);
    }

    return () => {
      window.removeEventListener('scroll', scrollAndResizeHandler);
    };
  }, [inView]);

  // console.log('BOUNDING', boundingClientRect)

  return (
    <div ref={ref}>
      <div
        className={classNames('Section', className, {
          fullScreen,
        })}
        id={id}
        ref={sectionRef}
        style={style}
      >
        {typeof children === 'function'
          ? children(boundingClientRect)
          : children}
      </div>
    </div>
  );
};

export default Section;
