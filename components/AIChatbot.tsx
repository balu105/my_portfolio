import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
// import { GoogleAI } from '@google/genai';
import { PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS } from '../constants';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! I'm Balaji's AI Assistant. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const portfolioContext = `
    You are an AI assistant for K.C. Balaji's portfolio. 
    Balaji is a B.Tech student in CS & AI at St. John's College.
    Contact Info: Email: balajikc89@gmail.com, Phone: +91 91821 44783, Location: Yemmiganur, Andhra Pradesh.
    Social: LinkedIn: https://www.linkedin.com/in/kandanathi-chittem-balaji/, GitHub: https://github.com/balu105
    Skills: ${SKILLS.map(s => `${s.name} (${s.percentage}%)`).join(', ')}.
    Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}.
    Experience: ${EXPERIENCES.map(e => `${e.title} at ${e.company} (${e.period})`).join('; ')}.
    Education: ${EDUCATION.map(ed => `${ed.degree} at ${ed.institution}`).join('; ')}.
    Certifications: ${CERTIFICATIONS.map(c => c.title).join(', ')}.
    Keep responses helpful, professional, and concise. Refer to Balaji in the third person.
  `;

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Mock response for now - replace with actual API call once import is fixed
      const responses = [
        "Thanks for asking! Balaji is a skilled developer with expertise in Python, React, and AI.",
        "Balaji has worked on several projects including an Attendance Management System and Voice Grammar Corrector.",
        "He's currently pursuing B.Tech in Computer Science & AI at St. John's College.",
        "Balaji has completed internships at SmartInternz (ML) and APSSDC (AWS).",
        "His technical skills include HTML5 (95%), CSS3 (90%), JavaScript (85%), and React (80%)."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botResponse = randomResponse;
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Connection error. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3.5 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-brand-violet rotate-90' : 'bg-brand-cyan-500 shadow-brand-cyan-500/40 animate-bounce'}`}
      >
        {isOpen ? <X size={24} className="md:w-7 md:h-7 text-white" /> : <MessageSquare size={24} className="md:w-7 md:h-7 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[70vh] max-h-[550px] bg-brand-indigo/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-brand-violet/30 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-cyan-500 to-brand-cyan-300 p-4 md:p-6 flex items-center gap-4 shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} className="text-white md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-base text-white">Balaji AI Assistant</h4>
              <p className="text-[10px] md:text-xs text-white/80">Online & ready to help</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-brand-cyan-500' : 'bg-brand-violet'}`}>
                    {m.role === 'user' ? <User size={14} className="md:w-4 md:h-4 text-white" /> : <Bot size={14} className="md:w-4 md:h-4 text-white" />}
                  </div>
                  <div className={`p-3 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${m.role === 'user' ? 'bg-brand-cyan-500 text-white rounded-tr-none' : 'bg-brand-dark/50 border border-brand-violet/20 text-gray-200 rounded-tl-none'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-brand-dark/50 border border-brand-violet/20 p-3 md:p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-brand-cyan-500" />
                  <span className="text-xs md:text-sm text-brand-lavender">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 md:p-4 border-t border-brand-violet/20 bg-brand-dark/80 shrink-0">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me something..."
                className="w-full bg-brand-indigo/30 border border-brand-violet/30 rounded-full py-2.5 md:py-3 pl-5 md:pl-6 pr-12 focus:outline-none focus:border-brand-cyan-500 transition-colors text-xs md:text-sm text-white placeholder-brand-lavender/50"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-brand-cyan-500 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-cyan-400 transition-colors"
              >
                <Send size={14} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;