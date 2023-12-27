import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link as Links } from 'react-scroll';
import { useTrail, animated } from '@react-spring/web';
// import ParticleComponent from "../ParticleComponent";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql,SiFirebase,SiFlutter  } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
const Home = () => {
  
  const items = [
    <p key="intro" className="text-2xl xsm:text-5xl sm:text-4xl md:text-5xl xl:text-7xl">HI, I&apos;M</p>,
    <h1 key="name" className="font-bold text-5xl xsm:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">RASHOD</h1>,
    <p key="title" className="text-lg xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl">DEVELOPER | PHOTOGRAPHER | CREATOR</p>,
    <div key=
    "skills" className='flex gap-2'>
      <FaHtml5 size={30} className="px-1" />
      <FaCss3 size={30} className="px-1" />
      <IoLogoJavascript size={30} className="px-1" />
      <FaReact size={30} className="px-1" />
      <TbBrandNextjs size={30} className="px-1" />
      <SiFlutter  size={30} className="px-1" />
      <TbBrandTailwind size={30} className="px-1" />
      <FaNodeJs size={30} className="px-1" />
      <SiMongodb size={30} className="px-1" />
      <SiMysql size={30} className="px-1" />
      <SiFirebase size={30} className="px-1" />
      <FaJava size={30} className="px-1" />

    </div>,
    <div key="button" className="w-[180px] my-4">
      <Links to="Work" smooth={true} offset={100} duration={500}>
        <button className="flex justify-center items-center bg-transparent text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
          View Work
          <HiArrowNarrowRight className="ml-1" />
        </button>
      </Links>
    </div>
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translate3d(0,-20px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 1010,
  });

  return (
    <div id="Home" className="w-full h-screen bg-transparent relative overflow-hidden snap-center">
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
