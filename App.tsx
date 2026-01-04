
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import LoadingScreen from './components/LoadingScreen';
import BackgroundEffects from './components/BackgroundEffects';
import { EXPERIENCES, EDUCATION } from './constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="antialiased selection:bg-brand-cyan-500 selection:text-brand-dark min-h-screen relative">
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <BackgroundEffects />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* Experience is assignable to TimelineItem as it includes a required title property */}
          <Timeline id="experience" title="Professional Experience" items={EXPERIENCES} />
          {/* Mapping degree to title to satisfy TimelineItem interface */}
          <Timeline 
            id="education" 
            title="Educational Background" 
            items={EDUCATION.map(ed => ({
              ...ed,
              title: ed.degree
            }))} 
          />
          <Certifications />
          <Contact />
        </main>

        <footer className="py-8 glass-card border-t border-white/5 text-center mt-12 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-black text-white mb-2 tracking-tighter">
              K.C.<span className="text-brand-cyan-500">.</span>
            </h2>
            <p className="text-brand-lavender/50 text-xs uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} Balaji K.C. Designed & Built with ❤️
            </p>
          </div>
        </footer>

        <AIChatbot />
      </div>
    </div>
  );
};

export default App;
