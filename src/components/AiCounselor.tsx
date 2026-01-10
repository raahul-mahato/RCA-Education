
import React, { useState, useRef, useEffect } from 'react';
import { getAiCourseRecommendation } from '../services/geminiService';

const AiCounselor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am your RCA AI Career Counselor. Which competitive exam are you planning for?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const botResponse = await getAiCourseRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || "I encountered an error." }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-rca-orange text-white rounded-full shadow-2xl z-50 flex items-center justify-center hover:scale-110 transition-transform ring-4 ring-rca-orange/20"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'} text-2xl`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-50 animate-slideUp">
          <div className="bg-rca-blue p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-magic text-rca-orange"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm">RCA EDUCATION</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-white/70 uppercase">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow p-4 space-y-4 overflow-y-auto max-h-[400px] min-h-[300px] bg-gray-50"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-rca-blue text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about courses, exams..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rca-blue/20 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-2 bg-rca-orange text-white rounded-full hover:bg-orange-600 disabled:opacity-50 transition-colors"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
            <p className="text-[9px] text-center text-gray-400 mt-2">Powered by RCA AI</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AiCounselor;
