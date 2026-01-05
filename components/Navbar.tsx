import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Briefcase } from 'lucide-react';

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
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Professional Desktop Navbar */}
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[1000] hidden lg:block transition-all duration-500 ${isScrolled ? 'top-2' : 'top-6'}`}>
        <nav className={`glass-nav rounded-2xl px-8 py-4 flex items-center gap-8 shadow-2xl transition-all duration-500 ${isScrolled ? 'scale-95 backdrop-blur-3xl' : 'scale-100'}`}>
           <a href="#hero" className="font-black text-xl tracking-tight text-white flex items-center gap-2 group">
             <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
               <Sparkles className="w-4 h-4 text-white" />
             </div>
             <span>K.C<span className="text-blue-400">.</span></span>
           </a>
           
           <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1.5 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
           </div>
           
           <a href="mailto:balajikc89@gmail.com" className="btn-primary text-sm px-6 py-2.5 flex items-center gap-2">
             <Briefcase className="w-4 h-4" />
             <span>Hire Me</span>
           </a>
        </nav>
      </div>

      {/* Professional Mobile Navbar */}
      <header className={`lg:hidden fixed top-0 inset-x-0 z-[1000] transition-all duration-300 ${isScrolled || isOpen ? 'glass-nav' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center p-6">
          <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span>K.C<span className="text-blue-400">.</span></span>
          </h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`absolute top-full left-0 w-full glass-nav border-t border-white/10 transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="p-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`block p-4 rounded-xl transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 border border-blue-400/30' 
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="mailto:balajikc89@gmail.com" className="btn-primary w-full text-center mt-4">
              <Briefcase className="w-4 h-4 inline mr-2" />
              Hire Me
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;