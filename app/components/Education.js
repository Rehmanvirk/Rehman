"use client";

import { useEffect } from "react";
import portfolioData from "../data/portfolioData";

const Education = () => {
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

  return (
    <section
      id="education"
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="section-title gradient-text inline-block">Education</h2>
          <p
            className="text-base sm:text-lg mt-4 leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            Academic foundation in computer science, software engineering principles, and system design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in">
          <div
            className="card-shadow rounded-2xl border p-8 sm:p-12 relative overflow-hidden"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Academic Cap Icon */}
              <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>

              {/* Degree & Institution */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-2">
                  Graduated
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  {portfolioData.education.degree}
                </h3>

                <h4
                  className="text-base sm:text-lg font-semibold mt-1 mb-2"
                  style={{ color: "var(--text-light)" }}
                >
                  {portfolioData.education.institution}
                </h4>

                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-lg border"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <span>📅</span>
                  <span>{portfolioData.education.duration}</span>
                </div>

                <p
                  className="text-sm mt-4 leading-relaxed"
                  style={{ color: "var(--text-light)" }}
                >
                  {portfolioData.education.description}
                </p>

                {/* Core Disciplines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t"
                     style={{ borderColor: "var(--border)" }}>
                  <div
                    className="p-3.5 rounded-xl border text-left"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="font-bold text-sm mb-1" style={{ color: "var(--text)" }}>
                      Algorithms & Data Structures
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-light)" }}>
                      System complexity analysis, tree structures, graph traversal, and optimization.
                    </div>
                  </div>

                  <div
                    className="p-3.5 rounded-xl border text-left"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="font-bold text-sm mb-1" style={{ color: "var(--text)" }}>
                      Software Architecture
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-light)" }}>
                      Design patterns, distributed computing, database management, and web standards.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;