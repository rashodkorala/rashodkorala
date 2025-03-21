'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '@/public/assets/data/projectData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectComp = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const projectIndex = projectData.findIndex(
    (project) => project.id === Number(projectId)
  );
  const project = projectData[projectIndex];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(false);
  }, [projectId]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? project.image.length - 1 : prev! - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === project.image.length - 1 ? 0 : prev! + 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') handleClose();
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImageIndex]);

  const handlePrevProject = () => {
    if (projectIndex > 0) {
      setIsLoading(true);
      router.push(`/projects/${projectData[projectIndex - 1].id}`);
    }
  };

  const handleNextProject = () => {
    if (projectIndex < projectData.length - 1) {
      setIsLoading(true);
      router.push(`/projects/${projectData[projectIndex + 1].id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen font-light py-10 px-4 md:px-8 lg:px-16"
    >
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => router.push("/")}
        className="text-xl md:text-2xl font-light underline underline-offset-4 pb-10 text-orange-600"
      >
        ← Back to Projects
      </motion.button>

      <div className="flex flex-col lg:grid grid-cols-2 gap-8">
        {/* Project Title & Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            {project?.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project?.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-lg md:text-xl lg:text-2xl bg-transparent border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            href={project?.link || "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl lg:text-3xl font-light underline underline-offset-4 hover:text-orange-600 transition inline-flex items-center gap-2"
          >
            {project?.linkText}
            <span className="text-sm">↗</span>
          </Link>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
            {project?.about}
          </p>
        </motion.div>
      </div>

      {/* Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-4 gap-8 py-10"
      >
        {project?.image.map((imgSrc, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] cursor-pointer group"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={typeof imgSrc === 'string' ? imgSrc : imgSrc.src}
              alt={project?.title || "Project Image"}
              fill
              className="w-full h-auto object-cover object-center transition-all duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Previous / Next Project Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between mt-10"
      >
        <Button
          onClick={handlePrevProject}
          disabled={projectIndex === 0}
          className={`px-6 py-3 text-lg md:text-xl lg:text-2xl font-medium rounded-full transition-all duration-300 ${projectIndex === 0
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700 hover:scale-105"
            } text-white`}
        >
          ← Previous Project
        </Button>
        <Button
          onClick={handleNextProject}
          disabled={projectIndex === projectData.length - 1}
          className={`px-6 py-3 text-lg md:text-xl lg:text-2xl font-medium rounded-full transition-all duration-300 ${projectIndex === projectData.length - 1
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700 hover:scale-105"
            } text-white`}
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
              whileHover={{ scale: 1.1 }}
              className="absolute top-5 right-5 text-orange-600 text-3xl p-2 hover:bg-orange-600/10 rounded-full transition-colors"
              onClick={handleClose}
            >
              ✕
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute left-5 text-orange-600 text-3xl p-2 hover:bg-orange-600/10 rounded-full transition-colors"
              onClick={handlePrevImage}
            >
              ◀
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-[80%] max-w-full h-[80%]"
            >
              <Image
                src={typeof project.image[selectedImageIndex] === 'string'
                  ? project.image[selectedImageIndex]
                  : project.image[selectedImageIndex].src}
                alt={project?.title || "Project Image"}
                fill
                className="w-full h-auto object-contain object-center"
                priority
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute right-5 text-orange-600 text-3xl p-2 hover:bg-orange-600/10 rounded-full transition-colors"
              onClick={handleNextImage}
            >
              ▶
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectComp;
