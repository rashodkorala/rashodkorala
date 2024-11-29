'use client';
import React from 'react';

import { useRouter } from 'next/navigation';

import { projectData } from '@/public/assets/data/projectData';
import Link from 'next/link';

const Projects: React.FC = () => {


  return (
    <div className='w-full md:h-screen flex justify-center items-center snap-mandotory snap-center' id='Projects'>
      <div className="max-w-screen-lg p-8" >
        <h2 className="text-[48px] w-56 md:w-full font-bold mb-4">My Projects</h2>
        <div className="flex flex-col p-6">
          {projectData.map((project, index) => (
            <React.Fragment key={project.id}>
              <div className=" flex flex-col md:grid grid-cols-3 md:justify-center md:items-center bg-transparent ">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-systemGray">{project.description}</p>
                <Link href={`/projects/${project.id}`}>
                  View Projectç
                </Link>

              </div>
              {index !== projectData.length && <hr className="my-4 border-gray-300" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
