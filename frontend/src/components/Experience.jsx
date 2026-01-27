import React from 'react';
import { workExperience } from '../data/mock';
import { Briefcase, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#111827]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4 text-center">
            Work <span className="text-[#38FF62]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[#38FF62] mx-auto mb-12"></div>
          
          <div className="space-y-6">
            {workExperience.map((exp) => (
              <Card
                key={exp.id}
                className="bg-[#0B0F14] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-[#E5E7EB] text-2xl mb-2">{exp.role}</CardTitle>
                      <div className="flex items-center gap-4 text-[#9CA3AF]">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-[#38FF62]" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-[#38FF62]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="px-4 py-2 bg-[#38FF62]/10 border border-[#38FF62]/20 text-[#38FF62] rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#9CA3AF]">
                        <span className="text-[#38FF62] mt-1">▸</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
