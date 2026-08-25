import React from 'react';
import { Layers, Bot, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0F14]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4 text-center">
            About <span className="text-[#38FF62]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#38FF62] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
                I'm an <span className="text-[#38FF62] font-medium">MSc IT</span> student and software developer with hands-on experience building full-stack web applications and AI-powered automation systems.
              </p>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
                I've worked with technologies including <span className="text-[#E5E7EB] font-medium">ASP.NET, React.js, Node.js, Java, PHP, MongoDB, MySQL, n8n, OpenAI API</span> and WhatsApp APIs. My projects range from enterprise-style management systems to AI-powered customer and appointment automation.
              </p>
              <p className="text-[#9CA3AF] text-lg leading-relaxed">
                Through <span className="text-[#38FF62] font-medium">Fixera Automation</span>, I've also worked on real-world AI solutions, including a live WhatsApp product recommendation system for Kiyara Botanics and AI appointment-booking workflows.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#38FF62]/10 p-3 rounded-lg">
                    <Layers className="text-[#38FF62]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#E5E7EB] font-semibold mb-2">Full-Stack Development</h3>
                    <p className="text-[#9CA3AF] text-sm">Building applications across frontend, backend and databases</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#38FF62]/10 p-3 rounded-lg">
                    <Bot className="text-[#38FF62]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#E5E7EB] font-semibold mb-2">AI & Automation</h3>
                    <p className="text-[#9CA3AF] text-sm">Building AI agents and automated workflows using APIs and n8n</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#38FF62]/10 p-3 rounded-lg">
                    <Briefcase className="text-[#38FF62]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#E5E7EB] font-semibold mb-2">Real-World Solutions</h3>
                    <p className="text-[#9CA3AF] text-sm">Developing practical software for business workflows and client requirements</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
