
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Brain, Globe, Database, Code } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden" id="hero">
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-brand-cyan-500/20 bg-brand-cyan-500/5 hover:bg-brand-cyan-500/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan-100">Available for Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6 text-white drop-shadow-2xl">
            BUILDING <br />
            <span className="text-gradient">DIGITAL</span> <br />
            INTELLIGENCE
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-lavender font-light mb-8 max-w-lg mx-auto lg:mx-0 h-8 flex items-center justify-center lg:justify-start gap-2">
            I am a <span className="font-bold text-white">{displayText}</span>
            <span className="w-0.5 h-6 bg-brand-cyan-400 animate-pulse"></span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#projects" className="group relative px-8 py-4 bg-brand-cyan-500 text-brand-dark font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] w-full sm:w-auto text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">View Projects <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a href="/resume.pdf" download className="group px-8 py-4 glass-card border border-brand-cyan-500/30 text-white font-bold rounded-full transition-all hover:bg-brand-cyan-500/10 hover:border-brand-cyan-500 w-full sm:w-auto text-center flex items-center justify-center gap-2">
              <Download size={18} /> Resume
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
             <a href="https://github.com/balu105" target="_blank" className="text-brand-lavender hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
             <a href="https://www.linkedin.com/in/kandanathi-chittem-balaji/" target="_blank" className="text-brand-lavender hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
             <a href="mailto:balajikc89@gmail.com" className="text-brand-lavender hover:text-white hover:scale-110 transition-all"><Mail size={24} /></a>
          </div>
        </div>

        {/* Right: 3D Orbit Animation */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative h-[400px] md:h-[600px] items-center" data-aos="fade-left">
           <div className="orbit-container relative w-64 h-64 md:w-96 md:h-96">
              
              {/* Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-brand-cyan-500 to-brand-purple rounded-full blur-md animate-pulse-glow z-10 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                 <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center z-20 border border-brand-cyan-500/50">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan-400 to-brand-purple">KCB</span>
                 </div>
              </div>

              {/* Rings & Planets */}
              <div className="orbit-ring w-full h-full animate-spin-slow border-brand-cyan-500/20">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center text-brand-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-spin-reverse">
                    <Brain size={20} />
                 </div>
              </div>
              
              <div className="orbit-ring w-[70%] h-[70%] top-[15%] left-[15%] animate-spin-reverse-slow border-brand-purple/20">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 glass-card rounded-full flex items-center justify-center text-brand-purple shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-spin-slow">
                    <Globe size={18} />
                 </div>
              </div>

              <div className="orbit-ring w-[140%] h-[140%] top-[-20%] left-[-20%] border-brand-violet/10 animate-spin-slow" style={{ animationDuration: '25s' }}>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 glass-card rounded-full flex items-center justify-center text-brand-violet shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-spin-reverse">
                    <Code size={24} />
                 </div>
              </div>

           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-lavender">Scroll Down</span>
        <ArrowDown size={16} className="text-brand-cyan-500" />
      </div>
    </section>
  );
};

export default Hero;
