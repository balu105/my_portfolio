import React from 'react';
import { Code, Database, Brain, Globe, Sparkles, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '2+', label: 'Years Coding', icon: Code },
    { number: '10+', label: 'Projects Built', icon: Target },
    { number: '3+', label: 'Certifications', icon: Award },
    { number: '95%', label: 'Client Satisfaction', icon: Sparkles },
  ];

  const techStack = [
    { name: 'AI & ML', icon: Brain, color: 'cyan', description: 'Machine Learning & Neural Networks' },
    { name: 'Web Dev', icon: Globe, color: 'purple', description: 'React, Django & Modern Frameworks' },
    { name: 'Python', icon: Code, color: 'violet', description: 'Backend Development & Automation' },
    { name: 'Data Science', icon: Database, color: 'cyan-600', description: 'Analytics & Visualization' },
  ];

  return (
    <section id="about" className="section-container relative">
      <div className="section-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
          <Sparkles className="w-4 h-4" />
          Who I Am
        </div>
        <h2 className="section-title">
          Bridging <span className="text-gradient">Data Science</span> & <br />
          <span className="text-gradient-inverse">Modern Web</span>
        </h2>
        <p className="section-subtitle">
          I am a passionate developer creating interactive and responsive web experiences. 
          Currently pursuing B.Tech in CS & AI, I blend analytical AI power with creative web development.
        </p>
      </div>

      <div className="grid-responsive-2 items-center gap-16">
        {/* Stats Grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="interactive-card p-6 text-center group">
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-brand-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.number}</h3>
                  <p className="text-sm text-brand-lavender/70 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-cyan-500">
            <h3 className="text-lg font-bold text-white mb-3">Current Focus</h3>
            <p className="text-brand-lavender/70 leading-relaxed">
              Building intelligent web applications that leverage AI to solve real-world problems. 
              Passionate about creating seamless user experiences with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={index} 
                className={`interactive-card p-6 rounded-2xl text-center group aspect-square flex flex-col justify-center hover:border-brand-${tech.color}/30 ${
                  index % 2 === 1 ? 'mt-8' : index === 2 ? '-mt-8' : ''
                }`}
              >
                <div className={`p-4 rounded-full bg-brand-${tech.color}/10 text-brand-${tech.color} group-hover:scale-110 transition-all duration-300 mx-auto mb-4`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-xs text-brand-lavender/60 leading-relaxed">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;