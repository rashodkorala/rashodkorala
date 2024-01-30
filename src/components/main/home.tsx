import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link as Links } from "react-scroll";
import { useTrail, animated } from "@react-spring/web";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql, SiFirebase, SiFlutter } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { TbBrandThreejs } from "react-icons/tb";

// Function to get the appropriate offset based on viewport size
const getOffset = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 668 ? -20 : -200;
  }
  return 0; // Default offset
};

const Home = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.85,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(inView);
  }, [inView]);

  const items = [
    <h1
      key="intro"
      className="text-2xl xsm:text-5xl sm:text-4xl md:text-5xl xl:text-7xl"
    >
    Hello, I am Rashod
    </h1>,
    <h2
      key="name"
      className="p-5 text-systemGray text-sm xsm:text-sm sm:text-md md:text-lg xl:text-2xl"
    >
      I am a Full Stack Developer and a Computer Science Student
    </h2>,
    <div key="skills" className="flex flex-wrap gap-2 items-center justify-center">
      {/* Insert your skill icons here */}
    </div>,
    <div key="button" className="w-[180px] my-4">
      <Links to="Projects" smooth={true} offset={getOffset()} duration={500}>
        <button className="flex justify-center items-center bg-transparent px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
          View Projects
          <HiArrowNarrowRight className="ml-1" />
        </button>
      </Links>
    </div>,
  ];

  const trail = useTrail(items.length, {
    opacity: startAnimation ? 1 : 0,
    x: startAnimation ? 0 : 90,
    from: { opacity: 0, x: 20 },
    config: { mass: 2, tension: 300, friction: 90 },
    delay: 600, // You can adjust the spring physics here
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
