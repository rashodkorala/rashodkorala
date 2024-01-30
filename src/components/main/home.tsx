import React, { useEffect, useState } from "react";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
import { Link as Links } from "react-scroll";
import { useTrail, animated } from "@react-spring/web";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava,FaAnglesDown } from "react-icons/fa6";
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
    // <h2
    //   key="name"
    //   className="py-3 text-xl md:text-3xl xl:text-4xl"
    // >
    //   I am a Full Stack Developer
    // </h2>,
    <p key="desc" className="py-4 text-md xsm:text-xl xl:text-2xl text-center text-systemGray max-w-[950px]">
    Fourth-year Computer Science student at Memorial University of Newfoundland. I have passionately embraced coding, design, and photography, crafting both functional websites and breathtaking images. Every keystroke and camera click is a step in my delightful journey of creating digital masterpieces.
  </p>,
    <div key="skills" className="flex flex-wrap gap-2 items-center justify-center text-systemGray">
      {/* Insert your skill icons here */}
      <FaHtml5 size={30} className="px-1" />
      <FaCss3 size={30} className="px-1" />
      <IoLogoJavascript size={30} className="px-1" />
      <FaReact size={30} className="px-1" />
      <TbBrandNextjs size={30} className="px-1" />
      <SiFlutter size={30} className="px-1" />
      <TbBrandTailwind size={30} className="px-1" />
      <FaNodeJs size={30} className="px-1" />
      <SiMongodb size={30} className="px-1" />
      <SiMysql size={30} className="px-1" />
      <SiFirebase size={30} className="px-1" />
      <FaJava size={30} className="px-1" />
      <TbBrandThreejs size={30} className="px-1" />

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
