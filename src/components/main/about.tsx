import React, { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false, // Change to false to monitor the element continuously
    threshold: 0.5,
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
    delay: 200, // You can adjust the delay here
  });

  return (
    <section id="About" ref={inViewRef} className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full xsm:px-5">
        {trail.map(({ x, ...style }, index) => {
          const Component = animated.div;
          return (
            <Component key={index} style={{ ...style, transform: x.to(x => `translate3d(0,${x}px,0)`) }}>
              {index === 0 && <h1 className="font-bold text-4xl xsm:text-5xl sm:text-6xl text-center">Me, Myself & I</h1>}
              {index === 1 && (
                <p className="py-4 text-md xsm:text-xl xl:text-2xl text-center text-systemGray p-10">
                  Fourth-year Computer Science student at Memorial University of Newfoundland. I have passionately embraced coding, design, and photography, crafting both functional websites and breathtaking images. Every keystroke and camera click is a step in my delightful journey of creating digital masterpieces.
                </p>
              )}
            </Component>
          );
        })}
      </div>
    </section>
  );
};

export default About;
