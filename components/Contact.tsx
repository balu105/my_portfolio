
import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message successfully sent! Balaji will get back to you soon.");
  };

  return (
    <section className="py-32 px-6 relative z-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div data-aos="fade-right">
             <span className="text-brand-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 block">Get in Touch</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something <br /> <span className="text-gradient">Extraordinary</span></h2>
             <p className="text-brand-lavender/80 mb-10 text-lg">
               Whether you have a question, a project proposal, or just want to say hello, I'll try my best to get back to you!
             </p>

             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-brand-cyan-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email Me</h4>
                    <a href="mailto:balajikc89@gmail.com" className="text-brand-lavender hover:text-brand-cyan-400 transition-colors">balajikc89@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-brand-cyan-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Location</h4>
                    <p className="text-brand-lavender">Yemmiganur, Andhra Pradesh, India</p>
                  </div>
                </div>
             </div>
          </div>

          <form className="glass-card p-8 md:p-10 rounded-3xl space-y-6" data-aos="fade-left" onSubmit={handleSubmit}>
             <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
             <div className="space-y-4">
               <input 
                 type="text" 
                 placeholder="Your Name" 
                 required 
                 className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all"
               />
               <input 
                 type="email" 
                 placeholder="Your Email" 
                 required 
                 className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all"
               />
               <textarea 
                 rows={4} 
                 placeholder="Tell me about your project..." 
                 required 
                 className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all resize-none"
               ></textarea>
             </div>
             <button 
               type="submit" 
               className="w-full py-4 bg-gradient-to-r from-brand-cyan-500 to-brand-cyan-400 text-brand-dark font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] flex items-center justify-center gap-2"
             >
               Send Message <Send size={18} />
             </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
