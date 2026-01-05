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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      <div className="section-container grid-responsive-2 items-center w-full">
        
        {/* Professional Profile */}
        <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border-green-500/30 bg-green-500/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-green-300">Open to Work</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            Kandanathi Chittem <span className="text-gradient">Balaji</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-brand-lavender font-medium mb-6 h-8 flex items-center justify-center lg:justify-start gap-2">
            <span className="font-semibold text-brand-cyan-400">{displayText}</span>
            <span className="w-0.5 h-6 bg-brand-cyan-400 animate-pulse"></span>
          </div>

          <p className="text-lg text-brand-lavender/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            B.Tech Computer Science & AI student with <strong>2+ years</strong> of hands-on experience in 
            <strong> Full Stack Development</strong>, <strong>Machine Learning</strong>, and <strong>Cloud Technologies</strong>. 
            Proven track record with <strong>10+ projects</strong> and industry internships.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="glass-card p-4 rounded-xl text-center">
              <Award className="w-6 h-6 text-brand-cyan-400 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">3+ Certifications</div>
              <div className="text-xs text-brand-lavender/70">Industry Recognized</div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <Calendar className="w-6 h-6 text-brand-purple mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">2024-2026</div>
              <div className="text-xs text-brand-lavender/70">Graduation Timeline</div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <MapPin className="w-6 h-6 text-brand-violet mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">Andhra Pradesh</div>
              <div className="text-xs text-brand-lavender/70">Available Remotely</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
            <a href="#projects" className="btn-primary group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                View Portfolio
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            
            <a href="/resume.pdf" download className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              <Download size={18} /> Download CV
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-6">
             <a href="https://github.com/balu105" target="_blank" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300 hover-glow" title="GitHub Profile">
               <Github size={24} />
             </a>
             <a href="https://www.linkedin.com/in/kandanathi-chittem-balaji/" target="_blank" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300 hover-glow" title="LinkedIn Profile">
               <Linkedin size={24} />
             </a>
             <a href="mailto:balajikc89@gmail.com" className="text-brand-lavender hover:text-brand-cyan-400 hover:scale-110 transition-all duration-300 hover-glow" title="Email Contact">
               <Mail size={24} />
             </a>
          </div>
        </div>

        {/* Professional Skills Visualization */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative h-[400px] lg:h-[500px] items-center animate-slide-up">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            
            {/* Core Profile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-brand-cyan-500 to-brand-purple rounded-full flex items-center justify-center shadow-glow-lg z-10">
               <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center border border-brand-cyan-500/50">
                  <span className="text-lg font-black text-gradient">KC</span>
               </div>
            </div>

            {/* Skill Orbits */}
            <div className="absolute inset-0 border border-brand-cyan-500/20 rounded-full animate-spin-slow">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass-card px-3 py-2 rounded-full text-xs font-semibold text-brand-cyan-400">
                  React
               </div>
            </div>
            
            <div className="absolute inset-[15%] border border-brand-purple/20 rounded-full animate-spin-reverse-slow">
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-3 py-2 rounded-full text-xs font-semibold text-brand-purple">
                  Python
               </div>
            </div>

            <div className="absolute -inset-[20%] border border-brand-violet/10 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 glass-card px-3 py-2 rounded-full text-xs font-semibold text-brand-violet">
                  AI/ML
               </div>
            </div>

            <div className="absolute inset-[30%] border border-green-500/20 rounded-full animate-spin-reverse-slow" style={{ animationDuration: '30s' }}>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 glass-card px-3 py-2 rounded-full text-xs font-semibold text-green-400">
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