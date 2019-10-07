import React, { useEffect, useRef, useState } from 'react';

import LayoutHeaderComponent from './Header';

const LayoutHeader = ({ locale }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [previousScrollTop, setPreviousScrollTop] = useState(0);
  const headerRef = useRef(null);

  const handleResize = (e) => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleScroll = (e) => {
    let top = null;
    const { height } = headerRef.current.getBoundingClientRect();

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      top = window.pageYOffset || document.documentElement.scrollTop;
    }

    if (!top) return;

    if (top > height * 3) {
      if (!isFixed) setIsFixed(true);
    } else {
      if (isFixed) setIsFixed(false);
    }

    if (top > window.innerHeight - height && top < previousScrollTop) {
      if (!isVisible) setIsVisible(true);
    } else {
      if (isVisible) setIsVisible(false);
    }

    setPreviousScrollTop(top);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScrollTop]);

  return (
    <LayoutHeaderComponent
      headerRef={headerRef}
      isFixed={isOpen || isFixed}
      isOpen={isOpen}
      isVisible={isVisible}
      locale={locale}
      setIsOpen={setIsOpen}
      toggleIsOpen={toggleIsOpen}
    />
  );
};

export default LayoutHeader;
