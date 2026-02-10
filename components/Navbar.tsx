import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FlaskConical, Globe, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Muammo', id: 'problem' },
    { name: 'Yechim', id: 'solution' },
    { name: 'Biznes', id: 'business' },
    { name: 'Jamoa', id: 'team' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { targetId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isDemo = location.pathname === '/demo';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <FlaskConical className="h-9 w-9 text-cyan-400 group-hover:text-white transition-colors z-10 relative" />
              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <span className="text-2xl font-black tracking-widest text-white uppercase" style={{ fontFamily: 'Orbitron' }}>
              Uz<span className="text-cyan-400">Lab</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {!isDemo && navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-300 hover:text-cyan-400 text-sm font-bold tracking-widest transition-all duration-300 uppercase hover:scale-110"
              >
                {link.name}
              </button>
            ))}
            
            <div className="h-6 w-px bg-gray-700 mx-2"></div>

            {/* Language & Login */}
            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-bold">
              <Globe className="w-4 h-4" /> UZ
            </button>

            {!isDemo && (
              <button className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm font-bold bg-slate-800/50 px-4 py-2 rounded-lg border border-transparent hover:border-cyan-500/50">
                <LogIn className="w-4 h-4" /> Kirish
              </button>
            )}

            <Link
              to={isDemo ? "/" : "/demo"}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] tracking-wider flex items-center gap-2"
            >
              {isDemo ? "ASOSIY" : "MVP DEMO"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-cyan-500/20 animate-fade-in-down absolute w-full bg-slate-950/95 backdrop-blur-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {!isDemo && navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-300 hover:text-cyan-400 block w-full text-left px-3 py-4 rounded-lg hover:bg-white/5 text-base font-bold uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <div className="border-t border-gray-800 my-2 pt-2">
               <button className="text-gray-300 hover:text-white block w-full text-left px-3 py-3 font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4" /> O'zbek tili
               </button>
               <button className="text-gray-300 hover:text-white block w-full text-left px-3 py-3 font-bold flex items-center gap-2">
                  <LogIn className="w-4 h-4" /> Tizimga kirish
               </button>
            </div>
            <Link
              to={isDemo ? "/" : "/demo"}
              onClick={() => setIsOpen(false)}
              className="bg-cyan-600 text-white block px-3 py-4 rounded-lg text-center text-base font-bold uppercase tracking-wider mt-4"
            >
              {isDemo ? "ASOSIY SAHIFA" : "MVP DEMO"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;