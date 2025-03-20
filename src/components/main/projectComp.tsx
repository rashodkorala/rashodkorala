'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectData } from '@/public/assets/data/projectData';

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
    <div className="min-h-screen font-light py-10 ">

      <div className="">
        <button onClick={() => router.push("/")} className="text-2xl font-light underline pb-10 ">
          ← Back to Projects
        </button>

        <div className="grid grid-cols-3 gap-8">

          <div>
            <h2 className="text-6xl font-light mb-6">{project?.title}</h2>
            <div className="flex flex-wrap font-light w-1/3">
              {project?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-white rounded-3xl bg-transparent hover:scale-110 transition-all duration-1000 ease-in-out"
                >
                  {tag},
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xl font-medium">{project?.about}</p>
          </div>
          <div className="flex flex-col items-center w-full h-full">
            <Link
              href={project?.link || "/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-light underline"
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
              className="relative overflow-hidden rounded-lg h-[500px] cursor-pointer"
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
          <button
            onClick={handlePrevProject}
            className={`px-6 py-3 text-lg font-medium rounded-lg ${projectIndex === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              } text-white transition-all`}
            disabled={projectIndex === 0}
          >
            ← Previous Project
          </button>
          <button
            onClick={handleNextProject}
            className={`px-6 py-3 text-lg font-medium rounded-lg ${projectIndex === projectData.length - 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              } text-white transition-all`}
            disabled={projectIndex === projectData.length - 1}
          >
            Next Project →
          </button>
        </div>
      </div>

      {/* Popup Modal for Image */}
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={handleClose}
          >
            ✕
          </button>
          <button
            className="absolute left-5 text-white text-3xl bg-gray-800 p-2 rounded-full"
            onClick={handlePrevImage}
          >
            ◀
          </button>
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
            className="absolute right-5 text-white text-3xl bg-gray-800 p-2 rounded-full"
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
