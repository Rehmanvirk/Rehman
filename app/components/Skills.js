"use client";

import { useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const Skills = () => {
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

  const skillsCategories = [
    { title: 'Frontend', skills: portfolioData.skills.frontend },
    { title: 'Backend', skills: portfolioData.skills.backend },
    { title: 'Integrations', skills: portfolioData.skills.integrations },
    { title: 'Tools', skills: portfolioData.skills.tools },
    { title: 'Soft Skills', skills: portfolioData.skills.soft }
  ];

  const expertisePoints = [
    { title: 'Full Stack Development', description: 'Building end-to-end web applications using MERN stack with a focus on performance, scalability, and user experience.', icon: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' }, // Shield icon
    { title: 'API Integration', description: 'Integrating third-party services like Zoho CRM and Google Drive APIs to automate workflows and enhance functionality.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' }, // Lightning bolt icon
    { title: 'Responsive Design', description: 'Creating responsive and visually appealing interfaces using Tailwind CSS and modern design principles.', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }, // Screen icon
    { title: 'Problem Solving', description: 'Analyzing complex problems and developing innovative solutions with a focus on efficiency and maintainability.', icon: 'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z' } // Calendar/brainstorm icon
  ];

  return (
    // === CHANGE: Use CSS variable for background ===
    <section id="skills" className="section-padding transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text fade-in">My Skills</h2>
        <p className="max-w-2xl mt-4 mb-12 fade-in" style={{ color: 'var(--text-light)' }}>
          I've worked with a variety of technologies and tools to build scalable and efficient web applications.
        </p>
        
        {/* === CHANGE: Redesigned Skill Category Cards === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillsCategories.map((category, index) => (
            <div key={index} className="card-shadow card-hover rounded-lg p-6 fade-in" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  // === CHANGE: Redesigned Skill Tags ===
                  <span key={skillIndex} className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--background)', color: 'var(--text)', border: '1px solid var(--border)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* === CHANGE: Redesigned "My Expertise" Section === */}
        <div className="rounded-xl p-8 md:p-12 fade-in" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)', border: '1px solid var(--border)' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text)' }}>My Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertisePoints.map((point, index) => (
              <div key={index} className="flex items-start">
                 <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                    <path d={point.icon}></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg" style={{ color: 'var(--text)' }}>{point.title}</h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    {point.description}
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