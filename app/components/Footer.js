"use client";

import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // === NEW: Logic for "Back to Top" button visibility ===
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <>
      {/* === CHANGE: Redesigned Footer with Themed Background === */}
      <footer style={{ backgroundColor: 'var(--dark)' }} className="text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Branding */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-2">{portfolioData.name}</h3>
              <p style={{ color: 'var(--text-light)' }} className="mb-4">Full Stack Developer</p>
              <p style={{ color: 'var(--text-light)' }} className="max-w-sm">
                Passionate about building modern, scalable web applications that provide exceptional user experiences.
              </p>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="transition-colors duration-300 hover:underline" 
                      style={{ color: 'var(--text-light)' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center transition-all duration-300 hover:bg-opacity-20" style={{ color: 'var(--text-light)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={`mailto:${portfolioData.email}`} className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center transition-all duration-300 hover:bg-opacity-20" style={{ color: 'var(--text-light)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a href={`tel:${portfolioData.phone}`} className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center transition-all duration-300 hover:bg-opacity-20" style={{ color: 'var(--text-light)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </div>
               <p style={{ color: 'var(--text-light)' }}>
                <a href={`mailto:${portfolioData.email}`} className="hover:underline">{portfolioData.email}</a>
              </p>
            </div>
          </div>
          
          {/* === CHANGE: Themed Bottom Border === */}
          <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'var(--border)', color: 'var(--text-light)' }}>
            <p>&copy; {currentYear} {portfolioData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* === NEW: Back to Top Button === */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 gradient-bg text-white focus:outline-none"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;