"use client";

import { useState, useEffect, useRef } from "react";
import portfolioData from "../data/portfolioData";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCvDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setCvDropdownOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-lg backdrop-blur-xl border-b"
          : "py-4 backdrop-blur-md"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--surface)" : "var(--header-bg)",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            AR
          </div>
          <div>
            <div className="text-xl font-bold gradient-text tracking-tight group-hover:opacity-90 transition-opacity">
              {portfolioData.name}
            </div>
            <div
              className="text-xs font-medium tracking-wide hidden sm:block"
              style={{ color: "var(--text-light)" }}
            >
              Full Stack • Zoho • AI
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:text-indigo-500 hover:bg-black/5 dark:hover:bg-white/5"
              style={{ color: "var(--text)" }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-3">
          {/* CV Download Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
              }}
              aria-expanded={cvDropdownOpen}
              aria-label="Download CV options"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  cvDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {cvDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-72 rounded-xl shadow-2xl p-2 border z-50 animate-fadeIn"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="px-3 py-2 text-xs font-semibold uppercase tracking-wider border-b mb-1"
                  style={{
                    color: "var(--text-light)",
                    borderColor: "var(--border)",
                  }}
                >
                  Select Curriculum Vitae
                </div>

                {/* Full Stack CV */}
                <a
                  href={portfolioData.cvs.fullStack.path}
                  download={portfolioData.cvs.fullStack.filename}
                  className="flex items-start gap-3 p-2.5 rounded-lg transition-colors hover:bg-indigo-500/10 group"
                  onClick={() => setCvDropdownOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div
                      className="text-sm font-semibold flex items-center justify-between"
                      style={{ color: "var(--text)" }}
                    >
                      <span>Full Stack Developer</span>
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-500">
                        PDF
                      </span>
                    </div>
                    <div
                      className="text-xs mt-0.5 line-clamp-1"
                      style={{ color: "var(--text-light)" }}
                    >
                      Backend, MERN, APIs, AI
                    </div>
                  </div>
                </a>

                {/* Zoho Developer CV */}
                <a
                  href={portfolioData.cvs.zoho.path}
                  download={portfolioData.cvs.zoho.filename}
                  className="flex items-start gap-3 p-2.5 rounded-lg transition-colors hover:bg-purple-500/10 group"
                  onClick={() => setCvDropdownOpen(false)}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div
                      className="text-sm font-semibold flex items-center justify-between"
                      style={{ color: "var(--text)" }}
                    >
                      <span>Zoho Developer</span>
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-500">
                        PDF
                      </span>
                    </div>
                    <div
                      className="text-xs mt-0.5 line-clamp-1"
                      style={{ color: "var(--text-light)" }}
                    >
                      CRM, Flow, Creator, MCP
                    </div>
                  </div>
                </a>

                <div
                  className="pt-1.5 mt-1 border-t text-center"
                  style={{ borderColor: "var(--border)" }}
                >
                  <a
                    href="#about"
                    onClick={() => {
                      setCvDropdownOpen(false);
                      scrollToSection("about");
                    }}
                    className="text-xs text-indigo-500 hover:underline font-medium"
                  >
                    Compare both CV profiles →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <div className="transform transition-transform hover:scale-105">
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg border focus:outline-none"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
              backgroundColor: "var(--surface)",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
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
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pt-4 pb-6 border-b shadow-xl space-y-2 animate-fadeIn"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-indigo-500/10 hover:text-indigo-500"
              style={{ color: "var(--text)" }}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile CV Download Buttons */}
          <div
            className="pt-3 mt-2 border-t space-y-2"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-wider px-2"
              style={{ color: "var(--text-light)" }}
            >
              Download CVs
            </div>
            <a
              href={portfolioData.cvs.fullStack.path}
              download={portfolioData.cvs.fullStack.filename}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold gradient-bg text-white shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              <span>Full Stack Developer CV</span>
              <span className="text-xs opacity-90">PDF ↓</span>
            </a>
            <a
              href={portfolioData.cvs.zoho.path}
              download={portfolioData.cvs.zoho.filename}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-white shadow-sm"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span>Zoho Developer CV</span>
              <span className="text-xs opacity-90">PDF ↓</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;