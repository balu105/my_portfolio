import React from 'react';
import { Code, Database, Brain, Globe, Sparkles, Award, Target, TrendingUp, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { number: '2+', label: 'Years Experience', icon: Clock, description: 'Hands-on Development' },
    { number: '10+', label: 'Projects Delivered', icon: Target, description: 'Full Stack & AI/ML' },
    { number: '3+', label: 'Industry Certifications', icon: Award, description: 'Python, Java, Data Analytics' },
    { number: '95%', label: 'Code Quality Score', icon: TrendingUp, description: 'Clean & Maintainable' },
  ];

  const expertise = [
    { 
      name: 'Full Stack Development', 
      icon: Globe, 
      color: 'cyan', 
      skills: ['React.js', 'Django', 'REST APIs', 'Database Design'],
      level: 'Advanced'
    },
    { 
      name: 'AI & Machine Learning', 
      icon: Brain, 
      color: 'purple', 
      skills: ['Python', 'Scikit-Learn', 'Data Analysis', 'Model Training'],
      level: 'Intermediate'
    },
    { 
      name: 'Cloud Technologies', 
      icon: Database, 
      color: 'violet', 
      skills: ['AWS', 'Cloud Computing', 'File Storage', 'Deployment'],
      level: 'Intermediate'
    },
    { 
      name: 'Software Engineering', 
      icon: Code, 
      color: 'cyan-600', 
      skills: ['Git/GitHub', 'Agile', 'Testing', 'Documentation'],
      level: 'Advanced'
    },
  ];

  return (
    <section id="about" className="section-container relative">
      <div className="section-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
          <Users className="w-4 h-4" />
          Professional Profile
        </div>
        <h2 className="section-title">
          Passionate <span className="text-gradient">Software Engineer</span> <br />
          Building <span className="text-gradient-inverse">Tomorrow's Solutions</span>
        </h2>
        <p className="section-subtitle">
          Dedicated Computer Science & AI student with proven industry experience, 
          combining technical expertise with innovative problem-solving to deliver impactful solutions.
        </p>
      </div>

      <div className="grid-responsive-2 items-start gap-16">
        {/* Professional Summary & Achievements */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-2xl border-l-4 border-l-brand-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-cyan-400" />
              Professional Summary
            </h3>
            <p className="text-brand-lavender/80 leading-relaxed mb-6">
              Currently pursuing B.Tech in Computer Science & AI at St. John's College of Engineering and Technology. 
              Completed successful internships at <strong>SmartInternz (ML)</strong> and <strong>APSSDC (AWS)</strong>, 
              gaining hands-on experience in machine learning model development and cloud infrastructure.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-cyan-400 rounded-full"></div>
                <span className="text-sm text-brand-lavender/70">Strong foundation in Data Structures & Algorithms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-cyan-400 rounded-full"></div>
                <span className="text-sm text-brand-lavender/70">Experience with Agile development methodologies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-cyan-400 rounded-full"></div>
                <span className="text-sm text-brand-lavender/70">Proven ability to work in team environments</span>
              </div>
            </div>
          </div>
          
          {/* Key Achievements */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="interactive-card p-6 text-center group">
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-brand-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{achievement.number}</h3>
                  <p className="text-sm font-semibold text-brand-lavender mb-1">{achievement.label}</p>
                  <p className="text-xs text-brand-lavender/60">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand-cyan-400" />
            Core Competencies
          </h3>
          
          <div className="space-y-4">
            {expertise.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="glass-card p-6 rounded-2xl hover:border-brand-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-brand-${tech.color}/10 text-brand-${tech.color} flex-shrink-0`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white">{tech.name}</h4>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-brand-${tech.color}/10 text-brand-${tech.color}`}>
                          {tech.level}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs px-2 py-1 bg-white/5 rounded-full text-brand-lavender/70">
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
          <div className="glass-card p-6 rounded-2xl border-l-4 border-l-green-500">
            <h3 className="text-lg font-bold text-white mb-3">Career Objective</h3>
            <p className="text-brand-lavender/70 text-sm leading-relaxed">
              Seeking a challenging role as a Software Engineer where I can leverage my technical skills 
              in full-stack development and AI/ML to contribute to innovative projects and grow professionally 
              in a dynamic technology environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;