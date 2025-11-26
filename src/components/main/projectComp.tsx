'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectBySlug, getAllProjects } from '@/lib/supabase/projects';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';

const ProjectComp = ({ projectSlug }: { projectSlug: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const galleryScrollRef = React.useRef<HTMLDivElement>(null);

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

  const handleImageClick = useCallback((galleryIndex: number) => {
    if (!project) return;
    // If there's a cover image, offset by 1 (cover is at index 0)
    const imageIndex = project.cover_image_url ? galleryIndex + 1 : galleryIndex;
    setSelectedImageIndex(imageIndex);
  }, [project]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex !== null && project) {
      const galleryImages = project.gallery_image_urls || [];
      const allImages = project.cover_image_url
        ? [project.cover_image_url, ...galleryImages]
        : galleryImages;
      setSelectedImageIndex((prev) =>
        prev === 0 ? allImages.length - 1 : prev! - 1
      );
    }
  }, [selectedImageIndex, project]);

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex !== null && project) {
      const galleryImages = project.gallery_image_urls || [];
      const allImages = project.cover_image_url
        ? [project.cover_image_url, ...galleryImages]
        : galleryImages;
      setSelectedImageIndex((prev) =>
        prev === allImages.length - 1 ? 0 : prev! + 1
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1a1a1a]">
        <div className="animate-pulse space-y-4 w-full max-w-4xl px-6">
          <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1a1a1a]">
        <div className="text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400">Project not found</p>
          <Button
            onClick={() => router.push("/")}
            variant="ghost"
            className="text-orange-600 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2 text-orange-600 dark:text-orange-400" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Define images after we know project exists
  const galleryImages = project.gallery_image_urls || [];
  const allImages = project.cover_image_url
    ? [project.cover_image_url, ...galleryImages]
    : galleryImages;

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-4xl px-6 py-12 sm:py-16"
      >
        {/* Back Button - Notion Style */}
        <motion.button
          whileHover={{ x: -2 }}
          onClick={() => router.push("/")}
          className="mb-10 inline-flex items-center gap-1.5 text-[14px] leading-[20px] text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-normal"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </motion.button>

        {/* Header Section - Notion Style */}
        <div className="space-y-3 mb-16">
          {project.category && (
            <div className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal uppercase tracking-[0.5px]">
              {project.category}
            </div>
          )}
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.5px] text-gray-900 dark:text-gray-50 leading-[1.2]">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-[17px] leading-[1.6] text-gray-600 dark:text-gray-400 font-normal mt-2">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Cover Image - Notion Style */}
        {project.cover_image_url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden mb-16 bg-gray-50 dark:bg-gray-900"
          >
            <Image
              src={project.cover_image_url}
              alt={project.title || 'Project cover'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </motion.div>
        )}

        {/* Metadata - Notion Style */}
        <div className="space-y-4 mb-16 pb-8 border-b border-gray-200/50 dark:border-gray-800/50">
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal">Tech</span>
              <span className="text-[13px] leading-[18px] text-gray-400 dark:text-gray-600">•</span>
              <div className="flex flex-wrap items-center gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[13px] leading-[18px] text-gray-600 dark:text-gray-400 font-normal"
                  >
                    {tech}{index < (project.tech?.length ?? 0) - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.roles && project.roles.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[13px] leading-[18px] text-gray-500 dark:text-gray-500 font-normal">Role</span>
              <span className="text-[13px] leading-[18px] text-gray-400 dark:text-gray-600">•</span>
              <div className="flex flex-wrap items-center gap-2">
                {project.roles.map((role, index) => (
                  <span
                    key={index}
                    className="text-[13px] leading-[18px] text-gray-600 dark:text-gray-400 font-normal"
                  >
                    {role}{index < project.roles!.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Links - Notion Style */}
        <div className="flex flex-wrap gap-2 mb-20">
          {project.live_url && (
            <Link
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Live
            </Link>
          )}
          {project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
            >
              <Github className="w-3.5 h-3.5" />
              View Code
            </Link>
          )}
          {project.case_study_url && (
            <Link
              href={project.case_study_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded transition-colors font-normal"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Case Study
            </Link>
          )}
        </div>

        {/* Problem & Solution - Notion Style */}
        {(project.problem || project.solution) && (
          <div className="space-y-12 mb-20">
            {project.problem && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="notion-block"
              >
                <h2 className="text-[24px] leading-[1.4] font-semibold mb-4 text-gray-900 dark:text-gray-50 tracking-[-0.3px]">Problem</h2>
                <div className="text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                  {project.problem}
                </div>
              </motion.div>
            )}
            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="notion-block"
              >
                <h2 className="text-[24px] leading-[1.4] font-semibold mb-4 text-gray-900 dark:text-gray-50 tracking-[-0.3px]">Solution</h2>
                <div className="text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
                  {project.solution}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Features - Notion Style */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-[24px] leading-[1.4] font-semibold mb-6 text-gray-900 dark:text-gray-50 tracking-[-0.3px]">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-[16px] leading-[1.6] text-gray-700 dark:text-gray-300 font-normal"
                >
                  <span className="text-gray-400 dark:text-gray-600 mt-1.5 text-[14px]">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Gallery Images - Horizontal Carousel - Notion Style */}
        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[24px] leading-[1.4] font-semibold text-gray-900 dark:text-gray-50 tracking-[-0.3px]">Gallery</h2>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => {
                    if (galleryScrollRef.current) {
                      galleryScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                    }
                  }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={() => {
                    if (galleryScrollRef.current) {
                      galleryScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                    }
                  }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
              ref={galleryScrollRef}
              className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 -mx-6 px-6 md:-mx-0 md:px-0 scroll-smooth"
            >
              {galleryImages.map((imgSrc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + (index * 0.05),
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                  onClick={() => handleImageClick(index)}
                  className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {/* Navigation - Notion Style */}
        <div className="flex items-center justify-between pt-8 mt-20 border-t border-gray-200/50 dark:border-gray-800/50">
          <button
            onClick={handlePrevProject}
            disabled={projectIndex === 0}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 rounded transition-colors font-normal ${projectIndex === 0
              ? 'cursor-not-allowed opacity-40'
              : 'hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
              }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Previous
          </button>
          <button
            onClick={handleNextProject}
            disabled={projectIndex === allProjects.length - 1}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[14px] leading-[20px] text-gray-600 dark:text-gray-400 rounded transition-colors font-normal ${projectIndex === allProjects.length - 1
              ? 'cursor-not-allowed opacity-40'
              : 'hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
              }`}
          >
            Next
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Image Modal - Apple Style */}
      <AnimatePresence mode="wait">
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={handleClose}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10"
              onClick={handleClose}
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/10"
            >
              <span className="text-[13px] leading-[18px] text-white font-medium">
                {selectedImageIndex + 1} / {allImages.length}
              </span>
            </motion.div>

            {/* Previous Button */}
            {allImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="absolute left-6 z-50 p-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                disabled={selectedImageIndex === 0}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
            )}

            {/* Image Container */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative w-full h-full max-w-[95vw] max-h-[95vh] p-4 sm:p-8"
            >
              <Image
                src={allImages[selectedImageIndex]}
                alt={project.title || "Project Image"}
                fill
                className="object-contain"
                priority
                sizes="95vw"
              />
            </motion.div>

            {/* Next Button */}
            {allImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="absolute right-6 z-50 p-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                disabled={selectedImageIndex === allImages.length - 1}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            )}

            {/* Swipe Indicator (for mobile) */}
            {allImages.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-1.5"
              >
                {allImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${idx === selectedImageIndex
                      ? 'w-6 bg-white'
                      : 'w-1 bg-white/40'
                      }`}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectComp;
