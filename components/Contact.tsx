
import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');

    try {
      // Using Formspree endpoint
      const response = await fetch("https://formspree.io/f/mnjnlaae", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Adding a subject field which appears in the email body or subject depending on configuration
          subject: `Portfolio Contact from ${formData.name}`
        })
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Form error:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus('error');
    }
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
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-brand-cyan-500 group-hover:bg-brand-cyan-500 group-hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Email Me</h4>
                    <a href="mailto:balajikc89@gmail.com" className="text-brand-lavender hover:text-brand-cyan-400 transition-colors">balajikc89@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-brand-cyan-500 group-hover:bg-brand-cyan-500 group-hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Location</h4>
                    <p className="text-brand-lavender">Yemmiganur, Andhra Pradesh, India</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
               {status === 'success' ? (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark/90 backdrop-blur-sm z-20 animate-pulse-glow">
                   <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle size={40} className="text-green-500" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                   <p className="text-brand-lavender text-center max-w-xs">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                   <button 
                     onClick={() => setStatus('idle')}
                     className="mt-8 text-sm font-bold text-brand-cyan-500 hover:text-white transition-colors"
                   >
                     Send another message
                   </button>
                 </div>
               ) : null}

               <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                 <div className="space-y-2">
                   <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-lavender/70 ml-1">Your Name</label>
                   <input 
                     type="text" 
                     name="name"
                     id="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="John Doe" 
                     required 
                     disabled={status === 'submitting'}
                     className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all disabled:opacity-50"
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-brand-lavender/70 ml-1">Your Email</label>
                   <input 
                     type="email" 
                     name="email"
                     id="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="john@example.com" 
                     required 
                     disabled={status === 'submitting'}
                     className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all disabled:opacity-50"
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-lavender/70 ml-1">Message</label>
                   <textarea 
                     name="message"
                     id="message"
                     rows={4} 
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Tell me about your project..." 
                     required 
                     disabled={status === 'submitting'}
                     className="w-full bg-brand-dark/40 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-brand-cyan-500 focus:bg-brand-dark/60 transition-all resize-none disabled:opacity-50"
                   ></textarea>
                 </div>

                 {status === 'error' && (
                   <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl text-sm">
                     <AlertCircle size={16} />
                     <span>Something went wrong. Please try again or email me directly.</span>
                   </div>
                 )}

                 <button 
                   type="submit" 
                   disabled={status === 'submitting'}
                   className="w-full py-4 bg-gradient-to-r from-brand-cyan-500 to-brand-cyan-400 text-brand-dark font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {status === 'submitting' ? (
                     <>
                       <Loader2 size={20} className="animate-spin" /> Sending...
                     </>
                   ) : (
                     <>
                       Send Message <Send size={18} />
                     </>
                   )}
                 </button>
               </form>
            </div>
            
            {/* Decorative element behind form */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
