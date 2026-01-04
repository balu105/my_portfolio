
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-brand-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 block">Learning Path</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Certifications & Awards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index} 
              className="group glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,180,216,0.1)] flex flex-col relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-brand-cyan-500/10 transition-colors"></div>
              
              <div className="mb-6 p-3 bg-brand-dark/40 rounded-xl w-fit text-brand-cyan-400 border border-white/5">
                <Award size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h4>
              <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">{cert.provider}</p>
              
              <p className="text-brand-lavender/70 text-sm leading-relaxed mb-8 flex-grow">
                {cert.description}
              </p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan-400 hover:text-brand-cyan-300 transition-colors"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
