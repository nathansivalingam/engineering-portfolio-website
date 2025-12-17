import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Park Pilot",
    description: "Developed a smart vehicle parking management system optimising allocation and reducing emissions using shortest-path algorithms and real-time tracking.",
    imageUrl: "/assets/park_pilot_cover_photo.jpg",
    githubUrl: "https://github.com/unsw-cse-comp99-3900/capstone-project-25t3-3900-f11a-date",
    liveUrl: "https://www.canva.com/design/DAG47rtPX2Y/KZO_t03h0zF30UK6Dr7bSQ/view?utm_content=DAG47rtPX2Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4698e317a6"
  },
  {
    id: 2,
    title: "Engineering Portfolio Website",
    description: "Created this engineering portfolio website to showcase projects, currently used to highlight ongoing and completed engineering work.",
    imageUrl: "/assets/engineering_portfolio_cover_photo.png",
    githubUrl: "https://github.com/nathansivalingam/engineering-portfolio-website",
  },
  {
    id: 3,
    title: "Personalised Website",
    description: "Built an interactive personal website with mini-games and an accessible, visually engaging user interface, currently live for public online use.",
    imageUrl: "/assets/personal_website_cover_photo.png",
    githubUrl: "https://github.com/nathansivalingam/personal-website",
    liveUrl: "https://nathan-personal-website.vercel.app/",
  },
];

const CSProj = () => {
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

export default CSProj;
