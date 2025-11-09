"use client";

import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = ()=> {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-500 ease-out ${
        scrolled ? 'shadow-xl backdrop-blur-xl border-b' : 'backdrop-blur-md'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--surface)' : 'var(--header-bg)',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className={`container mx-auto px-6 py-4 flex justify-between items-center transition-all duration-300 `}>
        {/* Enhanced Logo */}
        <div className={`relative group ${scrolled ? ' ': 'invisible'}`}>
          <div className="text-2xl md:text-3xl font-bold gradient-text tracking-tight cursor-pointer">
            {portfolioData.name}
          </div>
          <div 
            className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
            style={{ backgroundColor: 'var(--primary)' }}
          ></div>
        </div>
        
        {/* Desktop Navigation with enhanced effects */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
              style={{ 
                color: 'var(--text)',
                transitionDelay: `${index * 30}ms`
              }}
            >
              {/* Hover background effect */}
              <span 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  filter: 'blur(8px)',
                  opacity: 0.15
                }}
              ></span>
              
              {/* Button content */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--primary)]">
                {item}
              </span>
              
              {/* Animated underline */}
              <span 
                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 ease-out rounded-full"
                style={{ backgroundColor: 'var(--primary)' }}
              ></span>
            </button>
          ))}
        </nav>

        {/* Right side with Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <div className="transform transition-all duration-300 hover:scale-110 hover:rotate-12">
            <DarkModeToggle />
          </div>
          
          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center focus:outline-none rounded-xl group transition-all duration-300 hover:scale-105"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--text)' }}
          >
            {/* Hover background */}
            <span 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ 
                backgroundColor: 'var(--primary)',
                opacity: 0.1
              }}
            ></span>
            
            {/* Hamburger icon with smooth animation */}
            <span className="relative z-10 flex flex-col items-center justify-center w-6 h-6">
              <span className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`w-6 h-0.5 bg-current rounded-full my-1 transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}></span>
              <span className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ 
          backgroundColor: 'var(--surface)',
          borderTop: menuOpen ? '1px solid var(--border)' : 'none'
        }}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative text-left px-5 py-4 font-medium rounded-xl transition-all duration-300 hover:translate-x-2 group overflow-hidden"
              style={{ 
                color: 'var(--text)',
                transitionDelay: menuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {/* Sliding background effect */}
              <span 
                className="absolute inset-0 rounded-xl transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  opacity: 0.1
                }}
              ></span>
              
              {/* Content with animated dot */}
              <span className="relative z-10 flex items-center gap-3">
                <span 
                  className="inline-block w-0 h-0 group-hover:w-2 group-hover:h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ backgroundColor: 'var(--primary)' }}
                ></span>
                <span className="transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {item}
                </span>
              </span>
              
              {/* Right arrow indicator */}
              <span className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ stroke: 'var(--primary)' }}
                >
                  <path d="M6 3L11 8L6 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;