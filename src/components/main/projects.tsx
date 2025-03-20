'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { projectData } from '@/public/assets/data/projectData';

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen p-10">
      <div className="max-w-[2300px] mx-auto">
        <h2 className="text-8xl font-light mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {projectData.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px]">
                <Image
                  src={project.image[0]}
                  alt={project.title}
                  fill
                  className="w-full h-auto object-cover object-center opacity-90 brightness-90"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
