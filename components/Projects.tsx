
import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
           <div>
              <span className="text-brand-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Works</h2>
           </div>
           <a href="https://github.com/balu105" target="_blank" className="flex items-center gap-2 text-brand-lavender hover:text-white transition-colors group">
             View Github <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl overflow-hidden glass-card border-white/5 transition-all duration-300 hover:scale-[1.01]"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Spotlight Effect Overlay */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      />
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden border-b border-white/5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-500"></div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
           {project.tags?.map((tag: string, tIdx: number) => (
              <span key={tIdx} className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase text-brand-cyan-300">
                {tag}
              </span>
           ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-brand-lavender text-sm leading-relaxed mb-6">{project.description}</p>
        
        <div className="flex gap-4">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-cyan-500 hover:bg-brand-cyan-400 text-brand-dark font-bold rounded-xl transition-all shadow-lg shadow-brand-cyan-500/20"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl transition-all"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
