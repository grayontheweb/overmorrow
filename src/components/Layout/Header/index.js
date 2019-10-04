import React, { useEffect, useRef, useState } from 'react';

import LayoutHeaderComponent from './Header';

const LayoutHeader = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [previousScrollTop, setPreviousScrollTop] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const { height } = headerRef.current.getBoundingClientRect();
    const top = window.pageYOffset || document.documentElement.scrollTop;

    if (top > height * 2) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    if (top > window.screen.height - height && top < previousScrollTop) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setPreviousScrollTop(top);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScrollTop]);

  return (
    <LayoutHeaderComponent
      headerRef={headerRef}
      isFixed={isOpen || isFixed}
      isOpen={isOpen}
      isVisible={isVisible}
      setIsOpen={setIsOpen}
      toggleIsOpen={toggleIsOpen}
    />
  );
};

export default LayoutHeader;
