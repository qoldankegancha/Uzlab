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
  School,
  Code,
  Database,
  Cpu,
  Linkedin,
  Github
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

// Requirement 2: Team (Roles, Skills, Stack, Links)
const teamMembers = [
  { 
    name: "Azizbek Ibrohimov", 
    role: "Team Lead & PM", 
    skills: "Project Management, 3D Modeling, Game Design",
    stack: "Blender, Unity, Jira, Figma",
    image: "https://picsum.photos/300/300?random=1",
    linkedin: "#",
    github: "#"
  },
  { 
    name: "Abdulloh Ibrohimov", 
    role: "Backend Lead", 
    skills: "Server Architecture, API Design, Security",
    stack: "Node.js, Python, PostgreSQL, Redis",
    image: "https://picsum.photos/300/300?random=2",
    linkedin: "#",
    github: "#"
  },
  { 
    name: "Abdurahmon Abdumajidov", 
    role: "Frontend Developer", 
    skills: "UI/UX Implementation, WebGL, Optimization",
    stack: "React, Three.js, Tailwind, TypeScript",
    image: "https://picsum.photos/300/300?random=4",
    linkedin: "#",
    github: "#"
  },
  { 
    name: "Abdulloh Majidov", 
    role: "QA & Tester", 
    skills: "Automated Testing, Bug Tracking, UX Research",
    stack: "Selenium, Cypress, Jest",
    image: "https://picsum.photos/300/300?random=3",
    linkedin: "#",
    github: "#"
  },
];

// Requirement 4: Roadmap (Idea / Prototype / MVP / Launched)
const timeline = [
  { 
    date: "Q1 2025", 
    label: "Idea (G'oya)", 
    title: "Tadqiqot va Tahlil", 
    desc: "Muammoni aniqlash, bozor tahlili, raqobatchilarni o'rganish va dastlabki arxitektura rejasini tuzish." 
  },
  { 
    date: "Q2 2025", 
    label: "Prototype (Prototip)", 
    title: "Dizayn va 3D", 
    desc: "UI/UX dizayni (Figma), 3D laboratoriya modellari (Blender) va 'Proof of Concept' darajasidagi ilk versiya." 
  },
  { 
    date: "Q3 2025", 
    label: "MVP (Joriy Holat)", 
    title: "Asosiy Funksional", 
    desc: "Fizika moduli, real vaqt rejimidagi simulyatsiya, AI integratsiyasi va test rejimidagi ishga tushirish." 
  },
  { 
    date: "Q4 2025", 
    label: "Launched (To'liq Versiya)", 
    title: "Masshtablash", 
    desc: "Kimyo va Biologiya modullari, Android/iOS ilovalar, maktablar bilan rasmiy shartnomalar." 
  },
];

const faqs = [
  { q: "UzLab qaysi platformalarda ishlaydi?", a: "UzLab to'liq web-ga asoslangan (WebAssembly va WebGL). Bu degani u Windows, macOS, Android va iOS qurilmalarida brauzer orqali ishlaydi. Hech qanday og'ir dastur o'rnatish shart emas." },
  { q: "Internet tezligi qanchalik muhim?", a: "Dastlabki yuklanish (caching) uchun internet kerak, keyin esa oflayn rejimda (PWA) ham ishlashi mumkin. Multiplayer rejimi uchun barqaror 3G/4G internet talab qilinadi." },
  { q: "O'qituvchilar uchun qanday imkoniyatlar bor?", a: "O'qituvchilar maxsus 'Admin Panel' orqali o'quvchilarning natijalarini kuzatishi, ularga virtual topshiriqlar berishi va real vaqtda nazorat qilishi mumkin." },
  { q: "Loyihaning ijtimoiy ahamiyati nimada?", a: "Qishloq joylaridagi maktablarda laboratoriya jihozlari yetishmasligi muammosini hal qiladi va ta'lim sifatidagi tengsizlikni kamaytiradi." },
];

const partners = ["TUIT", "INNO", "Ministry of Digital Tech", "IT Park", "Samsung", "Google for Education", "Coursera", "Udemy"];

const LandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).targetId) {
      const elem = document.getElementById((location.state as any).targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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

      {/* 1.5 COLLABORATORS */}
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
        </div>
      </section>

      {/* 2. THE PROBLEM (Muammo) */}
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
                  <span className="font-bold tracking-[0.2em] uppercase text-lg">Muammo (Problem)</span>
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

      {/* 3. SOLUTION (Yechim) */}
      <section id="solution" className="min-h-screen flex items-center py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full morph-blob" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase mb-4 block">Yechim (Solution)</span>
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

      {/* 5. IMPLEMENTATION STRATEGY (NEW REQ 5) */}
      <section className="py-24 bg-slate-900 border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 w-full">
           <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                 Amalga Oshirish Rejasi va <span className="text-cyan-400">Texnologiyalar</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 {/* Text Steps */}
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center shrink-0 border border-cyan-500/30">
                          <Code className="w-6 h-6 text-cyan-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-2">Frontend & 3D (Core)</h3>
                          <p className="text-gray-400 text-sm">Biz <span className="text-white font-medium">React</span> va <span className="text-white font-medium">Three.js (React Three Fiber)</span> yordamida brauzerning o'zida yuqori sifatli 3D renderlashga erishamiz. Bu har qanday qurilmada ishlash imkonini beradi.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center shrink-0 border border-purple-500/30">
                          <Database className="w-6 h-6 text-purple-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-2">Backend & Multiplayer</h3>
                          <p className="text-gray-400 text-sm"><span className="text-white font-medium">Node.js</span> va <span className="text-white font-medium">Socket.IO</span> texnologiyalari orqali o'qituvchi va o'quvchi bir xonada real vaqtda birgalikda tajriba o'tkazishi mumkin.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center shrink-0 border border-green-500/30">
                          <Brain className="w-6 h-6 text-green-400" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-2">AI Integration</h3>
                          <p className="text-gray-400 text-sm"><span className="text-white font-medium">Google Gemini API</span> yordamida har bir talabaga shaxsiy "laborant" yordamchi biriktiriladi. U xatolarni tahlil qiladi va nazariy bilim beradi.</p>
                       </div>
                    </div>
                 </div>

                 {/* Visual Stack */}
                 <div className="glass-panel p-8 rounded-3xl border border-gray-800">
                    <h3 className="text-center font-mono text-gray-500 uppercase tracking-widest mb-8">Tech Stack</h3>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition-colors">
                          <div className="font-bold text-cyan-400">React + Vite</div>
                          <div className="text-xs text-gray-500">Framework</div>
                       </div>
                       <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition-colors">
                          <div className="font-bold text-orange-400">Three.js</div>
                          <div className="text-xs text-gray-500">3D Engine</div>
                       </div>
                       <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition-colors">
                          <div className="font-bold text-green-400">Node.js</div>
                          <div className="text-xs text-gray-500">Server</div>
                       </div>
                       <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition-colors">
                          <div className="font-bold text-blue-400">Gemini AI</div>
                          <div className="text-xs text-gray-500">Intelligence</div>
                       </div>
                       <div className="bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700 transition-colors col-span-2">
                          <div className="font-bold text-purple-400">WebAssembly</div>
                          <div className="text-xs text-gray-500">High Performance Physics</div>
                       </div>
                    </div>
                 </div>
              </div>
           </RevealOnScroll>
        </div>
      </section>

      {/* 6. TEAM (Requirement 2 & 3) */}
      <section id="team" className="min-h-screen py-24 bg-slate-950 flex flex-col justify-center border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center w-full">
          <RevealOnScroll>
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">Proteus Team</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white">Bizning Jamoa</h2>
            
            {/* Requirement 2: Roles, Skills, Stack, Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="group relative bg-slate-900 rounded-[2rem] p-6 border border-gray-800 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm font-bold tracking-wide uppercase mb-4">{member.role}</p>
                  
                  <div className="text-left space-y-2 mb-6">
                     <div className="text-xs text-gray-400"><span className="text-gray-200 font-semibold">Skills:</span> {member.skills}</div>
                     <div className="text-xs text-gray-400"><span className="text-gray-200 font-semibold">Stack:</span> {member.stack}</div>
                  </div>

                  <div className="flex justify-center gap-4">
                     <a href={member.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                     <a href={member.github} className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirement 3: Why Us? */}
            <div className="max-w-4xl mx-auto glass-panel p-10 rounded-3xl border border-cyan-900 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
               <h3 className="text-3xl font-bold text-white mb-6">Nima uchun aynan bizning jamoa?</h3>
               <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "Proteus" jamoasi shunchaki dasturchilar guruhi emas. Bizda <span className="text-cyan-400 font-bold">10+ yillik pedagogik tajriba</span> va <span className="text-cyan-400 font-bold">zamonaviy GameDev</span> ko'nikmalari birlashgan. 
                  Biz nafaqat kod yozamiz, balki o'quvchi psixologiyasini tushunamiz. Murakkab fizika qonunlarini o'yin shaklida (Gamification) yetkazib berish — bizning eng kuchli tomonimiz.
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-bold text-gray-300">Pedagogik Ekspertiza</span>
                  <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-bold text-gray-300">3D Graphics Pro</span>
                  <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-bold text-gray-300">Full-Stack Engineering</span>
               </div>
            </div>

          </RevealOnScroll>
        </div>
      </section>

      {/* 8. ROADMAP (Requirement 4: Idea / Prototype / MVP / Launched) */}
      <section className="py-24 bg-slate-950 border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-5xl font-bold text-center mb-20">Yo'l Xaritasi (Roadmap)</h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden md:block opacity-30"></div>
              
              <div className="space-y-20">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center justify-between gap-10 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-5/12 text-center md:text-left group">
                      <div className={`glass-panel p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 border ${item.label.includes("MVP") ? 'border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'border-gray-800'} relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                           <span className="text-6xl font-black text-white">{idx + 1}</span>
                        </div>
                        <span className={`font-bold tracking-widest text-sm block mb-2 uppercase ${item.label.includes("MVP") ? 'text-cyan-400' : 'text-gray-500'}`}>{item.date}</span>
                        <div className="mb-2 inline-block px-3 py-1 bg-slate-900 rounded-lg text-xs font-mono text-cyan-400 border border-cyan-900">{item.label}</div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    
                    <div className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center shrink-0 shadow-xl ${item.label.includes("MVP") ? 'bg-cyan-600 border-cyan-300' : 'bg-slate-950 border-gray-600'}`}>
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
                        <Video className="w-10 h-10 text-white" src="https://youtu.be/UHZx4yuRtUg" />
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

      {/* 7. INCOME / BUSINESS (Moved down for flow) */}
      <section id="business" className="min-h-screen py-24 bg-gradient-to-br from-slate-900 to-indigo-950/30 flex items-center border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <RevealOnScroll>
            <h2 className="text-5xl font-bold text-center mb-10 flex items-center justify-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-full">
                <DollarSign className="w-10 h-10 text-green-400" />
              </div>
              Biznes Model
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
          </RevealOnScroll>
        </div>
      </section>

      {/* 10. CONTACT FORM */}
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
