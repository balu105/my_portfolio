import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[1000] hidden lg:block transition-all duration-500 ${isScrolled ? 'top-2' : 'top-6'}`}>
        <nav className={`glass-nav rounded-2xl px-6 py-3 flex items-center gap-6 shadow-2xl transition-all duration-500 border border-white/10 ${isScrolled ? 'scale-95 backdrop-blur-3xl' : 'scale-100'}`}>
           <a href="#hero" className="font-black text-xl tracking-tighter text-white flex items-center gap-2 group">
             <Sparkles className="w-5 h-5 text-brand-cyan-500 group-hover:animate-spin" />
             K.C<span className="text-brand-cyan-500">.</span>
           </a>
           
           <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  activeSection === link.id 
                    ? 'bg-brand-cyan-500 text-brand-dark shadow-glow' 
                    : 'text-brand-lavender hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <div className="absolute inset-0 bg-brand-cyan-500 rounded-lg animate-pulse-glow -z-10" />
                )}
              </a>
            ))}
           </div>
           
           <a href="mailto:balajikc89@gmail.com" className="btn-primary text-xs px-4 py-2 flex items-center gap-2">
             <span>Hire Me</span>
             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
           </a>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <header className={`lg:hidden fixed top-0 inset-x-0 z-[1000] transition-all duration-300 ${isScrolled || isOpen ? 'glass-nav' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-black tracking-tighter text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-cyan-500" />
            K.C<span className="text-brand-cyan-500">.</span>
          </h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`absolute top-full left-0 w-full glass-nav border-t border-white/10 transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block p-3 rounded-xl transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-brand-cyan-500/20 text-brand-cyan-400 border border-brand-cyan-500/30' 
                    : 'text-brand-lavender hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="mailto:balajikc89@gmail.com" className="btn-primary w-full text-center mt-4">
              Hire Me
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;