import React from 'react';
import { skills } from '../data/mock';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#111827]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4 text-center">
            Skills & <span className="text-[#38FF62]">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-[#38FF62] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0B0F14] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#E5E7EB] text-xl">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#38FF62]/10 text-[#38FF62] border-[#38FF62]/20 hover:bg-[#38FF62]/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0B0F14] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#E5E7EB] text-xl">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#38FF62]/10 text-[#38FF62] border-[#38FF62]/20 hover:bg-[#38FF62]/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0B0F14] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#E5E7EB] text-xl">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#38FF62]/10 text-[#38FF62] border-[#38FF62]/20 hover:bg-[#38FF62]/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0B0F14] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#E5E7EB] text-xl">Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.automation.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#38FF62]/10 text-[#38FF62] border-[#38FF62]/20 hover:bg-[#38FF62]/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0B0F14] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-[#E5E7EB] text-xl">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#38FF62]/10 text-[#38FF62] border-[#38FF62]/20 hover:bg-[#38FF62]/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
