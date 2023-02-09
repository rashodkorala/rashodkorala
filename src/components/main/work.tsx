import React from "react";

import Squeekleen from "/public/assets/ProjectsPhotos/SqueeKleen.png";
import KingDomino from "/public/assets/ProjectsPhotos/KingDomino.png";
import MyPortfolio from "/public/assets/ProjectsPhotos/MyPortfolio.png";
import ArtistPortfolio from "/public/assets/ProjectsPhotos/ArtistPortfolio.png";

import Image from "next/image";
import Link from "next/link";

type Props = {};

const work = (props: Props) => {
  return (
    <div id="Work" className=" snap-start w-full bg-bg">
      <div
        id="workcont"
        className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <h1 id="workh1" className="text-4xl font-bold">
          WORK
        </h1>
        <h2 className="text-3xl py-3 px-2">PROJECTS</h2>
        <div className="md:grid grid-cols-2 ">
          <div className="py-3 px-3" id="Squeekleen">
            <div>
              <Image className="w-[100%]" src={Squeekleen} alt="Squeekleen" />
            </div>
            <h3 className="text-2xl text-center pt-2 font-bold">SqueeKleen Inc.</h3>
            <p className="text-white text-md py-3 text-center">
              Simple website for a local cleaning company. Built Using Html and pure CSS.
            </p>
            <div className="flex justify-center">
              <Link href="https://squeekleen.com/" target="_blank" rel="noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
                  View Project
                </button>
              </Link>
            </div>
          </div>
          <div className="py-3 px-3" id="KingDomino">
            <div className="flex justify-center items-center">
              <Image className="w-[80%]" src={KingDomino} alt="KingDomino" />
            </div>
            <h3 className="text-2xl text-center pt-3 font-bold">KingDomino</h3>
            <p className="text-white text-md py-2 text-center">
              Acadamic project for a board game called KingDomino. Built with Jav Swing. This project was a group
              project with 3 other students.
            </p>
            <div className="flex justify-center">
              <Link href="/" target="_blank" rel="noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
                  View Project
                </button>
              </Link>
            </div>
          </div>
          <div className="py-3 px-3" id="MyPortFolio">
            <div>
              <Image className="" src={MyPortfolio} alt="RashodKorala" />
            </div>
            <h3 className="text-2xl text-center font-bold">My PortFolio</h3>
            <p className="text-white text-md py-3 text-center">
              This is my portfolio website. Built with React and TailwindCSS to showcase my skills and projects.
            </p>
            <div className="flex justify-center">
              {/* <a href="/" target="_blank" rel="noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500">
                  View Project
                </button>
              </a> */}
            </div>
          </div>
          <div className="py-3 px-3" id="ArtistPortFolio">
            <div>
              <Image className="" src={ArtistPortfolio} alt="BanduManamperi" />
            </div>
            <h3 className="text-2xl text-center font-bold">Artist PortFolio</h3>
            <p className="text-white text-md py-3 text-center">
              This is a website for a local artist. Built with NextJs and TailwindCSS to showcase his work.
            </p>
            <div className="flex justify-center">
              <Link href="https://dev.bandumanamperi.com" target="_blank" rel="noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
                  View Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
