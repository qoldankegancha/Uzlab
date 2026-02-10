import React from 'react';
import { Github, Play, Cpu, Code, Database, Globe } from 'lucide-react';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      
      {/* Header Space */}
      <div className="h-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video Player Section */}
        <div className="mb-12">
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.2)] border border-gray-800">
            {/* Placeholder for actual video */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
               <div className="text-center">
                 <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                 </div>
                 <p className="text-gray-400">MVP Video Namoyishi</p>
                 <p className="text-xs text-gray-600 mt-2">(YouTube havola joylanadi)</p>
               </div>
            </div>
          </div>
        </div>

        {/* Title Block */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4">Uz<span className="text-cyan-400">Lab</span> MVP</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovatsion virtual laboratoriya platformasining texnik tahlili va imkoniyatlari.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Section 1 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-cyan-500">
            <h2 className="text-2xl font-bold text-white mb-4">Videoda nima ko‘rsatilgan?</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Ushbu MVP (Minimal Viable Product) namoyishida biz UzLab platformasining asosiy funksionalligini taqdim etamiz. 
              Foydalanuvchi tizimga kirgach, to'liq 3D muhitdagi laboratoriya xonasiga tushadi. 
              Video davomida elektr zanjirlarini yig'ish jarayoni, real vaqt rejimida ishlaydigan fizik qonuniyatlar (Om qonuni) 
              va asboblar (ampermetr, voltmetr) ko'rsatilgan. Shuningdek, ko'p foydalanuvchili (multiplayer) rejimda 
              o'qituvchi va talabaning bir vaqtning o'zida hamkorlik qilishi aks ettirilgan.
            </p>
          </div>

          {/* Section 2 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-purple-500">
            <h2 className="text-2xl font-bold text-white mb-4">Muammo va yechimga bog‘liqligi</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              O'zbekistonda 0.03% kompyuter/talaba nisbati va qimmatbaho jihozlar yetishmovchiligi muammosiga javoban, 
              UzLab har bir smartfonda ishlaydigan yechimni taklif qiladi. Videoda ko'rsatilganidek, talaba qimmat osiloskopni 
              sotib olishi yoki buzib qo'yishdan qo'rqishi shart emas. Virtual muhit xavfsiz va cheksiz tajriba o'tkazish imkonini beradi. 
              Bu 90% qiziqishi so'ngan yoshlarni fanga qaytarishning eng samarali vizual usulidir.
            </p>
          </div>

          {/* Section 3 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-green-500 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Ishlatilgan Texnologiyalar (Stack) va AI</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" /> Core Tech
                  </h3>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li><span className="text-white">Frontend:</span> React + TypeScript (UI/UX)</li>
                    <li><span className="text-white">3D Engine:</span> Three.js / WebGL (brauzerda render qilish uchun)</li>
                    <li><span className="text-white">Styling:</span> Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                   <h3 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4" /> Backend & AI
                  </h3>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    <li><span className="text-white">Server:</span> Node.js / Python (Socket.IO multiplayer uchun)</li>
                    <li><span className="text-white">AI Solution:</span> Gemini API integratsiyasi - talabalarga tajriba davomida aqlli maslahatlar berish va xatolarni tahlil qilish uchun.</li>
                  </ul>
                </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-orange-500 md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">Loyiha Holati</h2>
                <p className="text-gray-300 text-sm">
                    Hozirgi kunda MVP tayyor. Asosiy fizika moduli ishga tushirilgan. 
                    Jamoamiz ayni damda Kimyo moduli ustida ishlamoqda va Server arxitekturasini optimallashtirmoqda.
                </p>
            </div>
            <div className="flex gap-4">
                 <a href="#" className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-black border border-gray-700 hover:border-white rounded-lg transition-all text-white font-medium">
                    <Github className="w-5 h-5" />
                    GitHub Repo
                 </a>
                 <a href="#" className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-all text-white font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    <Globe className="w-5 h-5" />
                    Live Demo
                 </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DemoPage;