import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Zap, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const getSkillLevel = (percentage: number) => {
    if (percentage >= 90) return { label: 'Expert', color: 'brand-cyan-400', icon: Zap };
    if (percentage >= 75) return { label: 'Advanced', color: 'brand-purple', icon: TrendingUp };
    return { label: 'Intermediate', color: 'brand-violet', icon: Code2 };
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
          <Code2 className="w-4 h-4" />
          My Arsenal
        </div>
        <h2 className="section-title">
          Technical <span className="text-gradient">Proficiency</span>
        </h2>
        <p className="section-subtitle">
          Mastering modern technologies to build exceptional digital experiences
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => {
          const skillLevel = getSkillLevel(skill.percentage);
          const IconComponent = skillLevel.icon;
          
          return (
            <div 
              key={index} 
              className="interactive-card p-6 rounded-2xl relative overflow-hidden group text-center"
            >
              {/* Skill Icon */}
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${skillLevel.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <IconComponent className={`w-6 h-6 text-${skillLevel.color}`} />
              </div>
              
              {/* Skill Info */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan-300 transition-colors">
                {skill.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-xs font-bold text-${skillLevel.color} bg-${skillLevel.color}/10 px-3 py-1 rounded-full`}>
                  {skillLevel.label}
                </span>
              </div>
              
              {/* Progress Circle */}
              <div className="relative w-16 h-16 mx-auto mb-3">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-white/10"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - skill.percentage / 100)}`}
                    className={`text-${skillLevel.color} transition-all duration-1000 ease-out`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{skill.percentage}%</span>
                </div>
              </div>
              
              {/* Animated Background */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-${skillLevel.color}/5 rounded-full blur-2xl group-hover:bg-${skillLevel.color}/10 transition-all duration-500`}></div>
            </div>
          );
        })}
      </div>
      
      {/* Skills Summary */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl text-center border-l-4 border-l-brand-cyan-500">
          <h3 className="text-2xl font-bold text-white mb-2">Frontend</h3>
          <p className="text-brand-lavender/70 text-sm">React, HTML5, CSS3, JavaScript</p>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center border-l-4 border-l-brand-purple">
          <h3 className="text-2xl font-bold text-white mb-2">Backend</h3>
          <p className="text-brand-lavender/70 text-sm">Python, Django, Data Analytics</p>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center border-l-4 border-l-brand-violet">
          <h3 className="text-2xl font-bold text-white mb-2">Cloud & AI</h3>
          <p className="text-brand-lavender/70 text-sm">AWS, Machine Learning, Cloud Computing</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;