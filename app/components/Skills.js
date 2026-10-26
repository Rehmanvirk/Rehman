"use client";

import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

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

  const skillGroups = [
    {
      id: "backend",
      title: "Backend & Systems",
      badge: "Core Engineering",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: portfolioData.skills.backend,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "zoho",
      title: "Zoho Ecosystem & Deluge",
      badge: "CRM Architecture",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: portfolioData.skills.zoho,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: "ai",
      title: "AI, MCP & Autonomous Agents",
      badge: "Modern AI & Voice",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.23 5 7.41V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.59c2.93-1.18 5-4.05 5-7.41a8 8 0 0 0-8-8z"></path>
          <line x1="10" y1="22" x2="14" y2="22"></line>
        </svg>
      ),
      skills: portfolioData.skills.ai,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "integrations",
      title: "Enterprise Integrations",
      badge: "Two-Way Sync",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 3 21 3 21 8"></polyline>
          <line x1="4" y1="20" x2="21" y2="3"></line>
          <polyline points="21 16 21 21 16 21"></polyline>
          <line x1="15" y1="15" x2="21" y2="21"></line>
          <line x1="4" y1="4" x2="9" y2="9"></line>
        </svg>
      ),
      skills: portfolioData.skills.integrations,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "frontend",
      title: "Frontend & UI Engineering",
      badge: "Modern Web",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: portfolioData.skills.frontend,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: "tools",
      title: "Tools, DevOps & Databases",
      badge: "DevOps & Data",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: portfolioData.skills.tools,
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  const displayedGroups =
    activeTab === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeTab);

  const pillars = [
    {
      title: "Backend & Systems Architecture",
      desc: "Architecting high-throughput REST APIs, multi-tenant databases, JWT/RBAC security, and resilient webhook handlers with automatic retry mechanisms.",
      tag: "MERN Stack",
    },
    {
      title: "Deep Zoho Ecosystem Solutions",
      desc: "Delivering end-to-end Zoho CRM workflows, Deluge functions, CRM extensions, Creator widgets, Desk/Books configurations, and Oracle database bridges.",
      tag: "Zoho & Deluge",
    },
    {
      title: "Model Context Protocol (MCP) & AI Agents",
      desc: "Connecting enterprise tools to Claude & ChatGPT via MCP. Building autonomous AI agents for CRM schema manipulation and support ticket triage.",
      tag: "AI & Agents",
    },
    {
      title: "Voice Intelligence & Private LLMs",
      desc: "Developing Whisper speech-to-text audio pipelines that automatically summarize calls into CRM records, and hosting private Qwen2.5-3B models on client servers.",
      tag: "Whisper & Qwen",
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <h2 className="section-title gradient-text inline-block">Technical Expertise</h2>
          <p
            className="text-base sm:text-lg mt-4 leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            Specialized toolkit spanning full-stack backend development, the complete Zoho ecosystem, AI agent automation, and cross-platform integrations.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "all"
                  ? "gradient-bg text-white shadow-md scale-105"
                  : "border hover:border-indigo-500"
              }`}
              style={{
                backgroundColor: activeTab === "all" ? "" : "var(--surface)",
                borderColor: activeTab === "all" ? "" : "var(--border)",
                color: activeTab === "all" ? "white" : "var(--text)",
              }}
            >
              All Skills
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === group.id
                    ? "gradient-bg text-white shadow-md scale-105"
                    : "border hover:border-indigo-500"
                }`}
                style={{
                  backgroundColor: activeTab === group.id ? "" : "var(--surface)",
                  borderColor: activeTab === group.id ? "" : "var(--border)",
                  color: activeTab === group.id ? "white" : "var(--text)",
                }}
              >
                {group.title.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedGroups.map((group, idx) => (
            <div
              key={group.id}
              className="card-shadow card-hover rounded-2xl p-6 border flex flex-col justify-between fade-in"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                animationDelay: `${idx * 0.08}s`,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-white shadow-md`}
                  >
                    {group.icon}
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-light)",
                      backgroundColor: "var(--background)",
                    }}
                  >
                    {group.badge}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "var(--text)" }}
                >
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-transform hover:scale-105"
                      style={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--border)",
                        color: "var(--text)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Engineering Pillars */}
        <div
          className="rounded-2xl p-8 sm:p-12 border fade-in shadow-xl relative overflow-hidden"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
              Architectural Foundations
            </span>
            <h3
              className="text-2xl sm:text-3xl font-extrabold mt-1"
              style={{ color: "var(--text)" }}
            >
              Engineering Core Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-xl border flex flex-col justify-between transition-all hover:border-indigo-500"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4
                      className="text-lg font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      {pillar.title}
                    </h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500">
                      {pillar.tag}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-light)" }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;