
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-brand-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 block drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Learning Path</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">Certifications & Awards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index} 
              className="group glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col relative overflow-hidden border border-white/5 hover:border-brand-cyan-500/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-cyan-500/20 transition-all duration-500"></div>
              
              <div className="mb-6 p-4 bg-brand-dark/40 rounded-2xl w-fit text-brand-cyan-400 border border-white/5 shadow-[inset_0_0_10px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform duration-300">
                <Award size={32} className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-brand-cyan-100 transition-colors">{cert.title}</h4>
              <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 shadow-brand-purple/20">{cert.provider}</p>
              
              <p className="text-brand-lavender/70 text-sm leading-relaxed mb-8 flex-grow">
                {cert.description}
              </p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 py-3 px-6 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-cyan-500 hover:border-brand-cyan-500 text-brand-cyan-400 hover:text-brand-dark font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:border-brand-cyan-500/30"
              >
                See Certificate <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
