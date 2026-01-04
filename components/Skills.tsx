
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
           <span className="text-brand-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 block">My Arsenal</span>
           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technical Proficiency</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-brand-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Animated Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-dark/50">
                <div 
                  className="h-full bg-gradient-to-r from-brand-cyan-500 to-brand-purple transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
              
              <div className="flex flex-col gap-2">
                 <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan-300 transition-colors">{skill.name}</h3>
                    <span className="text-xs font-mono font-bold text-brand-cyan-500 bg-brand-cyan-500/10 px-2 py-1 rounded">{skill.percentage}%</span>
                 </div>
                 <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-brand-cyan-500 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                 </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-cyan-500/10 rounded-full blur-2xl group-hover:bg-brand-cyan-500/20 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
