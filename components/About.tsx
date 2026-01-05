import React from 'react';
import { Code, Database, Brain, Globe, Users, Award, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { number: '2+', label: 'Years Exp', icon: TrendingUp },
    { number: '10+', label: 'Projects', icon: Target },
    { number: '3+', label: 'Certificates', icon: Award },
    { number: '95%', label: 'Quality Score', icon: Users },
  ];

  const expertise = [
    { 
      name: 'Full Stack Development', 
      icon: Globe, 
      skills: ['React.js', 'Django', 'REST APIs'],
      level: 'Advanced'
    },
    { 
      name: 'AI & Machine Learning', 
      icon: Brain, 
      skills: ['Python', 'Scikit-Learn', 'Data Analysis'],
      level: 'Intermediate'
    },
    { 
      name: 'Cloud Technologies', 
      icon: Database, 
      skills: ['AWS', 'Cloud Computing', 'Deployment'],
      level: 'Intermediate'
    },
    { 
      name: 'Software Engineering', 
      icon: Code, 
      skills: ['Git/GitHub', 'Agile', 'Testing'],
      level: 'Advanced'
    },
  ];

  return (
    <section id="about" className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-semibold uppercase mb-4">
            <Users className="w-3 h-3" />
            Professional Profile
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Passionate <span className="text-gradient">Software Engineer</span>
          </h2>
          <p className="text-base text-brand-lavender/70 max-w-2xl mx-auto">
            Computer Science & AI student with proven industry experience and innovative problem-solving skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl border-l-4 border-l-brand-cyan-500">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-cyan-400" />
                Professional Summary
              </h3>
              <p className="text-sm text-brand-lavender/80 leading-relaxed mb-4">
                B.Tech in Computer Science & AI at St. John's College. Completed internships at 
                <strong> SmartInternz (ML)</strong> and <strong>APSSDC (AWS)</strong>.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-brand-lavender/70">
                  <div className="w-1.5 h-1.5 bg-brand-cyan-400 rounded-full"></div>
                  <span>Strong foundation in Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-lavender/70">
                  <div className="w-1.5 h-1.5 bg-brand-cyan-400 rounded-full"></div>
                  <span>Experience with Agile development methodologies</span>
                </div>
              </div>
            </div>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="glass-card p-4 text-center group hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 text-brand-cyan-400 mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-white">{achievement.number}</h3>
                    <p className="text-xs text-brand-lavender/70">{achievement.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-brand-cyan-400" />
              Core Competencies
            </h3>
            
            <div className="space-y-3">
              {expertise.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={index} className="glass-card p-4 rounded-xl hover:border-brand-cyan-500/30 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-brand-cyan-500/10 text-brand-cyan-400 flex-shrink-0">
                        <IconComponent size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white text-sm">{tech.name}</h4>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-brand-cyan-500/10 text-brand-cyan-400">
                            {tech.level}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {tech.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="text-xs px-2 py-0.5 bg-white/5 rounded text-brand-lavender/70">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Career Objective */}
            <div className="glass-card p-4 rounded-xl border-l-4 border-l-green-500">
              <h3 className="text-sm font-bold text-white mb-2">Career Objective</h3>
              <p className="text-xs text-brand-lavender/70 leading-relaxed">
                Seeking a Software Engineer role to leverage full-stack and AI/ML skills 
                in innovative projects and grow in a dynamic technology environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;