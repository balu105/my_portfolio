import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight, Sparkles, Star } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="section-container" id="projects">
      <div className="section-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
          <Star className="w-4 h-4" />
          Portfolio
        </div>
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <p className="section-subtitle">
          Showcasing innovative solutions that blend creativity with cutting-edge technology
        </p>
      </div>

      <div className="grid-responsive gap-8 mb-12">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
      
      <div className="text-center">
        <a href="https://github.com/balu105" target="_blank" className="btn-secondary inline-flex items-center gap-2 group">
          View All Projects
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
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
      className="group relative rounded-2xl overflow-hidden glass-card border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover-glow"
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      />
      
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
           {project.tags?.slice(0, 2).map((tag: string, tIdx: number) => (
              <span key={tIdx} className="px-3 py-1 glass-card text-xs font-bold text-brand-cyan-300 rounded-full">
                {tag}
              </span>
           ))}
        </div>
        
        {/* Project Number */}
        <div className="absolute top-4 right-4 w-8 h-8 glass-card rounded-full flex items-center justify-center text-xs font-bold text-brand-cyan-400">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-brand-lavender/70 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex gap-3">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-sm py-2 flex items-center justify-center gap-2"
          >
            <ExternalLink size={14} /> Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 glass-card border border-white/10 hover:border-brand-cyan-500/30 text-white rounded-full transition-all flex items-center justify-center"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;