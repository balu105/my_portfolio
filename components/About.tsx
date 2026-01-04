
import React from 'react';
import { Code, Database, Brain, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div data-aos="fade-right">
             <div className="inline-block px-4 py-1 rounded-full border border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
               Who I Am
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Bridging <span className="text-gradient">Data Science</span> & <br />
               <span className="text-gradient-inverse">Modern Web</span>
             </h2>
             <p className="text-brand-lavender/70 text-lg leading-relaxed mb-8">
               I am a passionate developer creating interactive and responsive web experiences. 
               Currently pursuing a B.Tech in CS & AI, I thrive on solving complex problems 
               by blending the analytical power of Artificial Intelligence with the creativity of Web Development.
             </p>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-5 rounded-2xl border-l-4 border-l-brand-cyan-500 bg-brand-indigo/50">
                  <h3 className="text-3xl font-bold text-white mb-1">2+</h3>
                  <p className="text-sm text-brand-lavender/60 font-medium">Years Coding</p>
                </div>
                <div className="glass-card p-5 rounded-2xl border-l-4 border-l-brand-purple bg-brand-indigo/50">
                  <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
                  <p className="text-sm text-brand-lavender/60 font-medium">Projects Built</p>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {/* Aspect Ratio boxes for tech stack */}
            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:bg-brand-indigo/60 transition-all duration-300 group aspect-square hover:border-brand-cyan-500/30">
              <div className="p-4 rounded-full bg-brand-cyan-500/10 text-brand-cyan-400 group-hover:scale-110 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="font-bold text-white">AI & ML</h3>
            </div>
            
            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:bg-brand-indigo/60 transition-all duration-300 group aspect-square mt-8 hover:border-brand-purple/30">
              <div className="p-4 rounded-full bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="font-bold text-white">Web Dev</h3>
            </div>
            
            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:bg-brand-indigo/60 transition-all duration-300 group aspect-square -mt-8 hover:border-brand-violet/30">
              <div className="p-4 rounded-full bg-brand-violet/10 text-brand-violet group-hover:scale-110 transition-transform">
                <Code size={32} />
              </div>
              <h3 className="font-bold text-white">Python</h3>
            </div>
            
            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:bg-brand-indigo/60 transition-all duration-300 group aspect-square hover:border-brand-cyan-600/30">
              <div className="p-4 rounded-full bg-brand-cyan-600/10 text-brand-cyan-600 group-hover:scale-110 transition-transform">
                <Database size={32} />
              </div>
              <h3 className="font-bold text-white">Data</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
