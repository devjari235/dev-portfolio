import React from 'react';
import { projects } from '../data/mock';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0B0F14]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4 text-center">
            Featured <span className="text-[#38FF62]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#38FF62] mx-auto mb-4"></div>
          <p className="text-[#9CA3AF] text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development and problem-solving.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#E5E7EB] text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-[#9CA3AF] text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-[#38FF62]/10 text-[#38FF62] border-[#38FF62]/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#1F2937] text-[#E5E7EB] hover:bg-[#22C55E] hover:border-[#38FF62]"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {/* <Button
                    size="sm"
                    className="flex-1 bg-[#38FF62] text-[#0B0F14] hover:bg-[#2AE052]"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
