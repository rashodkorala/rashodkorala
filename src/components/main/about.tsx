import React, { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false, // Change to false to monitor the element continuously
    threshold: 0.65,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(inView); // Set animation based on inView state
  }, [inView]);

  const trail = useTrail(2, {
    opacity: startAnimation ? 1 : 0,
    x: startAnimation ? 0 : 20,
    from: { opacity: 0, x: 20 },
    config: { mass: 1, tension: 280, friction: 60 }, // You can adjust the spring physics here
  });

  return (
    <div id="About" ref={inViewRef} className="w-full h-screen bg-transparent">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        {trail.map(({ x, ...style }, index) => {
          const Component = animated.div;
          return (
            <Component key={index} style={{ ...style, transform: x.to(x => `translate3d(0,${x}px,0)`) }}>
              {index === 0 && <h1 className="font-bold text-4xl xsm:text-5xl sm:text-6xl">Me, Myself & I</h1>}
              {index === 1 && (
                <p className="py-4 text-md xsm:text-xl xl:text-2xl text-clip">
                  I am a fourth year student at the Memorial University of Newfoundland studying Computer Science. I am a
                  self-taught developer and designer with a passion for creating beautiful and functional websites. I am also
                  passionate about photography and love to create and edit photos.
                </p>
              )}
            </Component>
          );
        })}
      </div>
    </div>
  );
};

export default About;
