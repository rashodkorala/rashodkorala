'use client';
import React from 'react';

import { useRouter } from 'next/navigation';

import { projectData } from '@/public/assets/data/projectData';
import Link from 'next/link';
import Image from 'next/image';

const Projects: React.FC = () => {


  return (
    <section className="min-h-screen px-10 ">
      <div className="max-w-[2300px] mx-auto" >
        <h2 className="text-8xl font-light mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image[0]}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105 max-h-[300px]"

                />
              </div>
              <h3 className="mt-4 text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
