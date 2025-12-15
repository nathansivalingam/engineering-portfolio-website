import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Undergraduate Thesis Project",
    description: "Investigated vortex generator height effects to reduce photovoltaic module temperatures using CFD and wind tunnel validation.",
    imageUrl: "/assets/undergraduate_thesis_project_cover_photo.jpg",
    githubUrl: "https://github.com/nathansivalingam/mechanical-engineering-thesis-c/tree/main",
  },
  {
    id: 2,
    title: "Alpha Stirling Engine",
    description: "Designed and assembled an alpha-type Stirling engine, optimising flywheel performance with CAD and CNC tools.",
    imageUrl: "/assets/stirling_engine_cover_photo.jpg",
    liveUrl: "https://youtu.be/HoenJD7wxeo",
  },
  {
    id: 3,
    title: "Hand Gesture Robot",
    description: "Created a gesture-controlled autonomous vehicle with FEA-optimised chassis for lightweight structural integrity.",
    imageUrl: "/assets/hand_gesture_robot_cover_photo.png",
    githubUrl: "https://github.com/nathansivalingam/hand-gesture-robot",
  },
  {
    id: 4,
    title: "Gearbox Design Project",
    description: "Constructed 3D-printed planetary gearboxes to visually demonstrate complex mechanical movements.",
    imageUrl: "/assets/planetary_gearbox_cover_photo.jpg",
  },
  {
    id: 5,
    title: "Gyre Tracking Mission",
    description: "Designed a satellite mission for tracking garbage gyres using STK and MATLAB with orbit analysis and mission planning.",
    imageUrl: "/assets/space_systems_cover_photo.jpg",
    githubUrl: "https://github.com/nathansivalingam/space-systems-architecture-matlab",
  },
  {
    id: 6,
    title: "Gearbox Prototyping Project",
    description: "Engineered a gearbox and bridge system to safely transport the 'Hammer of Destiny' across a chasm.",
    imageUrl: "/assets/mech_design_one_cover_photo.jpg",
  },
];

const MEProj = () => {
  return (
    <div className="min-h-screen bg-white-100">
      <div className="container mx-auto px-6 xl:px-60 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start text-left font-medium text-gray-800 hover:shadow-lg transition-shadow duration-300 border border-gray-400 h-full"
            >
              {/* Image rectangle */}
              <div className="w-full h-24 bg-gray-200 rounded-md mb-3 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project title */}
              <h2 className="text-base font-semibold mb-1">{project.title}</h2>

              {/* Project description */}
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>

              {/* Icons: pushed to bottom */}
              <div className="flex space-x-3 mt-auto">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-800 hover:text-black text-lg" />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="text-gray-800 hover:text-black text-lg" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MEProj;
