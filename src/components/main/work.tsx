import React from "react";
import Image from "next/image";
import Link from "next/link";

import { projectData } from "./../../../public/assets/ProjectsPhotos/data/projectData";

const Work = () => {
  return (
    <div id="Work" className="snap-start w-full bg-transparent">
      <div id="workcont" className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <h1 id="workh1" className="text-4xl font-bold">
          WORK
        </h1>
        <h2 className="text-3xl py-3 px-2">PROJECTS</h2>
        <div className="md:grid grid-cols-2">
          {projectData.map((project) => (
            <div className="py-3 px-3" key={project.id}>
              <div>
                <Image className="w-[100%]" src={project.image} alt={project.name} width={100} height={100} />
              </div>
              <h3 className="text-2xl text-center pt-2 font-bold">{project.name}</h3>
              <p className="text-white text-md py-3 text-center">{project.description}</p>
              <div className="flex justify-center">
                <Link href={project.link} target="_blank" rel="noreferrer">
                  <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
