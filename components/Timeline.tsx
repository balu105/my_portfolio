
import React from 'react';

interface TimelineItem {
  title: string;
  subtitle?: string;
  company?: string;
  institution?: string;
  period: string;
  description?: string;
  score?: string;
}

interface TimelineProps {
  id: string;
  title: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ id, title, items }) => {
  return (
    <section id={id} className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
           <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan-500 to-transparent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-cyan-500/50 before:via-brand-purple/50 before:to-transparent">
          {items.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group" data-aos="fade-up">
              
              {/* Center Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark bg-brand-cyan-500 shadow-[0_0_20px_rgba(0,180,216,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-500 group-hover:scale-125">
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border-l-4 border-l-brand-cyan-500 hover:border-l-brand-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-between items-start mb-2">
                   <h4 className="text-xl font-bold text-white">{item.title}</h4>
                   <span className="text-xs font-bold text-brand-cyan-400 bg-brand-cyan-500/10 px-2 py-1 rounded">{item.period}</span>
                </div>
                <p className="text-brand-purple font-medium text-sm mb-3">
                  {item.company || item.institution || item.subtitle}
                </p>
                {item.description && (
                  <p className="text-brand-lavender/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
                 {item.score && (
                  <div className="mt-3 text-xs font-mono text-brand-cyan-300">
                    {item.score}
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
