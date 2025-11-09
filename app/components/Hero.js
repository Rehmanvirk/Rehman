"use client";

import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";
import Image from "next/image"; // Import Image

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;

  const phrases = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "Problem Solver",
    "Creative Thinker",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index];

      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));

        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, typingSpeed, phrases]);

  return (
    // === CHANGE: Use CSS variable for background ===
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* === CHANGE: Dynamic blobs using theme colors === */}
        <div
          className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ backgroundColor: "rgba(139, 92, 246, 0.4)" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          style={{ backgroundColor: "rgba(236, 72, 153, 0.4)" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          style={{ backgroundColor: "rgba(99, 102, 241, 0.4)" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* === CHANGE: Use CSS variables for text colors === */}
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">{portfolioData.name}</span>
            </h1>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: "var(--text-light)" }}
            >
              {text}
              <span className="animate-pulse">|</span>
            </h2>
            <p
              className="text-lg mb-8 max-w-lg"
              style={{ color: "var(--text-light)" }}
            >
              {portfolioData.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </div>
            {/* === CHANGE: Use CSS variables for social links === */}
            <div className="flex mt-8 space-x-6">
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: "var(--text-light)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-light)")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="transition-colors duration-300"
                style={{ color: "var(--text-light)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-light)")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a
                href={`tel:${portfolioData.phone}`}
                className="transition-colors duration-300"
                style={{ color: "var(--text-light)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-light)")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full gradient-bg opacity-20 absolute -top-6 -left-6"></div>
              {/* === CHANGE: Use CSS variables for border and shadow === */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl relative z-10">
                <Image
                  src="/images/profile.jpeg"
                  alt={portfolioData.name}
                  width={800} // Add width
                  height={800} // Add height
                  className="w-full h-full object-cover"
                  priority // Add priority for above-the-fold images
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
