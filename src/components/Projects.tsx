"use client";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "JamboStays",
    description:
      "A property rental platform that allows users to browse, book, and manage stays easily. Built with a Flask backend and React frontend for a seamless experience.",
    technologies: ["React", "Flask", "SQLAlchemy", "Tailwind"],
    image: "/images/projects/jambostays1.png",
    github: "https://github.com/MichaelFuchaka/JamboStays",
    liveDemo: "https://jambo-stays1.vercel.app",
  },
  {
    id: 2,
    title: "Tumaini Tracker",
    description:
      "A financial tracking system for healthcare orgs to manage income, expenses, and visualize performance with interactive charts.",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    image: "/images/projects/tumaini1.png",
    github:
      "https://github.com/MichaelFuchaka/Capstone-Project-Tumaini-Health-System",
    liveDemo:
      "https://michaelfuchaka.github.io/Capstone-Project-Tumaini-Health-System/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          A selection of my favorite projects that showcase my skills in web
          development and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <a
                href={project.liveDemo || project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover cursor-pointer"
                />
              </a>

              <h3 className="text-xl font-bold text-white mt-4 px-6">
                {project.title}
              </h3>
              <p className="text-gray-400 px-6 mt-2 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 px-6 mt-4">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 p-6 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Restore "View more on GitHub" link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/michaelfuchaka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-lg"
          >
            View more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
