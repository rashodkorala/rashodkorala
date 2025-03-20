'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectData } from '@/public/assets/data/projectData';
import { Button } from '@/components/ui/button';

const ProjectComp = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const projectIndex = projectData.findIndex(
    (project) => project.id === Number(projectId)
  );
  const project = projectData[projectIndex];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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

  const handlePrevProject = () => {
    if (projectIndex > 0) {
      router.push(`/projects/${projectData[projectIndex - 1].id}`);
    }
  };

  const handleNextProject = () => {
    if (projectIndex < projectData.length - 1) {
      router.push(`/projects/${projectData[projectIndex + 1].id}`);
    }
  };

  return (
    <div className="min-h-screen font-light py-10 px-4 md:px-8 lg:px-16">
      <button onClick={() => router.push("/")} className="text-xl md:text-2xl font-light underline underline-offset-4 pb-10 text-orange-600">
        ← Back to Projects
      </button>

      <div className="flex flex-col lg:grid grid-cols-3 gap-8">
        {/* Project Title & Tags */}
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            {project?.title}
          </h2>
          <div className="flex flex-wrap font-light space-x-2">
            {project?.tags.map((tag, index) => (
              <span
                key={index}
                className="text-white text-lg md:text-xl lg:text-2xl rounded-3xl bg-transparent hover:scale-110 transition-all duration-1000 ease-in-out"
              >
                {tag},
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <p className="text-lg md:text-xl lg:text-2xl font-medium">
            {project?.about}
          </p>
        </div>

        {/* Project Link */}
        <div className="flex flex-col items-center w-full h-full">
          <Link
            href={project?.link || "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl lg:text-3xl font-light underline"
          >
            {project?.linkText}
          </Link>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid md:grid-cols-4 gap-8 py-10">
        {project?.image.map((imgSrc, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={typeof imgSrc === 'string' ? imgSrc : imgSrc.src}
              alt={project?.title || "Project Image"}
              fill
              className="w-full h-auto object-cover object-center opacity-90 brightness-90"
            />
          </div>
        ))}
      </div>

      {/* Previous / Next Project Buttons */}
      <div className="flex justify-between mt-10">
        <Button
          onClick={handlePrevProject}
          className={`px-6 py-3 text-lg md:text-xl lg:text-2xl font-medium rounded-full ${projectIndex === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"
            } text-white transition-all`}
          disabled={projectIndex === 0}
        >
          ← Previous Project
        </Button>
        <Button
          onClick={handleNextProject}
          className={`px-6 py-3 text-lg md:text-xl lg:text-2xl font-medium rounded-full ${projectIndex === projectData.length - 1 ? "bg-gray-500 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"
            } text-white transition-all`}
          disabled={projectIndex === projectData.length - 1}
        >
          Next Project →
        </Button>
      </div>

      {/* Popup Modal for Image */}
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <Button
            className="absolute top-5 right-5 text-orange-600 text-3xl"
            onClick={handleClose}
          >
            ✕
          </Button>
          <Button
            className="absolute left-5 text-orange-600 text-3xl p-2 rounded-full"
            onClick={handlePrevImage}
          >
            ◀
          </Button>
          <div className="relative w-[80%] max-w-full h-[80%]">
            <Image
              src={typeof project.image[selectedImageIndex] === 'string'
                ? project.image[selectedImageIndex]
                : project.image[selectedImageIndex].src}
              alt={project?.title || "Project Image"}
              fill
              className="w-full h-auto object-contain object-center"
            />
          </div>
          <button
            className="absolute right-5 text-orange-600 text-3xl p-2 rounded-full"
            onClick={handleNextImage}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectComp;
