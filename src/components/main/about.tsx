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
              {index === 0 && <h1 className="font-bold text-4xl xsm:text-5xl sm:text-6xl text-center">Me, Myself & I</h1>}
              {index === 1 && (
                <p className="py-4 text-md xsm:text-xl xl:text-2xl text-justify">
                  As a spirited fourth-year Computer Science student at the Memorial University of Newfoundland, I&apos;ve enthusiastically embraced the world of coding and design as a self-taught developer. My journey has been nothing short of a thrilling adventure, filled with the joy of crafting stunning and highly functional websites. Alongside my tech pursuits, I&apos;m deeply passionate about photography, reveling in the art of capturing and crafting breathtaking images. Every click of the camera and stroke of the keyboard is a step towards creating digital masterpieces, all while enjoying every moment of this delightful and creative journey!
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
