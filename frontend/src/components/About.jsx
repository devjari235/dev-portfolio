import React from 'react';
import { Code2, Lightbulb, Target } from 'lucide-react';
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
                I'm a full-stack web developer with hands-on experience in building real-world web applications using <span className="text-[#38FF62] font-medium">ASP.NET, C#, SQL Server, JavaScript, and Bootstrap</span>.
              </p>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
                I've worked on complete systems like <span className="text-[#E5E7EB] font-medium">Society Management Systems</span>, including modules for notices, polling, user management, payments, and dashboards.
              </p>
              <p className="text-[#9CA3AF] text-lg leading-relaxed">
                I enjoy creating clean, efficient, and user-friendly solutions, and I'm currently focused on <span className="text-[#38FF62] font-medium">automation tools, AI-based solutions, and scalable web apps</span> that help businesses save time and increase efficiency.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#38FF62]/10 p-3 rounded-lg">
                    <Code2 className="text-[#38FF62]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#E5E7EB] font-semibold mb-2">Clean Code</h3>
                    <p className="text-[#9CA3AF] text-sm">Writing maintainable and efficient code that follows best practices</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#38FF62]/10 p-3 rounded-lg">
                    <Target className="text-[#38FF62]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#E5E7EB] font-semibold mb-2">Problem Solver</h3>
                    <p className="text-[#9CA3AF] text-sm">Focused on building solutions that solve real-world business problems</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#38FF62]/10 p-3 rounded-lg">
                    <Lightbulb className="text-[#38FF62]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#E5E7EB] font-semibold mb-2">Innovation</h3>
                    <p className="text-[#9CA3AF] text-sm">Exploring AI automation and modern technologies to build smarter applications</p>
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
