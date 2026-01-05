import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Brain, Globe, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Web Developer", "Data Scientist", "AI Researcher"];

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      <div className="section-container grid-responsive-2 items-center w-full">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-brand-cyan-500/20 bg-brand-cyan-500/5 hover:bg-brand-cyan-500/10 transition-all duration-300 cursor-default hover-glow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan-100">Available for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-6 text-white drop-shadow-2xl">
            BUILDING <br />
            <span className="text-gradient animate-pulse-glow">DIGITAL</span> <br />
            INTELLIGENCE
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-brand-lavender font-light mb-8 max-w-lg mx-auto lg:mx-0 h-8 flex items-center justify-center lg:justify-start gap-2">
            I am a <span className="font-bold text-white">{displayText}</span>
            <span className="w-0.5 h-6 bg-brand-cyan-400 animate-pulse"></span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
            <a href="#projects" className="btn-primary group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                View Projects 
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            
            <a href="/resume.pdf" download className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              <Download size={18} /> Resume
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-6">
             <a href="https://github.com/balu105" target="_blank" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300 hover-glow">
               <Github size={24} />
             </a>
             <a href="https://www.linkedin.com/in/kandanathi-chittem-balaji/" target="_blank" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300 hover-glow">
               <Linkedin size={24} />
             </a>
             <a href="mailto:balajikc89@gmail.com" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300 hover-glow">
               <Mail size={24} />
             </a>
          </div>
        </div>

        {/* Right: 3D Orbit Animation */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] items-center animate-slide-up">
           <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              
              {/* Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-cyan-500 to-brand-purple rounded-full blur-md animate-pulse-glow z-10 flex items-center justify-center shadow-glow-lg">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-brand-dark rounded-full flex items-center justify-center z-20 border border-brand-cyan-500/50">
                    <span className="text-sm sm:text-lg md:text-2xl font-black text-gradient">KCB</span>
                 </div>
              </div>

              {/* Orbit Rings */}
              <div className="absolute inset-0 border border-brand-cyan-500/20 rounded-full animate-spin-slow">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 glass-card rounded-full flex items-center justify-center text-brand-cyan-400 shadow-glow animate-spin-reverse-slow hover-glow">
                    <Brain size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                 </div>
              </div>
              
              <div className="absolute inset-[15%] border border-brand-purple/20 rounded-full animate-spin-reverse-slow">
                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 glass-card rounded-full flex items-center justify-center text-brand-purple shadow-glow animate-spin-slow hover-glow">
                    <Globe size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                 </div>
              </div>

              <div className="absolute -inset-[20%] border border-brand-violet/10 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 glass-card rounded-full flex items-center justify-center text-brand-violet shadow-glow animate-spin-reverse-slow hover-glow">
                    <Code size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce-gentle">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-lavender">Scroll Down</span>
        <ArrowDown size={16} className="text-brand-cyan-500" />
      </div>
    </section>
  );
};

export default Hero;