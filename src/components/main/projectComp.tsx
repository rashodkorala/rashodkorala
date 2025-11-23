'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectBySlug, getAllProjects } from '@/lib/supabase/projects';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectComp = ({ projectSlug }: { projectSlug: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        setIsLoading(true);
        const [projectData, projectsData] = await Promise.all([
          getProjectBySlug(projectSlug),
          getAllProjects()
        ]);
        setProject(projectData);
        setAllProjects(projectsData);
      } catch (err) {
        console.error('Error fetching project:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProject();
  }, [projectSlug]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex !== null && project) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? project.image.length - 1 : prev! - 1
      );
    }
  }, [selectedImageIndex, project]);

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex !== null && project) {
      setSelectedImageIndex((prev) =>
        prev === project.image.length - 1 ? 0 : prev! + 1
      );
    }
  }, [selectedImageIndex, project]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') handleClose();
    }
  }, [selectedImageIndex, handlePrevImage, handleNextImage, handleClose]);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImageIndex, handleKeyDown]);

  const projectIndex = project ? allProjects.findIndex((p) => p.id === project.id) : -1;

  const handlePrevProject = () => {
    if (projectIndex > 0) {
      setIsLoading(true);
      router.push(`/projects/${allProjects[projectIndex - 1].slug}`);
    }
  };

  const handleNextProject = () => {
    if (projectIndex < allProjects.length - 1) {
      setIsLoading(true);
      router.push(`/projects/${allProjects[projectIndex + 1].slug}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 dark:text-red-400">Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto min-h-screen max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 xl:px-16"
    >
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => router.push("/")}
        className="mb-12 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-orange-600 transition hover:text-orange-500"
      >
        <span className="text-xl">←</span> Back to Projects
      </motion.button>

      <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr]">
        {/* Project Title & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <Badge className="rounded-none border-0 bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-700 dark:bg-orange-500/15 dark:text-orange-200">
              Case Study
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tags?.map((tag, index) => (
              <Badge
                key={index}
                className="rounded-none border border-gray-300 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:border-white/20 dark:bg-white/10 dark:text-gray-200 dark:hover:border-orange-400 dark:hover:bg-orange-500/10 dark:hover:text-orange-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.link && (
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-none bg-orange-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400">
                  {project.linkText ?? 'Visit Project'}
                </Button>
              </Link>
            )}
            {project.video && (
              <Link href={project.video} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="rounded-none border-gray-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:border-white/20 dark:text-gray-200 dark:hover:border-orange-400 dark:hover:bg-orange-500/10 dark:hover:text-orange-200"
                >
                  Watch Demo
                </Button>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative flex items-end justify-end border border-orange-100/60 bg-white/80 p-4 shadow-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="relative h-[320px] w-full overflow-hidden border border-white/40 dark:border-white/10">
            <Image
              src={project.image?.[0] || '/assets/logo.png'}
              alt={project.title || 'Project hero image'}
              fill
              className="object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-16 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
      >
        {project.about}
      </motion.div>

      {/* Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {project.image?.map((imgSrc, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            onClick={() => handleImageClick(index)}
            className="group relative h-[340px] cursor-pointer overflow-hidden border border-orange-100/60 bg-white/60 shadow-lg transition duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-purple-400/0 transition duration-500 group-hover:from-orange-500/20 group-hover:via-orange-400/10 group-hover:to-purple-400/20" />
            <Image
              src={imgSrc}
              alt={project.title || 'Project image'}
              fill
              className="object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
          </motion.div>
        ))}
      </motion.div>

      {/* Previous / Next Project Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex flex-wrap justify-between gap-4"
      >
        <Button
          onClick={handlePrevProject}
          disabled={projectIndex === 0}
          className={`rounded-none px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${projectIndex === 0
            ? 'cursor-not-allowed border border-gray-400 bg-gray-400 text-white'
            : 'border border-gray-900 bg-gray-900 text-white hover:border-orange-600 hover:bg-orange-600'
            }`}
        >
          ← Previous Project
        </Button>
        <Button
          onClick={handleNextProject}
          disabled={projectIndex === allProjects.length - 1}
          className={`rounded-none px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${projectIndex === allProjects.length - 1
            ? 'cursor-not-allowed border border-gray-400 bg-gray-400 text-white'
            : 'border border-gray-900 bg-gray-900 text-white hover:border-orange-600 hover:bg-orange-600'
            }`}
        >
          Next Project →
        </Button>
      </motion.div>

      {/* Popup Modal for Image */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-5 right-5 border border-orange-500/50 bg-black/40 px-4 py-2 text-lg font-semibold uppercase tracking-[0.3em] text-orange-200 transition hover:bg-orange-500/20"
              onClick={handleClose}
            >
              Close
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="absolute left-5 border border-orange-500/40 bg-black/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 transition hover:bg-orange-500/20"
              onClick={handlePrevImage}
            >
              Prev
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-[80%] max-w-full h-[80%]"
            >
              <Image
                src={project.image[selectedImageIndex]}
                alt={project.title || "Project Image"}
                fill
                className="w-full h-auto object-contain object-center"
                priority
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="absolute right-5 border border-orange-500/40 bg-black/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 transition hover:bg-orange-500/20"
              onClick={handleNextImage}
            >
              Next
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectComp;
