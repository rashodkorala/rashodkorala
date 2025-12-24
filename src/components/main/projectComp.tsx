'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectBySlug } from '@/lib/supabase/projects';
import { Project } from '@/lib/types';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';

const ProjectComp = ({ projectSlug }: { projectSlug: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);

  useEffect(() => {
    async function fetchProject() {
      try {
        setIsLoading(true);
        const projectData = await getProjectBySlug(projectSlug);
        setProject(projectData);
      } catch (err) {
        console.error('Error fetching project:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProject();
  }, [projectSlug]);

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = (e: React.MouseEvent, totalImages: number) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + totalImages) % totalImages);
  };

  const handleNextImage = (e: React.MouseEvent, totalImages: number) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % totalImages);
  };

  // Get year from created_at
  const getYear = () => {
    if (project?.created_at) {
      return new Date(project.created_at).getFullYear().toString();
    }
    return new Date().getFullYear().toString();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-white/50">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-white/50">Project not found</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-sm font-light">Back to home</span>
          </Link>
        </div>
      </div>
    );
  }

  // Define images after we know project exists
  const galleryImages = project.gallery_image_urls || [];
  const allImages = project.cover_image_url
    ? [project.cover_image_url, ...galleryImages]
    : galleryImages;

  // Keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        const totalImages = allImages.length;
        setSelectedImageIndex((selectedImageIndex - 1 + totalImages) % totalImages);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((selectedImageIndex + 1) % allImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, allImages.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-8"
      >
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="text-sm font-light">Back to home</span>
          </Link>
        </div>
      </motion.div>

      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-sm text-white/30 font-mono">{getYear()}</span>
              {project.tech && project.tech.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 border border-white/20 rounded-full text-white/50">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-white/50 font-light max-w-3xl">
              {project.subtitle || project.solution || project.problem || ''}
            </p>

            <div className="flex gap-4 mt-8">
              {project.live_url && (
                <motion.a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors"
                >
                  <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                  Live Demo
                </motion.a>
              )}
              {project.github_url && (
                <motion.a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors"
                >
                  <Github className="w-4 h-4" strokeWidth={1.5} />
                  View Code
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Images */}
          {allImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-20"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {(showAllImages ? allImages : allImages.slice(0, 4)).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer group"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        <span className="text-xs text-white">View</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {allImages.length > 4 && !showAllImages && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  onClick={() => setShowAllImages(true)}
                  className="mt-8 mx-auto block px-6 py-3 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                >
                  View All {allImages.length} Images
                </motion.button>
              )}

              {showAllImages && allImages.length > 4 && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setShowAllImages(false)}
                  className="mt-8 mx-auto block px-6 py-3 border border-white/20 rounded-full text-sm text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  Show Less
                </motion.button>
              )}
            </motion.div>
          )}

          {/* Content Sections */}
          {(project.problem || project.solution) && (
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
              {project.problem && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">Challenge</h2>
                  <p className="text-lg text-white/60 font-light leading-relaxed">
                    {project.problem}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h2 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">Solution</h2>
                  <p className="text-lg text-white/60 font-light leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* Features / Results */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-t border-white/10 pt-16"
            >
              <h2 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-8">Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {project.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="p-6 border border-white/10 rounded-lg">
                    <p className="text-lg font-light">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Next Project */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 pt-16 border-t border-white/10 text-center"
          >
            <p className="text-sm text-white/40 mb-6">Interested in more?</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-light hover:text-white/70 transition-colors"
            >
              View all projects
              <ArrowLeft className="w-5 h-5 rotate-180" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence mode="wait">
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10 group"
              onClick={handleClose}
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/10"
            >
              <span className="text-sm text-white/80">
                {selectedImageIndex + 1} / {allImages.length}
              </span>
            </motion.div>

            {/* Previous Button */}
            {allImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                onClick={(e: React.MouseEvent) => handlePrevImage(e, allImages.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
            )}

            {/* Next Button */}
            {allImages.length > 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                onClick={(e: React.MouseEvent) => handleNextImage(e, allImages.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
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
              className="relative w-full h-full max-w-[90vw] max-h-[85vh]"
            >
              <Image
                src={allImages[selectedImageIndex]}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="90vw"
              />
            </motion.div>

            {/* Keyboard Hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/10"
            >
              <span className="text-xs text-white/60">
                Use arrow keys to navigate • ESC to close
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectComp;
