"use client";

import { useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const Education = () => {
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
    <section id="education" className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text fade-in">Education</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mt-4 mb-12 fade-in">
          My academic background and educational journey.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-xl p-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="w-24 h-24 mx-auto md:mx-0 rounded-full gradient-bg flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{portfolioData.education.degree}</h3>
                  <h4 className="text-xl text-gray-700 dark:text-gray-300 mb-4">{portfolioData.education.institution}</h4>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500 mr-2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">{portfolioData.education.duration}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 text-gray-900 dark:text-white">Core Studies</h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Computer Science, Algorithms, Data Structures</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 11H3v10h6V11z"></path>
                          <path d="M15 3h6v18h-6V3z"></path>
                          <path d="M9 7h6v14H9V7z"></path>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 text-gray-900 dark:text-white">Achievements</h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Dean's List, Technical Competitions</p>
                      </div>
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

export default Education;