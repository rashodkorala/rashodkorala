import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link as Links } from "react-scroll";
import { useTrail, animated } from "@react-spring/web";
// import ParticleComponent from "../ParticleComponent";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql, SiFirebase, SiFlutter } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind} from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { TbBrandThreejs } from "react-icons/tb";
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
    <p
      key="intro"
      className="text-2xl xsm:text-5xl sm:text-4xl md:text-5xl xl:text-7xl"
    >
      HI, I&apos;M
    </p>,
    <h1
      key="name"
      className="font-bold text-5xl xsm:text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
    >
      RASHOD
    </h1>,
    // <p key="title" className="text-lg xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl">DEVELOPER | PHOTOGRAPHER | CREATOR</p>,
    <div key="skills" className="flex  flex-wrap gap-2 items-center justify-center">
      <FaHtml5 size={30} className="px-1" style={{ color: "#E34F26" }} />{" "}
      {/* HTML5 */}
      <FaCss3 size={30} className="px-1" style={{ color: "#1572B6" }} />{" "}
      {/* CSS3 */}
      <IoLogoJavascript
        size={30}
        className="px-1"
        style={{ color: "#F7DF1E" }}
      />{" "}
      {/* JavaScript */}
      <FaReact size={30} className="px-1" style={{ color: "#61DAFB" }} />{" "}
      {/* React */}
      <TbBrandNextjs
        size={30}
        className="px-1"
        style={{ color: "#FFFFFF" }}
      />{" "}
      {/* Next.js */}
      <SiFlutter size={30} className="px-1" style={{ color: "#02569B" }} />{" "}
      {/* Flutter */}
      <TbBrandTailwind
        size={30}
        className="px-1"
        style={{ color: "#38B2AC" }}
      />{" "}
      {/* Tailwind CSS */}
      <FaNodeJs size={30} className="px-1" style={{ color: "#339933" }} />{" "}
      {/* Node.js */}
      <SiMongodb size={30} className="px-1" style={{ color: "#47A248" }} />{" "}
      {/* MongoDB */}
      <SiMysql size={30} className="px-1" style={{ color: "#4479A1" }} />{" "}
      {/* MySQL */}
      <SiFirebase
        size={30}
        className="px-1"
        style={{ color: "#FFCA28" }}
      />{" "}
      {/* Firebase */}
      <FaJava size={30} className="px-1" style={{ color: "#007396" }} />{" "}
      {/* Java */}
      <TbBrandThreejs size={30} className="px-1" style={{ color: "#FFFFFF" }} />{" "}
      {/* Three.js */}
    </div>,
    <div key="button" className="w-[180px] my-4">
      <Links to="Work" smooth={true} offset={-150} duration={500}>
        <button className="flex justify-center items-center bg-transparent text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
          View Work
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
    delay:200, // You can adjust the spring physics here
  });

  return (
    <div
      id="Home"
      className="w-full h-screen bg-transparent relative overflow-hidden snap-center"
      ref={inViewRef}
    >
      {/* <ParticleComponent /> */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4 text-white">
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
