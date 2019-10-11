import React from 'react';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';

import ParallaxObserver from 'src/components/ParallaxObserver';
import Section from 'src/components/Section';

import './Story.scss';

const Story = ({ backgroundImage, content, heading = 'Our Story' }) => (
  <ParallaxObserver>
    {(props) => {
      let opacity = null;

      if (typeof window !== 'undefined' && props.top) {
        opacity =
          props.top > 0 ? (opacity = 1 - props.top / window.innerHeight) : null;
      }

      return (
        <Section className="Story" fullScreen>
          <div className="Story__background-image">
            <Img
              alt="Overmorrow team"
              fixed={backgroundImage.childImageSharp.fixed}
              style={{ opacity: opacity < 1 ? opacity : null }}
            />
          </div>

          <div className="Story__content">
            <div
              className="Story__container"
              style={{
                transform:
                  props.top > 0 ? `translateY(${props.top / 4}px)` : null,
              }}
            >
              <div className="Story__container__column-left">
                <h3 className="Story__heading">{heading}</h3>
              </div>

              <div className="Story__container__column-right">
                <Markdown className="Story__description" source={content} />
              </div>
            </div>
          </div>
        </Section>
      );
    }}
  </ParallaxObserver>
);

export default Story;
