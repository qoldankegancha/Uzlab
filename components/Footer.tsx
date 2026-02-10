import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <span className="text-3xl font-bold tracking-wider text-white block mb-4">
              Uz<span className="text-cyan-400">Lab</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Proteus jamoasi tomonidan ishlab chiqilgan kelajak ta'lim platformasi. 
              Tasavvur va tajriba uchrashadigan makon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Sahifalar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Bosh sahifa</a></li>
              <li><a href="#solution" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Yechimlar</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Jamoa</a></li>
              <li><a href="#/demo" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Demo</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Aloqa</h3>
             <ul className="space-y-3">
               <li className="flex items-center space-x-3 text-gray-400 text-sm">
                 <Phone className="h-4 w-4 text-cyan-500" />
                 <span>+998 94 087 05 09</span>
               </li>
               <li className="flex items-center space-x-3 text-gray-400 text-sm">
                 <Mail className="h-4 w-4 text-cyan-500" />
                 <span>tuitgraphics@gmail.com</span>
               </li>
               <li className="flex items-center space-x-3 text-gray-400 text-sm">
                 <Send className="h-4 w-4 text-cyan-500" />
                 <span>@ibrokhimov_org</span>
               </li>
               <li className="flex items-center space-x-3 text-gray-400 text-sm">
                 <MapPin className="h-4 w-4 text-cyan-500" />
                 <span>Toshkent, O'zbekiston</span>
               </li>
             </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Ijtimoiy tarmoqlar</h3>
            <div className="flex space-x-4">
               <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors text-white">
                 <Github className="h-5 w-5" />
               </a>
               <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors text-white">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors text-white">
                 <Send className="h-5 w-5" />
               </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              © 2025 Proteus Team. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;