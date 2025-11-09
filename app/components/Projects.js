"use client";

import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";
import Image from "next/image"; // Import Image

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(
    portfolioData.projects
  );
  // === NEW: State for the modal ===
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(portfolioData.projects);
    } else {
      const filtered = portfolioData.projects.filter((project) =>
        project.tech.some((tech) =>
          tech.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  const filters = ["all", "React", "Node.js", "MongoDB", "API"];

  // === NEW: Function to close modal on 'Escape' key press ===
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedProject]);

  return (
    <>
      {/* === CHANGE: Use CSS variable for background === */}
      <section
        id="projects"
        className="section-padding transition-colors duration-300"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title gradient-text fade-in">My Projects</h2>
          <p
            className="max-w-2xl mt-4 mb-12 fade-in"
            style={{ color: "var(--text-light)" }}
          >
            Here are some of the projects I've worked on, showcasing my skills
            and experience.
          </p>

          {/* === CHANGE: Redesigned Filter Buttons === */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "gradient-bg text-white shadow-lg"
                    : "card-hover"
                }`}
                style={{
                  backgroundColor:
                    activeFilter === filter ? "" : "var(--surface)",
                  color: activeFilter === filter ? "" : "var(--text)",
                  border:
                    activeFilter === filter ? "" : "1px solid var(--border)",
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
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className="h-48 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="">
                      <Image
                        src={project.image} // Use the image from data
                        alt={project.name}
                        width={800} // Add width
                        height={600} // Add height
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {project.name}
                  </h3>
                  <p className="mb-4" style={{ color: "var(--text-light)" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      // === CHANGE: Redesigned Tech Tags ===
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: "var(--background)",
                          color: "var(--text-light)",
                          border: "1px solid var(--border)",
                        }}
                      >
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
              <p style={{ color: "var(--text-light)" }}>
                No projects found with the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* === NEW: Project Modal === */}
        {/* === ENHANCED PROJECT MODAL === */}
{selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl animate-slideUp"
      style={{ backgroundColor: "var(--surface)" }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button - Redesigned */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-6 right-6 z-20 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:scale-110 group"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
        aria-label="Close project details"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
        {/* Hero Image Section */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
          
          <Image
            src={selectedProject.image}
            alt={selectedProject.name}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          
          {/* Floating Title Badge */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                {selectedProject.name}
              </h2>
              <p className="text-white/80 text-sm">
                {selectedProject.category || "Featured Project"}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Description */}
          <div className="mb-8">
            <h3
              className="text-xl font-semibold mb-3 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              About This Project
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-light)" }}
            >
              {selectedProject.longDescription || selectedProject.description}
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mb-8">
            <h3
              className="text-xl font-semibold mb-4 flex items-center gap-2"
              style={{ color: "var(--text)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    color: "white",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features (Optional - if you have this data) */}
          {selectedProject.features && (
            <div className="mb-8">
              <h3
                className="text-xl font-semibold mb-4 flex items-center gap-2"
                style={{ color: "var(--text)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Key Features
              </h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                    style={{ color: "var(--text-light)" }}
                  >
                    <span className="text-green-500 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group relative overflow-hidden rounded-lg px-6 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                View Live Demo
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group rounded-lg px-6 py-3.5 text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--text)",
                border: "2px solid var(--border)",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default Projects;
