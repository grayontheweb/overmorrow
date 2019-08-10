import { useEffect } from 'react';

// import React, { useEffect } from 'react';

// import About from 'src/components/About';
// import Intro from 'src/components/Intro';
// import Mainstays from 'src/components/Mainstays';
// import Subscribe from 'src/components/Subscribe';

export default () => {
  useEffect(() => {
    if (window) {
      window.location.replace('https://www.facebook.com/OvermorrowBrewingCo');
    }
  }, []);

  return null;

  // return (
  //   <div>
  //     <Intro />
  //     {/*<About />*/}
  //     {/*<Mainstays />*/}
  //     {/*<Subscribe />*/}
  //   </div>
  // );
};
