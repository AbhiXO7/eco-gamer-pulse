
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Ripple {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

const Interactive = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [darkMode, setDarkMode] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples(prev => prev.filter(ripple => Date.now() - ripple.timestamp < 2000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const newRipple: Ripple = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        id: Date.now(),
        timestamp: Date.now()
      };
      setRipples(prev => [...prev, newRipple]);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen relative overflow-hidden cursor-pointer transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
          : 'bg-gradient-to-br from-white via-purple-50 to-blue-50'
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className={`absolute pointer-events-none rounded-full animate-ping ${
            darkMode ? 'bg-green-400/20' : 'bg-purple-500/20'
          }`}
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: '50px',
            height: '50px',
            animationDuration: '2s'
          }}
        />
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-30 animate-pulse ${
              darkMode ? 'bg-green-400' : 'bg-purple-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <button
          onClick={() => navigate('/')}
          className={`absolute top-6 left-6 flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
            darkMode
              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
              : 'bg-purple-500/20 text-purple-600 hover:bg-purple-500/30'
          }`}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className={`text-center backdrop-blur-lg rounded-3xl p-12 border ${
          darkMode 
            ? 'bg-black/30 border-green-500/20' 
            : 'bg-white/30 border-purple-200/50'
        }`}>
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
            darkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-green-600'
          }`}>
            Interactive Space
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Move your cursor to create ripple effects
          </p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-400 hover:to-blue-400'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500'
            }`}
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interactive;
