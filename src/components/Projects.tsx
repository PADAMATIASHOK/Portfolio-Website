import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce website',
      description: 'A comprehensive e-commerce web application built with modern web technologies. Features include product browsing, catalog management, shopping cart functionality, secure checkout, and order tracking.',

      technologies: ['HTML', 'CSS', 'JavaScript','Reactjs'],
      liveUrl: 'https://www.flipkart.com/',
      githubUrl: 'https://github.com/PADAMATIASHOK/E-commerce/tree/master',
      image: '/Screenshot%202025-06-28%20221619_page-0001.jpg',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies and optimized for performance.',
      technologies: ['Java','HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://github.com/PADAMATIASHOK/Portfolio-Website',
      githubUrl: 'https://github.com/PADAMATIASHOK/Portfolio-Website',
      image: '/Screenshot 2025-06-29 102216.png',
      featured: false
    },
    {
      title: 'Library-Management-System',
      description: 'A web-based Library Management System built using HTML, CSS, and JavaScript to manage books, users, and transactions efficiently.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: null,
      githubUrl: 'https://github.com/PADAMATIASHOK/Library-Management-System',
      image: '/Screenshot 2025-06-29 104747.png',
      featured: false
    },
   {
      title: 'StockManagementSystem',
      description: 'A console-based Stock Management System developed using Java to efficiently manage inventory, track stock levels, and handle product operations.',
      technologies: ['Core Java','Collection Frameworks'],
      liveUrl: null,
      githubUrl: 'https://github.com/PADAMATIASHOK/StockManagementSystem',
      image: '/Screenshot 2025-06-29 110919.png',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2 xl:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/PADAMATIASHOK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;