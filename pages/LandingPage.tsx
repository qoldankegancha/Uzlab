import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  AlertTriangle, 
  Smartphone, 
  Globe, 
  Users, 
  DollarSign, 
  Video, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Brain,
  Layers,
  Zap,
  GraduationCap,
  FlaskConical,
  Atom,
  HelpCircle,
  Plus,
  Minus,
  Send,
  Target,
  BarChart as ChartIcon,
  School
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// --- HELPERS ---
const RevealOnScroll = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

// --- DATA ---
const statsData = [
  { name: 'O\'zbekiston', value: 0.03, fill: '#ef4444' }, 
  { name: 'OECD Davlatlari', value: 0.85, fill: '#22d3ee' },
];

const competitors = [
  { 
    name: "UzLab", 
    logo: <FlaskConical className="h-12 w-12 text-cyan-400" />,
    features: ["Realistik 3D muhit", "Har qanday obyekt bilan interaktivlik", "Ijodkorlik erkinligi", "Cross-platform (Web/Mobile)", "Virtual VR imkoniyati"], 
    highlight: true 
  },
  { 
    name: "Cisco Packet Tracer", 
    logo: "CPT",
    features: ["Faqat tarmoq qurilmalari", "2D ish muhiti", "Cheklangan ssenariy"], 
    highlight: false 
  },
  { 
    name: "Matlab", 
    logo: "MAT",
    features: ["Faqat hisob-kitob", "Algoritmlar va formulalar", "Murakkab interfeys"], 
    highlight: false 
  },
];

const teamMembers = [
  { name: "Azizbek Ibrohimov", role: "Project Manager, 3D Artist, Game Dev", image: "https://picsum.photos/300/300?random=1" },
  { name: "Abdulloh Ibrohimov", role: "Backend Developer", image: "https://picsum.photos/300/300?random=2" },
  { name: "Abdulloh Majidov", role: "Tester", image: "https://picsum.photos/300/300?random=3" },
  { name: "Abdurahmon Abdumajidov", role: "Frontend Developer", image: "https://picsum.photos/300/300?random=4" },
];

const timeline = [
  { date: "Iyul 2025", title: "Kollaboratsiya", desc: "Boshqa simulyatorlar va kompaniyalar bilan hamkorlik." },
  { date: "Avgust 2025", title: "Takomillashtirish", desc: "Yangi qurilmalar qo'shish, simulyator fizikasini kuchaytirish." },
  { date: "Sentyabr 2025", title: "Rasmiy Ishga Tushirish", desc: "Platformani ommaga taqdim etish (Public Launch)." },
  { date: "Oktyabr 2025", title: "Shartnomalar", desc: "Universitetlar bilan rasmiy shartnomalar imzolash." },
];

const faqs = [
  { q: "UzLab qaysi platformalarda ishlaydi?", a: "UzLab to'liq web-ga asoslangan (WebAssembly va WebGL). Bu degani u Windows, macOS, Android va iOS qurilmalarida brauzer orqali ishlaydi. Hech qanday og'ir dastur o'rnatish shart emas." },
  { q: "Internet tezligi qanchalik muhim?", a: "Dastlabki yuklanish (caching) uchun internet kerak, keyin esa oflayn rejimda (PWA) ham ishlashi mumkin. Multiplayer rejimi uchun barqaror 3G/4G internet talab qilinadi." },
  { q: "O'qituvchilar uchun qanday imkoniyatlar bor?", a: "O'qituvchilar maxsus 'Admin Panel' orqali o'quvchilarning natijalarini kuzatishi, ularga virtual topshiriqlar berishi va real vaqtda nazorat qilishi mumkin." },
  { q: "Loyihaning ijtimoiy ahamiyati nimada?", a: "Qishloq joylaridagi maktablarda laboratoriya jihozlari yetishmasligi muammosini hal qiladi va ta'lim sifatidagi tengsizlikni kamaytiradi." },
];

// Placeholder Logos for Infinite Scroll
const partners = ["TUIT", "INNO", "Ministry of Digital Tech", "IT Park", "Samsung", "Google for Education", "Coursera", "Udemy"];

const LandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  // Handle scroll on navigation
  useEffect(() => {
    if (location.state && (location.state as any).targetId) {
      const elem = document.getElementById((location.state as any).targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Auto carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroImages = [
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920", // Lab
    "https://images.unsplash.com/photo-1617839625591-e5a7d958c816?auto=format&fit=crop&q=80&w=1920", // VR
    "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1920", // Future Tech
  ];

  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-40' : 'opacity-0'}`}
          >
            <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950"></div>
          </div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-16">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase animate-pulse">
              <Atom className="w-4 h-4 animate-spin-slow" />
              Team Proteus Presents
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-white drop-shadow-[0_0_35px_rgba(34,211,238,0.4)] leading-tight">
              Uz<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Lab</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Kelajak laboratoriyalari. <span className="text-cyan-400 font-semibold">Tasavvur</span> va <span className="text-purple-400 font-semibold">Tajriba</span> chegarasi buzilgan makon.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/demo" className="relative group px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(8,145,178,0.4)] flex items-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Video className="w-6 h-6" />
                MVP-ni Ko'rish
              </Link>
              <button onClick={() => document.getElementById('problem')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-slate-800/50 backdrop-blur border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-400 rounded-xl font-bold text-xl transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                Batafsil
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 1.5 COLLABORATORS (Ticker) */}
      <section className="py-10 bg-slate-950 border-y border-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
             <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Ishonchli Hamkorlar va Qo'llab-quvvatlovchilar</span>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-scroll whitespace-nowrap flex gap-16 py-4">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <span key={i} className="text-2xl font-bold text-gray-700 uppercase hover:text-cyan-500 transition-colors cursor-default select-none">
                {partner}
              </span>
            ))}
          </div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        </div>
      </section>

      {/* 2. THE PROBLEM & FACTS */}
      <section id="problem" className="min-h-screen flex items-center py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full morph-blob"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div>
                <div className="flex items-center gap-3 text-red-500 mb-6">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <span className="font-bold tracking-[0.2em] uppercase text-lg">Global Muammo</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-none">
                  Ta'limdagi <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Raqamli Inqiroz</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                  <p>
                    O'zbekistonda sinfxonalar zamonaviy qurilmalarga chanqoq. Mamlakatda har bir o'quvchiga o'rtacha 
                    <span className="text-white text-3xl font-bold mx-2 border-b-2 border-red-500">0.03</span> 
                    ta kompyuter to'g'ri keladi. Bu degani, bitta kompyuterga 33 nafar o'quvchi navbat kutmoqda.
                  </p>
                  <p>
                    Solishtirish uchun, rivojlangan OECD davlatlarida bu ko'rsatkich deyarli 1:1 ni tashkil qiladi.
                  </p>
                  <div className="p-6 bg-red-950/30 border border-red-500/20 rounded-xl">
                    <p className="text-red-200 font-medium">
                      <span className="text-2xl font-bold block mb-2">⚠ Oqibat:</span> 
                      Yoshlarning <span className="text-white font-bold">90%</span> da aniq fanlarga qiziqish yo'qolgan. 
                      Ular fanni faqat zerikarli kitob va formulalar deb bilishadi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-10 rounded-3xl border border-gray-800 shadow-[0_0_40px_rgba(239,68,68,0.1)] relative">
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm">STATISTIKA 2024</div>
                <h3 className="text-3xl font-bold text-center mb-10 text-gray-200">Kompyuterlar Soni <span className="text-sm font-normal text-gray-500 block mt-2">(har bir o'quvchiga)</span></h3>
                <div className="h-96 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={statsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                      <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 14}} axisLine={false} tickLine={false} />
                      <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                      <Tooltip 
                        cursor={{fill: '#1e293b', opacity: 0.4}}
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                        itemStyle={{ color: '#f8fafc' }}
                      />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]} animationDuration={2000}>
                        {statsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section id="solution" className="min-h-screen flex items-center py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full morph-blob" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase mb-4 block">Innovatsion Yechim</span>
              <h2 className="text-5xl md:text-8xl font-black text-white mb-6">
                Cho'ntagingizdagi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Cheksiz Laboratoriya</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Biz qimmat uskunalarni har bir talabaning smartfoniga ko'chirdik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: Smartphone, title: "Hammaboplik", desc: "Aholining 99.2% da smartfon bor. UzLab laboratoriyani har bir o'quvchining qo'liga olib keladi.", color: "cyan" },
                { icon: Layers, title: "3D Realistik Muhit", desc: "2D sxemalardan voz keching. Haqiqiy fizikaga asoslangan, 3D formatdagi jihozlar bilan xavfsiz tajribalar o'tkazing.", color: "purple" },
                { icon: Brain, title: "AI Ko'makchi", desc: "Murakkab tajribalarda sun'iy intellekt (Gemini) yordamida yo'l-yo'riq oling va xatolarni real vaqtda tahlil qiling.", color: "green" }
              ].map((item, idx) => (
                <div key={idx} className="group p-10 rounded-[2rem] bg-slate-800/30 border border-white/5 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-4 backdrop-blur-sm relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${item.color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  <div className={`w-20 h-20 mx-auto bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-${item.color}-500/20 transition-colors`}>
                    <item.icon className={`w-10 h-10 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white text-center">{item.title}</h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3.5 TARGET AUDIENCE (NEW SECTION) */}
      <section className="py-24 bg-slate-950 relative border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 w-full">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Kimlar Uchun?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Students */}
                <div className="glass-panel p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors group">
                   <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8 text-cyan-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">O'quvchilar va Talabalar</h3>
                   <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" /> Xavfsiz tajribalar</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" /> Zerikarli darslardan qutulish</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" /> Imtihonlarga tayyorgarlik</li>
                   </ul>
                </div>
                {/* Teachers */}
                <div className="glass-panel p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors group">
                   <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-purple-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">O'qituvchilar</h3>
                   <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-500 shrink-0" /> Interaktiv dars o'tish</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-500 shrink-0" /> O'quvchilarni nazorat qilish</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-500 shrink-0" /> Yangi metodika</li>
                   </ul>
                </div>
                {/* Ministry */}
                <div className="glass-panel p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-colors group">
                   <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <School className="w-8 h-8 text-green-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Ta'lim Vazirligi</h3>
                   <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Byudjetni 100x tejash</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Raqamlashtirish (Digitalization)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Ta'lim sifatini oshirish</li>
                   </ul>
                </div>
              </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* 4. WORLDWIDE / COMPETITORS */}
      <section className="min-h-screen py-24 bg-slate-950 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <RevealOnScroll>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-24">Raqobatchilar Tahlili</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {competitors.map((comp, idx) => (
                <div key={idx} className={`relative p-8 rounded-3xl flex flex-col transition-all duration-500 ${comp.highlight ? 'bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500 shadow-[0_0_50px_rgba(34,211,238,0.15)] h-[600px] z-10 scale-105' : 'bg-slate-950 border border-gray-800 h-[500px] hover:border-gray-600'}`}>
                  {comp.highlight && (
                    <div className="absolute top-0 inset-x-0 -mt-5 flex justify-center">
                      <span className="bg-cyan-500 text-slate-950 text-sm font-black px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
                        Eng Yaxshi Tanlov
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-6 mb-10 pt-8">
                    <div className="p-4 bg-slate-800 rounded-2xl">
                       {typeof comp.logo === 'string' ? <span className="text-2xl font-bold">{comp.logo}</span> : comp.logo}
                    </div>
                    <h3 className={`text-2xl font-bold ${comp.highlight ? 'text-white' : 'text-gray-400'}`}>{comp.name}</h3>
                  </div>
                  <div className="flex-grow space-y-6">
                    {comp.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-4">
                        {comp.highlight ? <CheckCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" /> : <XCircle className="w-6 h-6 text-gray-600 shrink-0 mt-0.5" />}
                        <span className={`text-base ${comp.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  {comp.highlight && (
                     <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <span className="text-cyan-400 font-bold text-lg">Kelajak Laboratoriyasi</span>
                     </div>
                  )}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="min-h-screen py-24 bg-slate-900/50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <RevealOnScroll>
            <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">Platforma Imkoniyatlari</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-400 font-black text-3xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">1</div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Virtual Laboratoriya Tanlash</h4>
                      <p className="text-gray-400 text-lg">Fizika, Kimyo yoki Biologiya bo'yicha yuzlab tayyor stendlardan birini tanlang. Har bir stend darsliklarga moslashtirilgan.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-400 font-black text-3xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">2</div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Erkin Ulashtirish Tizimi</h4>
                      <p className="text-gray-400 text-lg">Multimetr, osiloskop, kolbalar va boshqa jihozlarni erkin tartibda ulab, o'z tajribangizni yarating. Hech qanday cheklov yo'q.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-400 font-black text-3xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">3</div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Tahlil va Natija</h4>
                      <p className="text-gray-400 text-lg">Real vaqt rejimida grafiklar, reaksiyalar va fizik hodisalarni kuzating. AI sizga xatolaringizni tushuntirib beradi.</p>
                    </div>
                  </div>
               </div>
               
               <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-700 group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 z-10 pointer-events-none"></div>
                  <img src="https://images.unsplash.com/photo-1629851658392-0b3294c7b20f?auto=format&fit=crop&q=80&w=800" alt="Interface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Floating UI Elements Simulation */}
                  <div className="absolute top-10 left-10 right-10 z-20 flex justify-between">
                     <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-cyan-400 font-mono text-xs">
                        SYS: ONLINE
                     </div>
                     <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-green-400 font-mono text-xs">
                        FPS: 60
                     </div>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 z-20">
                    <div className="bg-slate-950/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/30">
                       <div className="flex items-center gap-4 mb-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                          <span className="text-white font-bold text-sm">AI ANALYSIS RUNNING...</span>
                       </div>
                       <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500 w-2/3 animate-pulse"></div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 7. INCOME / BUSINESS (ENHANCED) */}
      <section id="business" className="min-h-screen py-24 bg-gradient-to-br from-slate-900 to-indigo-950/30 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <RevealOnScroll>
            <h2 className="text-5xl font-bold text-center mb-10 flex items-center justify-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-full">
                <DollarSign className="w-10 h-10 text-green-400" />
              </div>
              Biznes Model va Bozor
            </h2>

            {/* TAM SAM SOM */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto text-center">
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-gray-700">
                    <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-2">TAM (Total Available Market)</h4>
                    <p className="text-3xl font-black text-white">$4.5 Mrd</p>
                    <p className="text-xs text-gray-500 mt-2">Global EdTech (STEM) bozori</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-gray-700">
                    <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-2">SAM (Serviceable Available Market)</h4>
                    <p className="text-3xl font-black text-cyan-400">$120 Mln</p>
                    <p className="text-xs text-gray-500 mt-2">Markaziy Osiyo ta'lim bozori</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.2)] transform scale-105">
                    <h4 className="text-white uppercase tracking-widest text-sm mb-2 font-bold">SOM (Serviceable Obtainable Market)</h4>
                    <p className="text-3xl font-black text-green-400">$15 Mln</p>
                    <p className="text-xs text-gray-300 mt-2">O'zbekiston (10k+ maktablar)</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-cyan-500 hover:bg-cyan-900/10 transition-colors">
                 <GraduationCap className="w-12 h-12 text-cyan-400 mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">B2G (Universitetlar)</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">Oliy ta'lim vazirligi va universitetlar bilan to'g'ridan-to'g'ri shartnomalar. Laboratoriya xarajatlarini 100x kamaytirish taklifi.</p>
              </div>
              <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-purple-500 hover:bg-purple-900/10 transition-colors">
                 <Users className="w-12 h-12 text-purple-400 mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">B2B (Maktablar)</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">Xususiy va davlat maktablari uchun yillik obuna (SaaS). Har bir o'quvchi uchun arzon narx.</p>
              </div>
              <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-green-500 hover:bg-green-900/10 transition-colors">
                 <TrendingUp className="w-12 h-12 text-green-400 mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">Freemium Model</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">Asosiy funksiyalar bepul. Daromad ilova ichidagi reklama (Google AdMob) orqali shakllanadi.</p>
              </div>
              <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-orange-500 hover:bg-orange-900/10 transition-colors">
                 <Zap className="w-12 h-12 text-orange-400 mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-4">Premium & AI</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">Murakkab qurilmalar, VR rejimi va AI yordamchisi uchun oylik obuna to'lovi.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* 7.5 FAQ SECTION (NEW) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
           <RevealOnScroll>
             <h2 className="text-4xl font-bold text-center mb-12">Ko'p Beriladigan Savollar</h2>
             <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-800 rounded-xl overflow-hidden bg-slate-900/50">
                     <button 
                       onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                       className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800 transition-colors"
                     >
                       <span className="font-bold text-white text-lg">{faq.q}</span>
                       {openFaq === idx ? <Minus className="text-cyan-400" /> : <Plus className="text-gray-500" />}
                     </button>
                     <div className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {faq.a}
                     </div>
                  </div>
                ))}
             </div>
           </RevealOnScroll>
        </div>
      </section>

      {/* 6. TEAM */}
      <section id="team" className="min-h-screen py-24 bg-slate-950 flex flex-col justify-center border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center w-full">
          <RevealOnScroll>
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">Proteus Team</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-20 text-white">Bizning Jamoa</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 border-2 border-gray-800 group-hover:border-cyan-500 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-colors z-10"></div>
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase">{member.role}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 8. WALKTHROUGH / TIMELINE */}
      <section className="py-24 bg-slate-950 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-5xl font-bold text-center mb-20">Loyiha Yo'l Xaritasi (2025)</h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden md:block opacity-30"></div>
              
              <div className="space-y-20">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center justify-between gap-10 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-5/12 text-center md:text-left group">
                      <div className="glass-panel p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-cyan-500/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                           <span className="text-6xl font-black text-white">{idx + 1}</span>
                        </div>
                        <span className="text-cyan-400 font-bold tracking-widest text-sm block mb-2 uppercase">{item.date}</span>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 w-12 h-12 rounded-full bg-slate-950 border-4 border-cyan-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="w-full md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 9. MVP Video Section */}
      <section className="py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/10 blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10">MVP Namoyishi</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Gapirish oson. Biz buni ko'rsatamiz. UzLab hozirning o'zida ishlaydigan prototip.
            </p>
            
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_100px_rgba(34,211,238,0.15)] group cursor-pointer bg-slate-900 hover:border-cyan-500 transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Video className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-gray-400 text-lg font-mono">Video Yuklanmoqda... (YouTube Link)</span>
                  </div>
              </div>
            </div>
            
            <div className="mt-16">
              <Link to="/demo" className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black hover:bg-cyan-400 hover:text-black font-black text-xl rounded-full transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transform hover:-translate-y-1">
                TEXNIK TAHLILNI KO'RISH <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 10. CONTACT FORM (NEW) */}
      <section className="py-20 bg-slate-950 border-t border-gray-900">
         <div className="max-w-4xl mx-auto px-4">
            <RevealOnScroll>
              <div className="glass-panel p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  <div className="text-center mb-10">
                     <h2 className="text-3xl font-bold text-white mb-4">Biz Bilan Bog'laning</h2>
                     <p className="text-gray-400">Loyihamizga qiziqdingizmi? Hamkorlik yoki sarmoya uchun xabar qoldiring.</p>
                  </div>

                  <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Ismingiz</label>
                            <input type="text" className="w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Azizbek" />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2">Email Manzil</label>
                            <input type="email" className="w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="email@example.com" />
                         </div>
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-gray-400 mb-2">Xabar Mazmuni</label>
                         <textarea rows={4} className="w-full bg-slate-900 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Loyihangiz bo'yicha taklifim bor..."></textarea>
                      </div>
                      <button type="button" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
                         <Send className="w-5 h-5" /> Xabarni Yuborish
                      </button>
                  </form>
              </div>
            </RevealOnScroll>
         </div>
      </section>

    </div>
  );
};

export default LandingPage;