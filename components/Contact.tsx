import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'balajikc89@gmail.com',
      href: 'mailto:balajikc89@gmail.com',
      color: 'brand-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: '+91 91821 44783',
      href: 'tel:+919182144783',
      color: 'brand-purple'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Yemmiganur, Andhra Pradesh',
      href: '#',
      color: 'brand-violet'
    }
  ];

  return (
    <section className="section-container" id="contact">
      <div className="section-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-cyan-500/30 bg-brand-cyan-500/10 text-brand-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
          <MessageCircle className="w-4 h-4" />
          Get in Touch
        </div>
        <h2 className="section-title">
          Let's Create Something <span className="text-gradient">Extraordinary</span>
        </h2>
        <p className="section-subtitle">
          Ready to bring your ideas to life? Let's discuss your next project and make it happen together.
        </p>
      </div>

      <div className="grid-responsive-2 items-start gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-full glass-card flex items-center justify-center text-${info.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-brand-lavender/70 group-hover:text-brand-cyan-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-cyan-500">
            <h3 className="text-lg font-bold text-white mb-3">Quick Response</h3>
            <p className="text-brand-lavender/70 text-sm leading-relaxed">
              I typically respond within 24 hours. For urgent matters, feel free to call me directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="glass-card p-8 rounded-2xl space-y-6" onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 mb-6">
            <Send className="w-6 h-6 text-brand-cyan-500" />
            <h3 className="text-xl font-bold text-white">Send a Message</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all"
            />
          </div>
          
          <input 
            type="text" 
            placeholder="Subject" 
            required 
            className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all"
          />
          
          <textarea 
            rows={5} 
            placeholder="Tell me about your project or just say hello..." 
            required 
            className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={isSubmitted}
            className={`w-full py-3 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
              isSubmitted 
                ? 'bg-green-500 text-white' 
                : 'btn-primary hover:scale-[1.02]'
            }`}
          >
            {isSubmitted ? (
              <>
                <CheckCircle size={18} /> Message Sent!
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;