
import React from 'react';
import { Github, Twitter, Discord, Mail, Sun, Moon } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, toggleDarkMode }) => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Discord, href: '#', label: 'Discord' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer id="contact" className={`py-16 px-6 border-t ${
      darkMode
        ? 'bg-black/50 border-green-500/20'
        : 'bg-white/50 border-purple-200/50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent mb-4">
              🎮 Gamer's Energy Hub
            </div>
            <p className={`text-lg mb-6 max-w-md ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Level up your gaming while powering down your environmental impact. 
              Join the eco-gaming revolution today!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    darkMode
                      ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                      : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Dashboard', 'Badges', 'Community', 'Tips'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`transition-colors duration-300 ${
                      darkMode
                        ? 'text-gray-400 hover:text-green-400'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Resources
            </h3>
            <ul className="space-y-2">
              {['Energy Guide', 'Carbon Calculator', 'Gaming Tips', 'Support'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`transition-colors duration-300 ${
                      darkMode
                        ? 'text-gray-400 hover:text-green-400'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between ${
          darkMode ? 'border-green-500/20' : 'border-purple-200/50'
        }`}>
          <p className={`text-sm mb-4 md:mb-0 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2024 Gamer's Energy Hub. Level up responsibly. 🌍
          </p>
          
          <div className="flex items-center space-x-4">
            <span className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Theme
            </span>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                  : 'bg-gray-800/20 text-gray-800 hover:bg-gray-800/30'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
