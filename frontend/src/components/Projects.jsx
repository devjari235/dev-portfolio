import React from 'react';
import { projects } from '../data/mock';
import { Github, FileSearch, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

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
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, AI automation, and problem-solving.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-[#111827] border-[#1F2937] hover:border-[#38FF62] transition-all duration-300 group overflow-hidden flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60"></div>
                  {project.type === 'case-study' && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#0B0F14]/80 border border-[#38FF62]/40 text-[#38FF62] text-xs font-medium rounded-full">
                      Real Client Project
                    </span>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#E5E7EB] text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
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
                  {project.type === 'case-study' ? (
                    <>
                      <Dialog>
                        <DialogContent className="bg-[#111827] border-[#1F2937] text-[#E5E7EB] max-w-2xl max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-[#E5E7EB] text-2xl">{project.title}</DialogTitle>
                            <DialogDescription className="text-[#9CA3AF]">
                              {project.caseStudy.client}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-5 mt-2">
                            <div>
                              <h4 className="text-[#38FF62] font-semibold mb-1">Problem</h4>
                              <p className="text-[#9CA3AF] text-sm">{project.caseStudy.problem}</p>
                            </div>
                            <div>
                              <h4 className="text-[#38FF62] font-semibold mb-1">Solution</h4>
                              <p className="text-[#9CA3AF] text-sm">{project.caseStudy.solution}</p>
                            </div>
                            <div>
                              <h4 className="text-[#38FF62] font-semibold mb-1">Workflow</h4>
                              <p className="text-[#E5E7EB] text-sm bg-[#0B0F14] border border-[#1F2937] rounded-lg px-4 py-3">
                                {project.caseStudy.workflow}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-[#38FF62] font-semibold mb-2">Features</h4>
                              <ul className="space-y-2">
                                {project.caseStudy.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2 text-[#9CA3AF] text-sm">
                                    <ArrowRight size={14} className="text-[#38FF62] mt-1 shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-[#38FF62] font-semibold mb-1">Technologies</h4>
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
                            </div>

                            {project.dashboardGithub && (
                              <Button
                                className="w-full bg-[#38FF62] text-[#0B0F14] hover:bg-[#2AE052]"
                                onClick={() => window.open(project.dashboardGithub, '_blank')}
                              >
                                <Github size={16} className="mr-2" />
                                Dashboard GitHub
                              </Button>
                            )}
                          </div>
                        </DialogContent>

                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="flex-1 bg-[#38FF62] text-[#0B0F14] hover:bg-[#2AE052]"
                          >
                            <FileSearch size={16} className="mr-2" />
                            View Case Study
                          </Button>
                        </DialogTrigger>
                      </Dialog>

                      {project.dashboardGithub && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-[#1F2937] text-[#E5E7EB] hover:bg-[#22C55E] hover:border-[#38FF62]"
                          onClick={() => window.open(project.dashboardGithub, '_blank')}
                        >
                          <Github size={16} className="mr-2" />
                          Dashboard
                        </Button>
                      )}
                    </>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#1F2937] text-[#E5E7EB] hover:bg-[#22C55E] hover:border-[#38FF62]"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
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
