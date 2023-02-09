import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link as Links } from "react-scroll";

type Props = {};

const home = (props: Props) => {
  return (
    <div id="Home" className="w-full h-screen bg-bg snap-center">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <p className="text-white text-2xl xsm:text-5xl sm:text-4xl md:text-5xl xl:text-7xl">Hi , I&apos;m</p>
        <h1 className="text-white font-bold text-5xl xsm:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">RASHOD</h1>
        <p className="text-white text-lg xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl">
          DEVELEOPER | PHOTOGRAPHER | CREATOR
        </p>
        <div className="w-[180px]">
          {/* <Link
        className="flex items-center text-blue-500 ring-2  cursor-pointer text-lg xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl"
        to="Work"
        smooth={true}
        offset={-100}
        duration={500}
      >
        View Work <HiArrowNarrowRight className="ml-1" />
      </Link> */}

          <Links to="Work" smooth={true} offset={-100} duration={500}>
            <button className=" flex justify-center items-center bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 my-4 hover:scale-110 transition-all duration-1000 ease-in-out ">
              View Work
              <HiArrowNarrowRight className="ml-1" />
            </button>
          </Links>
        </div>
      </div>
    </div>
  );
};

export default home;
