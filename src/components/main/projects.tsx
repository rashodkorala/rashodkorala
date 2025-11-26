'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { getAllProjects } from '@/lib/supabase/projects';
import { Project } from '@/lib/types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        const data = await getAllProjects();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  if (isLoading) {
    return (
      <section className="mx-auto min-h-screen max-w-[2800px] px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
        <div className="max-w-[2800px] mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] bg-gray-200 dark:bg-gray-800" />
                <div className="mt-4 h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="mt-2 h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto min-h-screen max-w-[2800px] px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
        <div className="max-w-[2800px] mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-12">Projects</h2>
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center space-y-4">
              <p className="text-red-600 dark:text-red-400 text-lg">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-20">
      <div className="max-w-[2500px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[34px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold mb-10 md:mb-14 tracking-[-0.5px] leading-[1.1] text-gray-900 dark:text-gray-50"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={projectVariants}
              className="group"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full"
              >
                <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] bg-gray-100 dark:bg-gray-900 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/20 border border-gray-200 dark:border-gray-800">
                  {project.cover_image_url ? (
                    <Image
                      src={project.cover_image_url}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                      <span className="text-gray-400 dark:text-gray-600 text-sm">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2 z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.featured && (
                        <Badge className="rounded-full border-0 bg-orange-600/90 backdrop-blur-sm px-2.5 py-1 text-[12px] leading-[16px] font-semibold text-white flex items-center gap-1">
                          <Star className="w-3 h-3 fill-white" />
                          Featured
                        </Badge>
                      )}
                      {project.category && (
                        <Badge className="rounded-full border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-[12px] leading-[16px] font-semibold uppercase tracking-[0.5px] text-gray-900 dark:text-white">
                          {project.category}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white">
                        <span className="text-[15px] leading-[22px] font-semibold">View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-[12px] leading-[16px] px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded text-white font-normal"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-[12px] leading-[16px] px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded text-white font-normal">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[20px] leading-[26px] font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex-1 tracking-[-0.3px]">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {project.live_url && (
                        <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
                      )}
                      {project.github_url && (
                        <Github className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
                      )}
                    </div>
                  </div>
                  
                  {project.subtitle && (
                    <p className="text-[15px] leading-[22px] text-gray-600 dark:text-gray-300 line-clamp-2 font-normal">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Tech Stack */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="rounded-md border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-[12px] leading-[16px] px-2 py-0.5 font-normal text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge
                          variant="outline"
                          className="rounded-md border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-[12px] leading-[16px] px-2 py-0.5 font-normal text-gray-500 dark:text-gray-500"
                        >
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Roles */}
                  {project.roles && project.roles.length > 0 && (
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[12px] leading-[16px] text-gray-500 dark:text-gray-500 uppercase tracking-[0.5px] font-medium">Role:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.roles.slice(0, 2).map((role, roleIndex) => (
                          <span
                            key={roleIndex}
                            className="text-[12px] leading-[16px] text-gray-600 dark:text-gray-400 font-normal"
                          >
                            {role}
                          </span>
                        ))}
                        {project.roles.length > 2 && (
                          <span className="text-[12px] leading-[16px] text-gray-500 dark:text-gray-500 font-normal">
                            +{project.roles.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {projects.length === 0 && (
          <div className="flex items-center justify-center min-h-[40vh]">
            <p className="text-[17px] leading-[24px] text-gray-500 dark:text-gray-400 font-normal">No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
