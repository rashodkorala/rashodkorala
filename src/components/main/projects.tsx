'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { projectData } from '@/public/assets/data/projectData';
import Featured from './featured';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Featured />
      <section className="min-h-screen px-4 sm:px-6 md:px-10 py-20 max-w-[2000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-16 relative">
            Projects
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12"
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={`/projects/${project.id}`} className="group block">
                  <div className="relative overflow-hidden aspect-[4/5] rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                    <Image
                      src={project.image[0]}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 ease-in-out"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.9 }}
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-medium leading-snug transition-colors duration-200 group-hover:text-orange-600">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

    </>
  );
};

export default Projects;
