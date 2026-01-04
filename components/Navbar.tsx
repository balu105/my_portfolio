
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted logic for better highlighting during scroll
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
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] hidden md:block transition-all duration-300 w-auto`}>
        <nav className={`glass-nav rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl transition-all duration-300 ${isScrolled ? 'scale-95 py-3' : 'scale-100'}`}>
           <a href="#hero" className="font-black text-xl tracking-tighter text-white mr-4">
             K.C.<span className="text-brand-cyan-500">.</span>
           </a>
           <div className="flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeSection === link.id 
                    ? 'bg-brand-cyan-500 text-brand-dark shadow-[0_0_20px_rgba(0,180,216,0.4)]' 
                    : 'text-brand-lavender hover:text-white hover:bg-white/5'}
                `}
              >
                {link.name}
              </a>
            ))}
           </div>
           <a 
             href="mailto:balajikc89@gmail.com" 
             className="ml-4 px-5 py-2 bg-gradient-to-r from-brand-indigo to-brand-dark border border-brand-violet/30 rounded-full text-xs font-bold uppercase tracking-widest hover:border-brand-cyan-500 transition-colors"
           >
             Hire Me
           </a>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <header className={`md:hidden fixed top-0 inset-x-0 z-[1000] transition-all duration-300 ${isScrolled || isOpen ? 'glass-nav bg-brand-dark/90' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-black tracking-tighter text-white">
            K.C. <span className="text-brand-cyan-500">BALAJI</span>
          </h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`absolute top-full left-0 w-full glass-nav border-t border-white/10 transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium p-4 rounded-xl transition-colors ${activeSection === link.id ? 'bg-brand-cyan-500/10 text-brand-cyan-500 border border-brand-cyan-500/20' : 'text-brand-lavender'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
