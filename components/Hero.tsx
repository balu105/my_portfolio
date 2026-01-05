import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Award, MapPin, Calendar, Sparkles } from 'lucide-react';

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
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="section-container grid-professional-2 items-center w-full relative z-10">
        
        {/* Professional Profile */}
        <div className="text-center lg:text-left animate-slide-up">
          <div className="professional-badge mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Available for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white">
            Kandanathi Chittem <span className="text-gradient">Balaji</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium mb-8 h-10 flex items-center justify-center lg:justify-start gap-3">
            <span className="font-semibold text-blue-400">{displayText}</span>
            <span className="w-0.5 h-8 bg-blue-400 animate-pulse"></span>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Computer Science & AI student with <strong className="text-blue-400">2+ years</strong> of hands-on experience. 
            Specialized in <strong className="text-purple-400">Full Stack Development</strong> and <strong className="text-cyan-400">Machine Learning</strong>.
          </p>

          {/* Professional Highlights */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="professional-card p-4 text-center hover-lift">
              <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">3+ Certifications</div>
              <div className="text-xs text-slate-400">Industry Recognized</div>
            </div>
            <div className="professional-card p-4 text-center hover-lift">
              <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">10+ Projects</div>
              <div className="text-xs text-slate-400">Successfully Delivered</div>
            </div>
            <div className="professional-card p-4 text-center hover-lift">
              <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">Remote Ready</div>
              <div className="text-xs text-slate-400">Global Availability</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
            <a href="#projects" className="btn-primary group w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Explore Portfolio
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            
            <a href="/resume.txt" download className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              <Download size={18} /> Download Resume
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-6">
             <a href="https://github.com/balu105" target="_blank" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover-glow" title="GitHub">
               <Github size={24} />
             </a>
             <a href="https://www.linkedin.com/in/kandanathi-chittem-balaji/" target="_blank" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover-glow" title="LinkedIn">
               <Linkedin size={24} />
             </a>
             <a href="mailto:balajikc89@gmail.com" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover-glow" title="Email">
               <Mail size={24} />
             </a>
          </div>
        </div>

        {/* Professional Skills Visualization */}
        <div className="flex justify-center relative h-96 lg:h-[500px] items-center animate-float">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            
            {/* Core Profile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-glow z-10">
               <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center border-2 border-blue-400/50">
                  <span className="text-lg font-black text-gradient">KC</span>
               </div>
            </div>

            {/* Professional Skill Orbits */}
            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin-slow">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 professional-card px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-blue-400">React.js</span>
               </div>
            </div>
            
            <div className="absolute inset-[15%] border-2 border-purple-400/30 rounded-full animate-spin-reverse-slow">
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 professional-card px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-purple-400">Python</span>
               </div>
            </div>

            <div className="absolute -inset-[20%] border-2 border-cyan-400/20 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 professional-card px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-cyan-400">AI/ML</span>
               </div>
            </div>

            <div className="absolute inset-[30%] border-2 border-green-400/20 rounded-full animate-spin-reverse-slow" style={{ animationDuration: '30s' }}>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 professional-card px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-green-400">AWS</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;