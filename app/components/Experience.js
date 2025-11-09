"use client";

import { useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    // === CHANGE: Use CSS variable for background ===
    <section id="experience" className="section-padding transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text fade-in">Work Experience</h2>
        <p className="max-w-2xl mt-4 mb-12 fade-in" style={{ color: 'var(--text-light)' }}>
          My professional journey and the roles I've taken on to grow as a developer.
        </p>
        
        <div className="relative">
          {/* === CHANGE: Themed Timeline Line === */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5" style={{ background: 'linear-gradient(to bottom, var(--primary), var(--secondary))' }}></div>
          
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              {/* === CHANGE: Themed Timeline Dot === */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 z-10" style={{ borderColor: 'var(--background)' }}></div>
              
              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                {/* === CHANGE: Enhanced Card with Shadow and Border === */}
                <div className="card-shadow card-hover rounded-lg p-6" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    {/* === CHANGE: Use CSS variable for text color === */}
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{exp.position}</h3>
                    <span className="text-sm mt-1 sm:mt-0" style={{ color: 'var(--text-light)' }}>{exp.duration}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21v-4a4 4 0 0 1 4-4h5"></path>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      {/* === CHANGE: Use CSS variables for text color === */}
                      <h4 className="font-semibold" style={{ color: 'var(--text)' }}>{exp.company}</h4>
                      <p className="text-sm" style={{ color: 'var(--text-light)' }}>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        {/* === CHANGE: Use CSS variable for icon color === */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {/* === CHANGE: Use CSS variable for text color === */}
                        <span style={{ color: 'var(--text-light)' }}>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;