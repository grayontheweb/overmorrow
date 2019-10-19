import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ParallaxObserver = ({ children }) => {
  const [boundingClientRect, setBoundingClientRect] = useState({});
  const [inViewRef, inView] = useInView();
  const parallaxObserverRef = useRef();

  const scrollAndResizeHandler = () => {
    setBoundingClientRect(parallaxObserverRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    setBoundingClientRect(parallaxObserverRef.current.getBoundingClientRect());
  }, []);

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

  const props = {
    inView,
    bottom: boundingClientRect.bottom,
    height: boundingClientRect.height,
    left: boundingClientRect.left,
    right: boundingClientRect.right,
    top: boundingClientRect.top,
    x: boundingClientRect.x,
    y: boundingClientRect.y,
  };

  return (
    <div ref={inViewRef}>
      <div ref={parallaxObserverRef}>
        {typeof children === 'function' ? children(props) : children}
      </div>
    </div>
  );
};

export default ParallaxObserver;
