'use client';
import React, { useEffect, useState } from "react";
import { Link as Links } from "react-scroll";
import { useTrail, animated } from "@react-spring/web";
import { FaAnglesDown } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

// Function to get the appropriate offset based on viewport size
const getOffset = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 668 ? -20 : 0;
  }
  return 0; // Default offset
};

const Home = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(inView);
  }, [inView]);

  const items = [
    <h1
      key="intro"
      className="text-4xl md:text-5xl xl:text-7xl"
    >
      Hello, I am Rashod
    </h1>,
    <p key="desc" className="py-4 text-md xsm:text-xl xl:text-2xl text-center text-systemGray max-w-[950px]">
      I am Desginer/ Front End Developer
    </p>,
    <div key="skills" className="flex flex-wrap gap-2 items-center justify-center text-systemGray">


    </div>,
    <div key="button" className="my-2">
      <Links to="Projects" smooth={true} offset={getOffset()} duration={500} className="flex flex-col justify-center items-center gap-2 text-blue-500">
        <p className="text-md">Scroll Down to see my projects</p>
        <FaAnglesDown size={30} className="animate-bounce " />
      </Links>
    </div>,
  ];

  const trail = useTrail(items.length, {
    opacity: startAnimation ? 1 : 0,
    x: startAnimation ? 0 : 90,
    from: { opacity: 0, x: 20 },
    config: { mass: 2, tension: 300, friction: 90 },
    delay: 200, // You can adjust the spring physics here
  });

  return (
    <div
      id="Home"
      className="w-full h-screen bg-transparent relative overflow-hidden snap-center font-semibold"
      ref={inViewRef}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
        {trail.map((props, index) => (
          <animated.div key={index} style={props}>
            {items[index]}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
