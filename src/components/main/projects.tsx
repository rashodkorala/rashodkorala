'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Play } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
        staggerChildren: 0.18
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
      <section className="mx-auto min-h-screen max-w-[2440px] px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-600"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto min-h-screen max-w-[2440px] px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto min-h-screen max-w-[2440px] px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex flex-col items-start gap-6 pb-14"
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Interfaces with intention.
          </h2>
          <p className="text-lg leading-relaxed text-orange-800 w-3/4">
            A mix of product builds, collaborations, and experiments. Each project pairs thoughtful user experience with
            reliable engineering—designed to tell a brand&apos;s story and drive results.
          </p>
        </div>
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-10 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={projectVariants}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden  max-w-lg border border-orange-100/60 bg-white/80 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="relative h-60 overflow-hidden ">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-600/70 via-orange-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src={project.image?.[0] || '/assets/logo.png'}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 grayscale"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={project.id === 1}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3">

              </div>
            </div>

            <div className="space-y-6 px-8 pb-8 pt-6">
              <Badge className="rounded-none border-0 bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-900 shadow-sm backdrop-blur dark:bg-white/20 dark:text-white">
                Case Study #{project.id}
              </Badge>
              {project.tags.slice(0, 1).map((tag) => (
                <Badge
                  key={tag}
                  className="rounded-none border-0 bg-orange-500/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur"
                >
                  {tag}
                </Badge>
              ))}
              <div className="space-y-3">
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-2xl font-semibold">
                  <span className="transition-colors group-hover:text-orange-600">{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge
                    key={`${project.id}-${tag}`}
                    className="rounded-none border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge className="rounded-none border-0 bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600 dark:bg-orange-500/20 dark:text-orange-200">
                    +{project.tags.length - 4} more
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href={`/projects/${project.id}`}>
                  <Button className="rounded-none bg-gray-900 px-5 text-sm font-medium text-white hover:bg-orange-600 dark:bg-white dark:text-gray-900">
                    View Details
                  </Button>
                </Link>
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="rounded-none border-gray-300 px-4 text-sm font-medium text-gray-700 hover:border-orange-200 hover:bg-orange-50/60 hover:text-orange-700 dark:border-white/20 dark:text-white dark:hover:border-orange-400/60 dark:hover:bg-orange-500/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.linkText ?? 'Visit project'}
                    </Button>
                  </Link>
                )}
                {project.video && (
                  <Link href={project.video} target="_blank" rel="noreferrer">
                    <Button
                      variant="ghost"
                      className="rounded-none px-4 text-sm font-medium text-gray-700 hover:bg-orange-50/80 hover:text-orange-700 dark:text-gray-200 dark:hover:bg-orange-500/10 dark:hover:text-orange-200"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch demo
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
