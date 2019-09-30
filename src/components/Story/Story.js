import React from 'react';

import Section from 'src/components/Section';

import backgroundImage from './images/background.jpg';

import './Story.scss';

const Story = () => (
  <Section className="Story" fullScreen>
    <div className="Story__background-image">
      <img alt="Overmorrow team" src={backgroundImage} />
    </div>

    <div className="Story__content">
      <div className="Story__container">
        <div className="Story__container__column-left">
          <h3 className="Story__heading">Our Story</h3>
        </div>

        <div className="Story__container__column-right">
          <div className="Story__description">
            <p>
              Overmorrow Brewing’s story begins in 2008, when{' '}
              <strong>Chris Jarvis</strong> and <strong>Gray Sutherland</strong>
              , two friends met while studying at university in Pittsburgh. The
              two bonded over their shared love of contemporary classical music,
              a growing interest in craft beer, and a nascent wanderlust. After
              several years in Seattle and other cities around the world
              pursuing projects together and separate (including performing with
              flugabone and resonator guitar as folk-punk duo Elephant Gazebo)
              the two split up – Chris to settle in and pursue his love of the
              Vietnamese language, and Gray to develop his remote business while
              continuing to travel. Nonetheless, the two made a point of running
              into each other in various cities on three continents and enjoying
              whatever tasty food and drink their host countries had to offer.
            </p>

            <p>
              In 2015, the pair realized that two of Chris’s great passions –
              Vietnam and homebrewing – could come together and forge a place in
              the then-fledgling Hanoi craft beer scene. After years of
              developing his web consulting business, Gray was ready for a new
              challenge, his wanderings ended, and he joined Chris in Vietnam to
              begin working on their new project. Joined by{' '}
              <strong>Nam Tran</strong> and <strong>Noah Tanabe</strong>, two
              other travelers with roots in Vietnam, Japan, and America, our
              founders form a team that pairs global experiences with love for
              everything Vietnam has to offer.
            </p>

            <p>
              Our beers have taken similarly long journeys across the oceans and
              the years: They come from the moors of old Scotland, the mountains
              of traditional French mining country, and the forests and hop
              fields of modern West Coast America. Here, they have combined with
              ingredients from Vietnam’s cane fields, rice paddies, and mountain
              slopes. Just as we’ve gained from our travels, we like to think
              that these traditional styles gained something special as they
              made their way over here. Together, we’ve all found a home in
              Vietnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Story;
