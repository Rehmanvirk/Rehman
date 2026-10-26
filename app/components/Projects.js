"use client";

import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";
import Image from "next/image";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(
    portfolioData.projects
  );
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
      const filtered = portfolioData.projects.filter(
        (project) => project.category === activeFilter
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Full Stack & Backend", value: "Full Stack & Backend" },
    { label: "Zoho & Integrations", value: "Zoho & Integrations" },
    { label: "AI & Automation", value: "AI & Automation" },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="projects"
        className="section-padding transition-colors duration-300"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
            <h2 className="section-title gradient-text inline-block">Featured Projects</h2>
            <p
              className="text-base sm:text-lg mt-4 leading-relaxed"
              style={{ color: "var(--text-light)" }}
            >
              Enterprise CRM engines, generative AI agent workflows, audio intelligence pipelines, and full-stack web platforms.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeFilter === filter.value
                      ? "gradient-bg text-white shadow-md scale-105"
                      : "border hover:border-indigo-500"
                  }`}
                  style={{
                    backgroundColor:
                      activeFilter === filter.value ? "" : "var(--surface)",
                    borderColor:
                      activeFilter === filter.value ? "" : "var(--border)",
                    color:
                      activeFilter === filter.value ? "white" : "var(--text)",
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id || index}
                className="card-shadow card-hover rounded-2xl overflow-hidden cursor-pointer border flex flex-col justify-between fade-in group"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  animationDelay: `${index * 0.08}s`,
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Banner */}
                <div className="h-52 relative overflow-hidden bg-black/5 dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/60 text-white border border-white/20">
                      {project.badge || project.category}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white/80 text-xs font-medium">
                      {project.subtitle}
                    </div>
                    <div className="text-white text-lg font-bold truncate">
                      {project.name}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p
                      className="text-sm leading-relaxed mb-4 line-clamp-3"
                      style={{ color: "var(--text-light)" }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.slice(0, 5).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium border"
                          style={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)",
                            color: "var(--text-light)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span
                          className="px-2 py-1 rounded-md text-xs font-semibold text-indigo-500 bg-indigo-500/10"
                        >
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom CTA trigger */}
                  <div
                    className="pt-4 border-t flex items-center justify-between text-xs font-semibold"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--primary)",
                    }}
                  >
                    <span>View Architecture & Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: "var(--text-light)" }}>
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl border"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md hover:scale-110 hover:bg-black/80 transition-all"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 sm:p-8">
              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    {selectedProject.category}
                  </span>
                  {selectedProject.badge && (
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold border"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-light)",
                      }}
                    >
                      {selectedProject.badge}
                    </span>
                  )}
                </div>

                <h2
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  {selectedProject.name}
                </h2>
                <div
                  className="text-sm sm:text-base font-semibold mt-1"
                  style={{ color: "var(--text-light)" }}
                >
                  {selectedProject.subtitle}
                </div>
              </div>

              {/* Long Description / Overview */}
              <div className="mb-6">
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-2 text-indigo-500"
                >
                  Project Overview & Architecture
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.features && (
                <div className="mb-6">
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-3 text-indigo-500"
                  >
                    Key Architecture & Deliverables
                  </h3>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <span className="w-5 h-5 rounded-md gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span style={{ color: "var(--text)" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-3 text-indigo-500"
                >
                  Technologies & Ecosystem
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                      style={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--border)",
                        color: "var(--text)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="pt-6 border-t flex flex-col sm:flex-row gap-3"
                style={{ borderColor: "var(--border)" }}
              >
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm shadow-md transition-all hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                    }}
                  >
                    <span>View Live Application</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:scale-105"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View Repository / Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
