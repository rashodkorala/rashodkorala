import React from 'react';

import router from 'next/router';

import { projectData } from '@/public/assets/data/projectData';

const Projects: React.FC = () => {
  
  const handleViewProject = (projectId: number) => {
    // Implement logic to handle the view project action
    // redirect to the project page
    
    router.push(`/projects/${projectId}`);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center snap-mandotory snap-center' id='Projects'>
    <div className="max-w-screen-lg p-8" >
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="flex flex-col p-6">
        {projectData.map((project, index) => (
          <React.Fragment key={project.id}>
            <div className=" flex flex-col md:grid grid-cols-3 md:justify-center md:items-center bg-transparent ">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-systemGray">{project.description}</p>
              <button
                className="flex justify-center bg-transparent px-2 py-2 rounded-3xl ring-2 ring-blue-500 m-4 hover:scale-110 transition-all duration-1000 ease-in-out "
                onClick={() => handleViewProject(project.id)}
              >
                View Project
              </button>
              
            </div>
            {index !== projectData.length && <hr className="my-4 border-gray-300" />}
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
