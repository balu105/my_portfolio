import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight, Star, Code, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="section-container" id="projects">
      <div className="section-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
          <Code className="w-4 h-4" />
          Technical Portfolio
        </div>
        <h2 className="section-title">
          Featured <span className="text-gradient">Development Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications demonstrating full-stack development, AI/ML implementation, 
          and problem-solving capabilities with measurable impact.
        </p>
      </div>

      <div className="grid-responsive gap-8 mb-12">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
      
      <div className="text-center">
        <a href="https://github.com/balu105" target="_blank" className="btn-secondary inline-flex items-center gap-2 group">
          <Github size={18} />
          View Complete Portfolio
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

  // Enhanced project data with professional details
  const projectEnhancements = [
    {
      impact: "Reduced manual attendance tracking by 80%",
      techHighlight: "Django REST API with automated reporting",
      complexity: "High",
      teamSize: "Solo Project"
    },
    {
      impact: "Improved data insights by 60%",
      techHighlight: "Python data pipeline with Plotly visualization",
      complexity: "Medium",
      teamSize: "Solo Project"
    },
    {
      impact: "Enhanced communication accuracy by 75%",
      techHighlight: "Real-time speech processing with AI",
      complexity: "High",
      teamSize: "Solo Project"
    },
    {
      impact: "Predicted performance with 85% accuracy",
      techHighlight: "ML model with Scikit-Learn",
      complexity: "Medium",
      teamSize: "Solo Project"
    }
  ];

  const enhancement = projectEnhancements[index] || projectEnhancements[0];

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
      
      {/* Project Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-brand-lavender/70 text-sm leading-relaxed mb-3">
              {project.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full ${
              enhancement.complexity === 'High' 
                ? 'bg-red-500/10 text-red-400' 
                : 'bg-yellow-500/10 text-yellow-400'
            }`}>
              {enhancement.complexity}
            </span>
          </div>
        </div>
        
        {/* Technical Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag: string, tIdx: number) => (
            <span key={tIdx} className="text-xs px-3 py-1 glass-card text-brand-cyan-300 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Metrics */}
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-sm text-brand-lavender/80">
              <strong className="text-green-400">Impact:</strong> {enhancement.impact}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Code className="w-4 h-4 text-brand-cyan-400" />
            <span className="text-sm text-brand-lavender/80">
              <strong className="text-brand-cyan-400">Tech:</strong> {enhancement.techHighlight}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-4 h-4 text-brand-purple" />
            <span className="text-sm text-brand-lavender/80">
              <strong className="text-brand-purple">Team:</strong> {enhancement.teamSize}
            </span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-sm py-2 flex items-center justify-center gap-2"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 glass-card border border-white/10 hover:border-brand-cyan-500/30 text-white rounded-full transition-all flex items-center justify-center group"
            title="View Source Code"
          >
            <Github size={16} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;