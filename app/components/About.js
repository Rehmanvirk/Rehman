"use client";

import { useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const About = () => {
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
    <section id="about" className="section-padding transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text fade-in">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-16">
          <div className="md:w-1/3 fade-in">
            <div className="relative">
              {/* === CHANGE: Use improved card-shadow and add a border === */}
              <div className="w-full h-80 rounded-lg overflow-hidden card-shadow" style={{ border: '2px solid var(--surface)' }}>
                <image
                  src="https://picsum.photos/seed/abdulrehman2/600/800.jpg" 
                  alt={portfolioData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg gradient-bg opacity-80"></div>
            </div>
          </div>
          
          <div className="md:w-2/3 fade-in">
            {/* === CHANGE: Use CSS variables for text colors === */}
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>Who I Am</h3>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-light)' }}>
              {portfolioData.about}
            </p>
            
            {/* === CHANGE: Restructured info items into cards === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card-shadow rounded-lg p-4" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Location</h4>
                    <p style={{ color: 'var(--text-light)' }}>{portfolioData.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="card-shadow rounded-lg p-4" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Email</h4>
                    <p style={{ color: 'var(--text-light)' }}>{portfolioData.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="card-shadow rounded-lg p-4" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Phone</h4>
                    <p style={{ color: 'var(--text-light)' }}>{portfolioData.phone}</p>
                  </div>
                </div>
              </div>
              
              <div className="card-shadow rounded-lg p-4" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Website</h4>
                    <p style={{ color: 'var(--text-light)' }}>{portfolioData.website}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;