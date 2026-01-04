import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
           <div>
              <span className="text-brand-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 block drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">Featured Projects</h2>
           </div>
           <a href="https://github.com/balu105" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-lavender hover:text-brand-cyan-400 transition-colors text-sm font-bold group">
             View All Works <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="group glass-card rounded-3xl overflow-hidden hover:border-brand-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-cyan-400 shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative">
                 <div className="absolute top-0 right-8 -translate-y-1/2 flex gap-3 z-20">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-brand-dark border border-white/10 rounded-full flex items-center justify-center text-white hover:text-brand-cyan-400 hover:border-brand-cyan-500 transition-all hover:scale-110 shadow-lg hover:shadow-brand-cyan-500/20"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-brand-cyan-500 border border-brand-cyan-400 rounded-full flex items-center justify-center text-brand-dark hover:bg-white hover:text-brand-dark transition-all hover:scale-110 shadow-lg hover:shadow-white/50 font-bold"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                 </div>

                 <h3 className="text-2xl font-bold text-white mb-3 mt-2 leading-tight group-hover:text-brand-cyan-100 transition-colors">{project.title}</h3>
                 <p className="text-brand-lavender/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                   {project.description}
                 </p>
                 
                 <div className="w-full h-px bg-white/5 group-hover:bg-brand-cyan-500/30 transition-colors mt-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;