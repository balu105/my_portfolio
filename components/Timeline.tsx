import React from 'react';
import { Building, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

interface TimelineItem {
  title: string;
  subtitle?: string;
  company?: string;
  institution?: string;
  period: string;
  description?: string;
  score?: string;
  location?: string;
  achievements?: string[];
  skills?: string[];
}

interface TimelineProps {
  id: string;
  title: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ id, title, items }) => {
  const isExperience = id === 'experience';
  
  return (
    <section id={id} className="section-container">
      <div className="section-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
          {isExperience ? <Building className="w-4 h-4" /> : <Award className="w-4 h-4" />}
          {isExperience ? 'Professional Experience' : 'Academic Background'}
        </div>
        <h2 className="section-title">
          {isExperience ? (
            <>Professional <span className="text-gradient">Journey</span></>
          ) : (
            <>Educational <span className="text-gradient">Foundation</span></>
          )}
        </h2>
        <p className="section-subtitle">
          {isExperience 
            ? 'Industry experience and internships that shaped my professional development'
            : 'Academic achievements and educational milestones'
          }
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan-500/50 via-brand-purple/50 to-transparent"></div>
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative flex gap-8 group">
              
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full glass-card border-2 border-brand-cyan-500/30 flex items-center justify-center group-hover:border-brand-cyan-500 transition-all duration-300 group-hover:scale-110">
                  {isExperience ? (
                    <Building className="w-6 h-6 text-brand-cyan-400" />
                  ) : (
                    <Award className="w-6 h-6 text-brand-cyan-400" />
                  )}
                </div>
                {/* Connecting Line */}
                {index < items.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-brand-cyan-500/20"></div>
                )}
              </div>
              
              {/* Content Card */}
              <div className="flex-1 glass-card p-6 rounded-2xl border-l-4 border-l-brand-cyan-500 hover:border-l-brand-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-brand-cyan-400 font-semibold text-sm mb-2">
                      <Building className="w-4 h-4" />
                      <span>{item.company || item.institution}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-2 text-brand-lavender/70 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-cyan-400 bg-brand-cyan-500/10 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                </div>
                
                {item.description && (
                  <p className="text-brand-lavender/80 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}
                
                {item.achievements && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-brand-lavender/70">
                          <div className="w-1.5 h-1.5 bg-brand-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.skills && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs px-2 py-1 bg-white/5 rounded-full text-brand-lavender/70">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {item.score && (
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">
                      {item.score}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;