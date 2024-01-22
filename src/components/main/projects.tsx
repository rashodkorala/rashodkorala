import React from 'react';

const Projects = () => {
  const projectData = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    // Add more project data as needed
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
