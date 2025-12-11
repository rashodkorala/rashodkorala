'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { getAllProjects } from '@/lib/supabase/projects';
import { Project } from '@/lib/types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Get year from created_at or updated_at
  const getYear = () => {
    if (project.created_at) {
      return new Date(project.created_at).getFullYear().toString();
    }
    return new Date().getFullYear().toString();
  };

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group border-t border-black/10 dark:border-white/10 py-8 md:py-12 cursor-pointer"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm text-black/30 dark:text-white/30 font-mono">{getYear()}</span>
              {project.tech && project.tech.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {project.tech.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 border border-black/10 dark:border-white/10 rounded-full text-black/50 dark:text-white/50">
                      {tag}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 border border-black/10 dark:border-white/10 rounded-full text-black/50 dark:text-white/50">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2 flex items-center gap-3 text-black dark:text-white">
              {project.title}
              <motion.span
                animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5 text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors" strokeWidth={1.5} />
              </motion.span>
            </h3>

            {project.subtitle && (
              <p className="text-black/50 dark:text-white/50 font-light max-w-xl">
                {project.subtitle}
              </p>
            )}
          </div>

          {project.cover_image_url && (
            <motion.div
              animate={{ scale: isHovered ? 1 : 0.95, opacity: isHovered ? 1 : 0.7 }}
              className="relative w-full md:w-48 h-32 bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden"
            >
              <Image
                src={project.cover_image_url}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 192px"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  if (isLoading) {
    return (
      <section ref={ref} className="bg-white dark:bg-black text-black dark:text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse border-t border-black/10 dark:border-white/10 py-8 md:py-12">
                <div className="h-6 bg-black/5 dark:bg-white/5 rounded w-1/4 mb-4" />
                <div className="h-8 bg-black/5 dark:bg-white/5 rounded w-1/2 mb-2" />
                <div className="h-4 bg-black/5 dark:bg-white/5 rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section ref={ref} className="bg-white dark:bg-black text-black dark:text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
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
    <section ref={ref} className="bg-white dark:bg-black text-black dark:text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-black/40 dark:text-white/40 mb-4">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black dark:text-white">
            Selected <span className="font-medium">projects</span>
          </h2>
        </motion.div>

        <div>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} index={index} />
            ))
          ) : (
            <div className="flex items-center justify-center min-h-[40vh]">
              <p className="text-black/50 dark:text-white/50 font-light">No projects found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
