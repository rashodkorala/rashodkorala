import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link as Links } from "react-scroll";
import ParticleComponent from "../ParticleComponent";

const Home = () => {
  return (
    <div id="Home" className="w-full h-screen bg-transparent relative overflow-hidden snap-center">
     
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <p className="text-2xl xsm:text-5xl sm:text-4xl md:text-5xl xl:text-7xl">Hi, I&apos;m</p>
        <h1 className="font-bold text-5xl xsm:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">RASHOD</h1>
        <p className="text-lg xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl">
          DEVELOPER | PHOTOGRAPHER | CREATOR
        </p>
        <div className="w-[180px] my-4">
          <Links to="Work" smooth={true} offset={100} duration={500}>
            <button className="flex justify-center items-center bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
              View Work
              <HiArrowNarrowRight className="ml-1" />
            </button>
          </Links>
        </div>
      </div>
    </div>
  );
};

export default Home;
