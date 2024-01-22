import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const projectData: Project[] = [
    { id: 5, title: 'Personal Website', description: 'Description for Project 2' },
    { id: 2, title: 'getFit mobile app', description: 'Description for Project 2' },
    { id: 3, title: 'Artist Website', description: 'Description for Project 2' },
    { id: 4, title: 'Small business Website', description: 'Description for Project 2' },
    { id: 5, title: 'Movie database website', description: 'Description for Project 2' },
  ];

  const handleViewProject = (projectId: number) => {
    // Implement logic to handle the view project action
    console.log(`View Project ${projectId}`);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-8 text-white snap-always snap-center" id='Projects'>
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="flex flex-col p-6">
        {projectData.map((project, index) => (
          <React.Fragment key={project.id}>
            <div className="grid grid-cols-3 justify-center items-center bg-transparent ">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <button
                className="flex justify-center bg-transparent text-white px-2 py-2 rounded-3xl ring-2 ring-blue-500 my-4 hover:scale-110 transition-all duration-1000 ease-in-out "
                onClick={() => handleViewProject(project.id)}
              >
                View Project
              </button>
              
            </div>
            {index !== projectData.length - 1 && <hr className="my-4 border-gray-300" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
