"use client";

import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";
import Image from "next/image";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 40 : 80;

  const phrases = portfolioData.roles;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index % phrases.length];

      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1800);
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-10 -left-10 w-96 h-96 rounded-full filter blur-3xl opacity-30 animate-pulse"
          style={{ backgroundColor: "var(--primary)" }}
        ></div>
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 rounded-full filter blur-3xl opacity-25 animate-pulse"
          style={{ backgroundColor: "var(--accent)" }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{ backgroundColor: "var(--secondary)" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Intro & Call-to-actions */}
          <div className="lg:w-7/12 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 shadow-sm text-xs font-semibold"
                 style={{
                   backgroundColor: "var(--surface)",
                   borderColor: "var(--border)",
                   color: "var(--text)"
                 }}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5"></span>
              <span>Available for Full-Time Roles & Consulting</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
              style={{ color: "var(--text)" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">{portfolioData.name}</span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="min-h-[2.5rem] sm:min-h-[3rem] mb-4 flex items-center justify-center lg:justify-start">
              <span
                className="text-xl sm:text-2xl lg:text-3xl font-semibold"
                style={{ color: "var(--text-light)" }}
              >
                {text}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-indigo-500 animate-pulse"></span>
            </div>

            <p
              className="text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "var(--text-light)" }}
            >
              {portfolioData.tagline}
            </p>

            {/* Pill Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                ⚡ MERN & REST APIs
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                🏢 Zoho CRM, Flow & Deluge
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20">
                🤖 Zoho MCP, Claude & Whisper
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                🔄 Oracle Two-Way Sync
              </span>
            </div>

            {/* Action Buttons: Dual CV Download + Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-8">
              {/* Download Full Stack CV */}
              <a
                href={portfolioData.cvs.fullStack.path}
                download={portfolioData.cvs.fullStack.filename}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 group"
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                }}
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Full Stack CV</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">PDF</span>
              </a>

              {/* Download Zoho CV */}
              <a
                href={portfolioData.cvs.zoho.path}
                download={portfolioData.cvs.zoho.filename}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 group"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                }}
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Zoho Developer CV</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">PDF</span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                  color: "var(--text)",
                }}
              >
                <span>View Projects</span>
                <span>→</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center justify-center lg:justify-start space-x-5">
              {/* LinkedIn */}
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 hover:text-indigo-500 shadow-sm"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${portfolioData.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 hover:text-indigo-500 shadow-sm"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.phone}`}
                aria-label="Call Phone"
                className="p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 hover:text-indigo-500 shadow-sm"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>

              {/* Location Badge */}
              <div
                className="hidden sm:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{portfolioData.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Visual */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative">
              {/* Outer decorative gradient glow */}
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl absolute -top-4 -left-4 filter blur-2xl opacity-40 animate-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)",
                }}
              ></div>

              {/* Image Frame Card */}
              <div
                className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden p-2 shadow-2xl border"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/profile.jpeg"
                    alt={portfolioData.name}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  {/* Subtle bottom gradient on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Floating role badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/40 border border-white/20 p-3 rounded-xl text-white">
                    <div className="text-xs uppercase font-bold tracking-wider text-indigo-300">
                      Specialized In
                    </div>
                    <div className="text-sm font-semibold truncate">
                      Full Stack • Zoho MCP • Enterprise APIs
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

export default Hero;
