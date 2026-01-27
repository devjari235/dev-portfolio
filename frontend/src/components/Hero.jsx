import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-[#0B0F14]/85"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fadeIn">
            <span className="inline-block px-4 py-2 bg-[#111827] border border-[#1F2937] rounded-full text-[#38FF62] text-sm font-medium mb-6">
              Full-Stack Web Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#E5E7EB] mb-6 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-[#38FF62]">Dev Jariwala</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#9CA3AF] mb-12 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            I build smart web applications and automation tools that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={scrollToProjects}
              className="bg-[#38FF62] text-[#0B0F14] hover:bg-[#2AE052] px-8 py-6 text-lg font-medium"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-[#1F2937] text-[#E5E7EB] hover:bg-[#22C55E] px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-[#38FF62]" size={32} />
      </div>
    </section>
  );
};

export default Hero;
