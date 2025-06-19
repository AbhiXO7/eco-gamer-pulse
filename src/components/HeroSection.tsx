
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  const scrollToNext = () => {
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 z-10 ${
          darkMode 
            ? 'bg-gradient-to-br from-black/70 via-green-900/20 to-purple-900/30' 
            : 'bg-gradient-to-br from-white/60 via-purple-100/40 to-green-100/40'
        }`} />
      </div>
      
      {/* Floating Gaming Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 text-4xl opacity-20 animate-bounce">🎮</div>
        <div className="absolute top-40 right-20 text-3xl opacity-30 animate-pulse">⚡</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce delay-300">🌍</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-25 animate-pulse delay-500">🏆</div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className={`backdrop-blur-lg rounded-3xl p-12 border ${
          darkMode 
            ? 'bg-black/30 border-green-500/20' 
            : 'bg-white/30 border-purple-200/50'
        }`}>
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
            darkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-green-600'
          }`}>
            Level Up Your Game
          </h1>
          <h2 className={`text-3xl md:text-5xl font-semibold mb-8 ${
            darkMode ? 'text-green-300' : 'text-purple-700'
          }`}>
            Power Down Your Impact
          </h2>
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Track your gaming hours, monitor energy consumption, and reduce your carbon footprint 
            while achieving epic gaming milestones. Join the eco-gaming revolution!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToNext}
              className={`group inline-flex items-center space-x-3 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 ${
                darkMode
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-400 hover:to-blue-400 shadow-lg shadow-green-500/25'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/25'
              }`}
            >
              <span>Track Your Impact</span>
              <ChevronDown className="animate-bounce group-hover:animate-none" size={24} />
            </button>

            <button
              onClick={() => navigate('/interactive')}
              className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full text-xl font-semibold border-2 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 ${
                darkMode
                  ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
              }`}
            >
              <span>Interactive Experience</span>
              <span className="text-2xl">✨</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className={`animate-bounce ${darkMode ? 'text-green-400' : 'text-purple-600'}`} size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
