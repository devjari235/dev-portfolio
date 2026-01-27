import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111827]/95 backdrop-blur-sm border-b border-[#1F2937]' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#38FF62] text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            DEV
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-sm font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-sm font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-sm font-medium"
            >
              Experience
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#38FF62] text-[#0B0F14] hover:bg-[#2AE052] font-medium"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#E5E7EB] hover:text-[#38FF62] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#1F2937] pt-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[#E5E7EB] hover:text-[#38FF62] transition-colors text-left"
            >
              Experience
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#38FF62] text-[#0B0F14] hover:bg-[#2AE052] w-full"
            >
              Contact
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
