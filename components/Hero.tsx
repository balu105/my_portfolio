import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Award, MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Full Stack Developer", "AI/ML Engineer", "Software Engineer"];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  const handleType = () => {
    const i = loopNum % texts.length;
    const fullText = texts[i];
    setDisplayText(isDeleting 
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1)
    );
    setTypingSpeed(isDeleting ? 50 : 120);
    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {/* Professional Profile */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-4 border-green-500/30 bg-green-500/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-300">Open to Work</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 text-white">
            Kandanathi Chittem <span className="text-gradient">Balaji</span>
          </h1>
          
          <div className="text-lg sm:text-xl text-brand-lavender font-medium mb-4 h-6 flex items-center justify-center lg:justify-start gap-2">
            <span className="font-semibold text-brand-cyan-400">{displayText}</span>
            <span className="w-0.5 h-5 bg-brand-cyan-400 animate-pulse"></span>
          </div>

          <p className="text-sm sm:text-base text-brand-lavender/80 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            B.Tech CS & AI student with <strong>2+ years</strong> experience in 
            <strong> Full Stack Development</strong> and <strong>AI/ML</strong>. 
            <strong>10+ projects</strong> delivered with industry internships.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="glass-card p-3 rounded-lg text-center">
              <Award className="w-4 h-4 text-brand-cyan-400 mx-auto mb-1" />
              <div className="text-xs font-semibold text-white">3+ Certs</div>
            </div>
            <div className="glass-card p-3 rounded-lg text-center">
              <Calendar className="w-4 h-4 text-brand-purple mx-auto mb-1" />
              <div className="text-xs font-semibold text-white">2024-2026</div>
            </div>
            <div className="glass-card p-3 rounded-lg text-center">
              <MapPin className="w-4 h-4 text-brand-violet mx-auto mb-1" />
              <div className="text-xs font-semibold text-white">Remote</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-6">
            <a href="#projects" className="btn-primary group w-full sm:w-auto text-sm px-6 py-2.5">
              <span className="flex items-center justify-center gap-2">
                View Portfolio
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            
            <a href="/resume.txt" download className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 text-sm px-6 py-2.5">
              <Download size={16} /> Download CV
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-4">
             <a href="https://github.com/balu105" target="_blank" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300" title="GitHub">
               <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/kandanathi-chittem-balaji/" target="_blank" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300" title="LinkedIn">
               <Linkedin size={20} />
             </a>
             <a href="mailto:balajikc89@gmail.com" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300" title="Email">
               <Mail size={20} />
             </a>
          </div>
        </div>

        {/* Skills Visualization */}
        <div className="order-1 lg:order-2 flex justify-center relative h-64 sm:h-80 lg:h-96 items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            
            {/* Core Profile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-cyan-500 to-brand-purple rounded-full flex items-center justify-center shadow-glow z-10">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-dark rounded-full flex items-center justify-center border border-brand-cyan-500/50">
                  <span className="text-sm sm:text-base font-black text-gradient">KC</span>
               </div>
            </div>

            {/* Skill Orbits */}
            <div className="absolute inset-0 border border-brand-cyan-500/20 rounded-full animate-spin-slow">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 glass-card px-2 py-1 rounded-full text-xs font-medium text-brand-cyan-400">
                  React
               </div>
            </div>
            
            <div className="absolute inset-[15%] border border-brand-purple/20 rounded-full animate-spin-reverse-slow">
               <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card px-2 py-1 rounded-full text-xs font-medium text-brand-purple">
                  Python
               </div>
            </div>

            <div className="absolute -inset-[20%] border border-brand-violet/10 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 glass-card px-2 py-1 rounded-full text-xs font-medium text-brand-violet">
                  AI/ML
               </div>
            </div>

            <div className="absolute inset-[30%] border border-green-500/20 rounded-full animate-spin-reverse-slow" style={{ animationDuration: '30s' }}>
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 glass-card px-2 py-1 rounded-full text-xs font-medium text-green-400">
                  AWS
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;