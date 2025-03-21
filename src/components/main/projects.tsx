'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { projectData } from '@/public/assets/data/projectData';

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen px-6 md:px-10 pb-16">
      <div className="">
        {/* Title with Responsive Scaling */}
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-10 relative">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {projectData.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`} className="group cursor-pointer">
              <div className="relative overflow-hidden h-[350px] md:h-[400px] lg:h-[500px] shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                <Image
                  src={project.image[0]}
                  alt={project.title}
                  fill
                  className="w-full h-auto object-cover object-center opacity-90 brightness-90 transition-all duration-300 ease-in-out group-hover:brightness-75"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 ease-in-out mix-blend-multiply"></div>
              </div>
              <h3 className="mt-4 text-lg md:text-xl lg:text-2xl font-medium leading-snug transition-colors duration-200 group-hover:text-orange-600">
                {project.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-80">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
