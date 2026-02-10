import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: "Assalomu alaykum! Men UzLab AI yordamchisiman. Loyihamiz, jamoamiz yoki texnologiyalarimiz haqida istalgan savolingizni bering.", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    
    // Mock AI Response Logic based on keywords
    setTimeout(() => {
        let botResponse = "Uzr, men hozircha prototip rejimdaman. Savolingizni tushunmadim, lekin loyiha taqdimotini ko'rib chiqishingizni tavsiya qilaman!";
        const lower = userMsg.toLowerCase();
        
        if (lower.includes("narx") || lower.includes("pul") || lower.includes("biznes")) {
            botResponse = "UzLab 'Freemium' modelida ishlaydi. Maktablar uchun B2B obuna, talabalar uchun bepul (reklama bilan) va Premium funksiyalar mavjud. Bozor hajmi (TAM) $4.5 mlrd.";
        } else if (lower.includes("texnologiya") || lower.includes("stack") || lower.includes("dastur")) {
            botResponse = "Bizning stack: Frontend - React & Three.js (WebGL), Backend - Node.js & Python, AI - Google Gemini API. Bu bizga brauzerda realistik 3D tajribani ta'minlash imkonini beradi.";
        } else if (lower.includes("jamoa") || lower.includes("team") || lower.includes("kim")) {
            botResponse = "Jamoamiz Proteus deb nomlanadi. Bizda kuchli Project Manager, 3D Artist, Backend va Frontend dasturchilar bor. Bizning ustunligimiz - ta'lim va texnologiyani birlashtira olishimizda.";
        } else if (lower.includes("maqsad") || lower.includes("muammo")) {
            botResponse = "Maqsadimiz - har bir o'quvchi uchun shaxsiy laboratoriya yaratish. O'zbekistondagi maktablarda jihozlar yetishmovchiligini raqamli yechim orqali hal qilamiz.";
        } else if (lower.includes("salom") || lower.includes("qalaysiz")) {
            botResponse = "Vaalaykum assalom! Kayfiyatlar a'lo. Sizga qanday yordam bera olaman?";
        }

        setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
       {/* Chat Window */}
       {isOpen && (
         <div className="mb-4 w-80 md:w-96 h-96 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-4 flex justify-between items-center border-b border-white/10">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                      <h3 className="text-white font-bold text-sm">UzLab AI Assistant</h3>
                      <span className="text-green-400 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                      </span>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
               </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
               {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                     <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.isBot 
                        ? 'bg-slate-800 text-gray-200 rounded-tl-none border border-gray-700' 
                        : 'bg-cyan-600 text-white rounded-tr-none shadow-lg'
                     }`}>
                        {msg.text}
                     </div>
                  </div>
               ))}
               <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-gray-800 flex gap-2">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Savolingizni yozing..."
                 className="flex-1 bg-slate-900 text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-gray-800 placeholder-gray-500"
               />
               <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-xl transition-colors">
                  <Send className="w-5 h-5" />
               </button>
            </form>
         </div>
       )}

       {/* Toggle Button */}
       <button 
         onClick={() => setIsOpen(!isOpen)}
         className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300 hover:scale-110"
       >
          <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30"></div>
          {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
          
          {/* Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          )}
       </button>
    </div>
  );
};

export default AIChatbot;