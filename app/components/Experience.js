"use client";

import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";

const Experience = () => {
  const [selectedArea, setSelectedArea] = useState(0);

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

  const exp = portfolioData.experience[0];

  return (
    <section
      id="experience"
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="section-title gradient-text inline-block">Work Experience</h2>
          <p
            className="text-base sm:text-lg mt-4 leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            Delivering high-impact enterprise backends, Zoho ecosystem workflows, and AI automation in production.
          </p>
        </div>

        {/* Featured Experience Card */}
        <div className="max-w-5xl mx-auto fade-in">
          <div
            className="card-shadow rounded-2xl border p-6 sm:p-10 relative overflow-hidden"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b mb-8"
                 style={{ borderColor: "var(--border)" }}>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Current Position
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-light)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  {exp.position}
                </h3>

                <div
                  className="text-base sm:text-lg font-semibold mt-1 flex items-center gap-2"
                  style={{ color: "var(--text-light)" }}
                >
                  <span className="gradient-text font-bold">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Duration badge */}
              <div
                className="self-start lg:self-center px-4 py-2 rounded-xl border text-sm font-bold shadow-sm"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                📅 {exp.duration}
              </div>
            </div>

            {/* Role Summary */}
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text)" }}
            >
              {exp.description}
            </p>

            {/* Interactive Domain Tabs */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider mb-3 text-indigo-500">
                Explore Core Focus Areas & Deliverables
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.areas.map((area, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedArea(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      selectedArea === idx
                        ? "gradient-bg text-white shadow-md scale-105"
                        : "border hover:border-indigo-500"
                    }`}
                    style={{
                      backgroundColor:
                        selectedArea === idx ? "" : "var(--background)",
                      borderColor:
                        selectedArea === idx ? "" : "var(--border)",
                      color: selectedArea === idx ? "white" : "var(--text)",
                    }}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Details Box */}
            <div
              className="p-6 sm:p-8 rounded-xl border transition-all"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <h4
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text)" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span>{exp.areas[selectedArea].title}</span>
              </h4>

              <ul className="space-y-3.5">
                {exp.areas[selectedArea].points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-md gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 shadow-sm">
                      ✓
                    </span>
                    <span
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: "var(--text)" }}
                    >
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* All Pillars Quick Summary Grid */}
            <div className="mt-8 pt-8 border-t grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                 style={{ borderColor: "var(--border)" }}>
              <div
                className="p-4 rounded-xl border text-xs"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
              >
                <div className="font-bold text-sm mb-1" style={{ color: "var(--text)" }}>
                  Agent Desk CRM
                </div>
                Architected MERN backend with live Zoho CRM synchronization, secure JWT & RBAC.
              </div>

              <div
                className="p-4 rounded-xl border text-xs"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
              >
                <div className="font-bold text-sm mb-1" style={{ color: "var(--text)" }}>
                  Zoho MCP + Claude AI
                </div>
                Pioneered Model Context Protocol server enabling LLMs to build CRM schemas & triage tickets.
              </div>

              <div
                className="p-4 rounded-xl border text-xs"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
              >
                <div className="font-bold text-sm mb-1" style={{ color: "var(--text)" }}>
                  Oracle ⇄ Zoho Two-Way Sync
                </div>
                Built real-time bidirectional data exchange eliminating manual cross-department entry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;