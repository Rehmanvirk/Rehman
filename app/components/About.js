"use client";

import { useEffect } from "react";
import portfolioData from "../data/portfolioData";
import Image from "next/image";

const About = () => {
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
      id="about"
      className="section-padding transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="section-title gradient-text inline-block">About Me</h2>
          <p
            className="text-base sm:text-lg mt-4 leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            Engineering robust backends, architecting enterprise Zoho solutions, and delivering end-to-end AI automation.
          </p>
        </div>

        {/* Narrative & Photo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Photo & Badge */}
          <div className="lg:col-span-5 fade-in">
            <div className="relative mx-auto max-w-md">
              <div
                className="w-full h-96 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <Image
                  src="/images/about.jpeg"
                  alt={portfolioData.name}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative accent card */}
              <div
                className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-xl border hidden sm:block backdrop-blur-md"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold" style={{ color: "var(--text-light)" }}>
                      Experience
                    </div>
                    <div className="text-sm font-bold" style={{ color: "var(--text)" }}>
                      1+ Year Professional
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Narrative & Core Focus */}
          <div className="lg:col-span-7 fade-in">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              Dual Specialization: Full Stack Engineering & Zoho Ecosystem
            </h3>

            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--text-light)" }}
            >
              {portfolioData.about.summary}
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-light)" }}
            >
              {portfolioData.about.secondary}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {portfolioData.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border text-center transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "var(--text-light)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Details Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div
                className="p-3 rounded-lg border flex items-center gap-3"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <span className="text-indigo-500 font-bold">📍</span>
                <span className="truncate">{portfolioData.location}</span>
              </div>

              <div
                className="p-3 rounded-lg border flex items-center gap-3"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <span className="text-indigo-500 font-bold">✉️</span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="truncate hover:underline hover:text-indigo-500"
                >
                  {portfolioData.email}
                </a>
              </div>

              <div
                className="p-3 rounded-lg border flex items-center gap-3"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <span className="text-indigo-500 font-bold">📞</span>
                <a
                  href={`tel:${portfolioData.phone}`}
                  className="truncate hover:underline hover:text-indigo-500"
                >
                  {portfolioData.phone}
                </a>
              </div>

              <div
                className="p-3 rounded-lg border flex items-center gap-3"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <span className="text-indigo-500 font-bold">🌐</span>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate hover:underline hover:text-indigo-500"
                >
                  linkedin.com/in/rehman318
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED CVS SECTION */}
        <div className="mt-8 fade-in">
          <div className="text-center mb-8">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--text)" }}
            >
              Curriculum Vitae Downloads
            </h3>
            <p className="text-sm" style={{ color: "var(--text-light)" }}>
              Download or view the tailored CV that matches your hiring or project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Full Stack CV Card */}
            <div
              className="card-shadow card-hover rounded-2xl p-6 sm:p-8 border relative overflow-hidden flex flex-col justify-between"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    Full Stack Profile
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--text-light)" }}
                  >
                    PDF (101 KB)
                  </span>
                </div>

                <h4
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {portfolioData.cvs.fullStack.name}
                </h4>
                <div
                  className="text-sm font-semibold mb-3 text-indigo-500"
                >
                  {portfolioData.cvs.fullStack.role}
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-light)" }}
                >
                  {portfolioData.cvs.fullStack.description}
                </p>

                <div className="space-y-2 mb-6 text-xs" style={{ color: "var(--text-light)" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> MERN Stack, Node.js, Express, MongoDB
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> REST APIs, Webhook architecture, JWT & RBAC
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> Google Drive & Dropbox API integrations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> Self-hosted LLM (Qwen2.5) & Whisper pipelines
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <a
                  href={portfolioData.cvs.fullStack.path}
                  download={portfolioData.cvs.fullStack.filename}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white text-sm shadow-md transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download CV</span>
                </a>

                <a
                  href={portfolioData.cvs.fullStack.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl font-semibold text-sm border transition-all hover:scale-105"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                    backgroundColor: "var(--background)",
                  }}
                >
                  Preview
                </a>
              </div>
            </div>

            {/* Zoho Developer CV Card */}
            <div
              className="card-shadow card-hover rounded-2xl p-6 sm:p-8 border relative overflow-hidden flex flex-col justify-between"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none"
                style={{ backgroundColor: "var(--accent)" }}
              ></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    Zoho & CRM Profile
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--text-light)" }}
                  >
                    PDF (99 KB)
                  </span>
                </div>

                <h4
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {portfolioData.cvs.zoho.name}
                </h4>
                <div
                  className="text-sm font-semibold mb-3 text-purple-500"
                >
                  {portfolioData.cvs.zoho.role}
                </div>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-light)" }}
                >
                  {portfolioData.cvs.zoho.description}
                </p>

                <div className="space-y-2 mb-6 text-xs" style={{ color: "var(--text-light)" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Zoho CRM, Flow, Creator & Deluge Scripting
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Zoho MCP (Model Context Protocol) with Claude
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Two-way Oracle ERP/Database integration
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Desk, Books, Catalyst, SalesIQ, Analytics
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <a
                  href={portfolioData.cvs.zoho.path}
                  download={portfolioData.cvs.zoho.filename}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white text-sm shadow-md transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download CV</span>
                </a>

                <a
                  href={portfolioData.cvs.zoho.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl font-semibold text-sm border transition-all hover:scale-105"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                    backgroundColor: "var(--background)",
                  }}
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
