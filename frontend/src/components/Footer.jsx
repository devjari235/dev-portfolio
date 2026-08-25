import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { socialLinks } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] border-t border-[#1F2937] py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-[#38FF62] text-2xl font-bold mb-2">Dev Jariwala</h3>
              <p className="text-[#9CA3AF]">Software Developer | Full-Stack & AI Automation</p>
            </div>
            
            <div className="flex gap-6">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B0F14] border border-[#1F2937] p-3 rounded-lg hover:border-[#38FF62] transition-all duration-300 group"
              >
                <Github className="text-[#E5E7EB] group-hover:text-[#38FF62] transition-colors" size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B0F14] border border-[#1F2937] p-3 rounded-lg hover:border-[#38FF62] transition-all duration-300 group"
              >
                <Linkedin className="text-[#E5E7EB] group-hover:text-[#38FF62] transition-colors" size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B0F14] border border-[#1F2937] p-3 rounded-lg hover:border-[#38FF62] transition-all duration-300 group"
              >
                <Instagram className="text-[#E5E7EB] group-hover:text-[#38FF62] transition-colors" size={20} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="bg-[#0B0F14] border border-[#1F2937] p-3 rounded-lg hover:border-[#38FF62] transition-all duration-300 group"
              >
                <Mail className="text-[#E5E7EB] group-hover:text-[#38FF62] transition-colors" size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#1F2937] text-center">
            <p className="text-[#9CA3AF] text-sm">
              © {currentYear} Dev Jariwala. Built with React & FastAPI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
