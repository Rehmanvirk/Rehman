"use client";

import { useState, useEffect } from "react";
import portfolioData from "../data/portfolioData";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer
        className="pt-16 pb-12 border-t transition-colors duration-300"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: "var(--border)" }}>
            {/* Column 1: Brand & Bio */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-bold shadow-md">
                  AR
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  {portfolioData.name}
                </h3>
              </div>
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--text)" }}
              >
                {portfolioData.title}
              </p>
              <p
                className="text-xs sm:text-sm leading-relaxed max-w-sm mb-6"
                style={{ color: "var(--text-light)" }}
              >
                Specialized in building robust MERN backends, complete Zoho ecosystem integrations, and autonomous AI & speech-to-text pipelines.
              </p>

              {/* Social icons */}
              <div className="flex items-center space-x-3">
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl border flex items-center justify-center transition-all hover:scale-110 hover:text-indigo-500 shadow-sm"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href={`mailto:${portfolioData.email}`}
                  aria-label="Email"
                  className="w-9 h-9 rounded-xl border flex items-center justify-center transition-all hover:scale-110 hover:text-indigo-500 shadow-sm"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>

                <a
                  href={`tel:${portfolioData.phone}`}
                  aria-label="Phone"
                  className="w-9 h-9 rounded-xl border flex items-center justify-center transition-all hover:scale-110 hover:text-indigo-500 shadow-sm"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3">
              <h4
                className="text-sm font-bold uppercase tracking-wider mb-4"
                style={{ color: "var(--text)" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-indigo-500"
                      style={{ color: "var(--text-light)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resumes & Resources */}
            <div className="md:col-span-4">
              <h4
                className="text-sm font-bold uppercase tracking-wider mb-4"
                style={{ color: "var(--text)" }}
              >
                Download Updated CVs
              </h4>
              <div className="space-y-3">
                <a
                  href={portfolioData.cvs.fullStack.path}
                  download={portfolioData.cvs.fullStack.filename}
                  className="flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all hover:scale-102 hover:border-indigo-500"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-500 font-bold">📄</span>
                    <span>Full Stack Developer CV</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded">
                    PDF
                  </span>
                </a>

                <a
                  href={portfolioData.cvs.zoho.path}
                  download={portfolioData.cvs.zoho.filename}
                  className="flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all hover:scale-102 hover:border-purple-500"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 font-bold">⚡</span>
                    <span>Zoho Developer CV</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded">
                    PDF
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--text-light)" }}>
            <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
            <p>Designed & Developed with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full shadow-2xl gradient-bg text-white hover:scale-110 active:scale-95 transition-all focus:outline-none"
          aria-label="Scroll back to top"
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
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;