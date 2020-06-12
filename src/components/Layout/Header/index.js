import React, { useCallback, useEffect, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import LayoutHeaderComponent from './Header';

const LayoutHeader = ({ locale }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [previousScrollTop, setPreviousScrollTop] = useState(0);
  const headerRef = useRef(null);

  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "header" } }) {
        id

        frontmatter {
          english {
            aboutUs
            founders
            ourBeers
          }

          vietnamese {
            aboutUs
            founders
            ourBeers
          }
        }
      }
    }
  `);

  const handleResize = useCallback(
    (e) => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  const handleScroll = useCallback(
    (e) => {
      let top = null;

      if (!headerRef || !headerRef.current) return;

      const { height } = headerRef.current.getBoundingClientRect();

      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        top = window.pageYOffset || document.documentElement.scrollTop;
      }

      if (typeof top !== 'number') return;

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
    },
    [isFixed, isVisible, previousScrollTop],
  );

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
  }, [handleResize, handleScroll, previousScrollTop]);

  const content =
    locale !== 'vietnamese'
      ? {
          ...frontmatter.english,
        }
      : {
          ...frontmatter.vietnamese,
        };

  return (
    <LayoutHeaderComponent
      content={content}
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
