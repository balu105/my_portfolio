import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight, Code, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-semibold uppercase mb-4">
            <Code className="w-3 h-3" />
            Technical Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base text-brand-lavender/70 max-w-2xl mx-auto">
            Real-world applications demonstrating technical skills and problem-solving capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://github.com/balu105" target="_blank" className="btn-secondary inline-flex items-center gap-2 group text-sm px-6 py-2.5">
            <Github size={16} />
            View All Projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const projectEnhancements = [
    {
      impact: "80% efficiency boost",
      tech: "Django REST API",
      complexity: "High"
    },
    {
      impact: "60% better insights",
      tech: "Python + Plotly",
      complexity: "Medium"
    },
    {
      impact: "75% accuracy improvement",
      tech: "AI Speech Processing",
      complexity: "High"
    },
    {
      impact: "85% prediction accuracy",
      tech: "ML with Scikit-Learn",
      complexity: "Medium"
    }
  ];

  const enhancement = projectEnhancements[index] || projectEnhancements[0];

  return (
    <div className="group glass-card rounded-xl overflow-hidden border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Project Header */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${
            enhancement.complexity === 'High' 
              ? 'bg-red-500/10 text-red-400' 
              : 'bg-yellow-500/10 text-yellow-400'
          }`}>
            {enhancement.complexity}
          </span>
        </div>
        
        <p className="text-sm text-brand-lavender/70 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technical Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags?.slice(0, 3).map((tag: string, tIdx: number) => (
            <span key={tIdx} className="text-xs px-2 py-0.5 glass-card text-brand-cyan-300 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Project Metrics */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-green-400 flex-shrink-0" />
            <span className="text-xs text-brand-lavender/80">
              <strong className="text-green-400">Impact:</strong> {enhancement.impact}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-3 h-3 text-brand-cyan-400 flex-shrink-0" />
            <span className="text-xs text-brand-lavender/80">
              <strong className="text-brand-cyan-400">Tech:</strong> {enhancement.tech}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-xs py-2 flex items-center justify-center gap-1"
          >
            <ExternalLink size={12} /> Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-2 glass-card border border-white/10 hover:border-brand-cyan-500/30 text-white rounded-lg transition-all flex items-center justify-center"
            title="Source Code"
          >
            <Github size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;