"use client";

import { useEffect, useState } from 'react';
import portfolioData from '../data/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData.projects);
  // === NEW: State for the modal ===
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(portfolioData.projects);
    } else {
      const filtered = portfolioData.projects.filter(project =>
        project.tech.some(tech => tech.toLowerCase().includes(activeFilter.toLowerCase()))
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  const filters = ['all', 'React', 'Node.js', 'MongoDB', 'API'];

  // === NEW: Function to close modal on 'Escape' key press ===
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedProject]);


  return (
    <>
      {/* === CHANGE: Use CSS variable for background === */}
      <section id="projects" className="section-padding transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container mx-auto px-6">
          <h2 className="section-title gradient-text fade-in">My Projects</h2>
          <p className="max-w-2xl mt-4 mb-12 fade-in" style={{ color: 'var(--text-light)' }}>
            Here are some of the projects I've worked on, showcasing my skills and experience.
          </p>
          
          {/* === CHANGE: Redesigned Filter Buttons === */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'gradient-bg text-white shadow-lg'
                    : 'card-hover'
                }`}
                style={{
                  backgroundColor: activeFilter === filter ? '' : 'var(--surface)',
                  color: activeFilter === filter ? '' : 'var(--text)',
                  border: activeFilter === filter ? '' : '1px solid var(--border)'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* === CHANGE: Redesigned Project Cards with onClick handler === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="card-shadow card-hover rounded-lg overflow-hidden cursor-pointer fade-in" 
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 relative" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>{project.name}</h3>
                  <p className="mb-4" style={{ color: 'var(--text-light)' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      // === CHANGE: Redesigned Tech Tags ===
                      <span key={techIndex} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'var(--background)', color: 'var(--text-light)', border: '1px solid var(--border)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p style={{ color: 'var(--text-light)' }}>No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* === NEW: Project Modal === */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl card-shadow"
            style={{ backgroundColor: 'var(--surface)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-300"
              style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}
              aria-label="Close project details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-6 md:p-8">
              {/* Modal Image */}
              <div className="h-64 md:h-80 rounded-lg mb-6" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}>
                 <div className="h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-50">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>
              </div>
              
              {/* Modal Content */}
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>{selectedProject.name}</h2>
              <p className="mb-6" style={{ color: 'var(--text-light)' }}>{selectedProject.longDescription || selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--background)', color: 'var(--text-light)', border: '1px solid var(--border)' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Modal Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                  View Live Project
                </a>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline text-center">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;