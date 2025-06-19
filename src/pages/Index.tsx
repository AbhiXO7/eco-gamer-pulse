import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Dashboard from '../components/Dashboard';
import BadgesSection from '../components/BadgesSection';
import InteractiveTextSection from '../components/InteractiveTextSection';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

interface MouseTrail {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [mouseTrail, setMouseTrail] = useState<MouseTrail[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(true); // Default to dark mode for gaming aesthetic
    }
    
    // Initialize particles
    initializeParticles();
  }, []);

  const initializeParticles = () => {
    const newParticles: FloatingParticle[] = [];
    const colors = ['#22c55e', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'];
    
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.2
      });
    }
    setParticles(newParticles);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add to mouse trail
      const newTrail: MouseTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        timestamp: Date.now()
      };
      
      setMouseTrail(prev => [...prev.slice(-10), newTrail]);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;
        let newVx = particle.vx;
        let newVy = particle.vy;

        // Mouse attraction
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 1000;
          newVx += (dx / distance) * force;
          newVy += (dy / distance) * force;
        }

        // Boundary bouncing
        if (newX <= 0 || newX >= window.innerWidth) newVx *= -0.8;
        if (newY <= 0 || newY >= window.innerHeight) newVy *= -0.8;

        // Keep within bounds
        newX = Math.max(0, Math.min(window.innerWidth, newX));
        newY = Math.max(0, Math.min(window.innerHeight, newY));

        // Add some friction
        newVx *= 0.99;
        newVy *= 0.99;

        return {
          ...particle,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy
        };
      }));

      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  // Clean up old mouse trail
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseTrail(prev => prev.filter(trail => Date.now() - trail.timestamp < 1000));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen transition-all duration-1000 relative overflow-x-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' 
          : 'bg-gradient-to-br from-white via-purple-50 to-blue-50 text-gray-900'
      }`}
      style={{
        background: darkMode 
          ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.1) 0%, transparent 50%), linear-gradient(${scrollY * 0.1}deg, #000000, #1a1a1a, #000000)`
          : `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.1) 0%, transparent 50%), linear-gradient(${scrollY * 0.1}deg, #ffffff, #f8fafc, #ffffff)`
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dynamic Parallax Shapes */}
        <div 
          className={`absolute w-96 h-96 rounded-full opacity-5 blur-3xl transition-all duration-1000 ${
            darkMode ? 'bg-green-500' : 'bg-purple-500'
          }`}
          style={{ 
            left: `${20 + mousePos.x * 0.02}%`,
            top: `${10 + scrollY * 0.1}px`,
            transform: `rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`
          }}
        />
        <div 
          className={`absolute w-64 h-64 rounded-full opacity-10 blur-2xl transition-all duration-700 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-500'
          }`}
          style={{ 
            right: `${15 + mousePos.y * 0.015}%`,
            top: `${20 + scrollY * 0.15}px`,
            transform: `rotate(${-scrollY * 0.05}deg)`
          }}
        />
        <div 
          className={`absolute w-80 h-80 rounded-full opacity-5 blur-3xl transition-all duration-500 ${
            darkMode ? 'bg-purple-500' : 'bg-green-500'
          }`}
          style={{ 
            left: `${60 + mousePos.x * 0.01}%`,
            bottom: `${30 + scrollY * 0.05}px`,
            transform: `rotate(${scrollY * 0.2}deg)`
          }}
        />

        {/* Floating Interactive Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              transition: 'all 0.1s ease-out'
            }}
          />
        ))}

        {/* Mouse Trail Effect */}
        {mouseTrail.map((trail, index) => (
          <div
            key={trail.id}
            className={`absolute w-2 h-2 rounded-full pointer-events-none ${
              darkMode ? 'bg-green-400' : 'bg-purple-500'
            }`}
            style={{
              left: trail.x - 4,
              top: trail.y - 4,
              opacity: (index + 1) / mouseTrail.length * 0.5,
              transform: `scale(${(index + 1) / mouseTrail.length})`,
              transition: 'all 0.3s ease-out'
            }}
          />
        ))}

        {/* Geometric Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${darkMode ? '#22c55e' : '#8b5cf6'} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${darkMode ? '#3b82f6' : '#06b6d4'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite',
            transform: `translateX(${mousePos.x * 0.01}px) translateY(${mousePos.y * 0.01}px)`
          }}
        />
      </div>

      {/* Content with enhanced interactivity */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="transform transition-all duration-500 hover:scale-[1.002]">
          <HeroSection darkMode={darkMode} />
        </div>
        
        <div 
          className="transform transition-all duration-700"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotateX(${Math.sin(scrollY * 0.001) * 2}deg)`
          }}
        >
          <Dashboard darkMode={darkMode} />
        </div>
        
        <div 
          className="transform transition-all duration-500"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <BadgesSection darkMode={darkMode} />
        </div>
        
        <InteractiveTextSection darkMode={darkMode} />
        
        <div 
          className="transform transition-all duration-700"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`
          }}
        >
          <VideoSection darkMode={darkMode} />
        </div>
        
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Custom Cursor Effect */}
      <div 
        className={`fixed w-8 h-8 rounded-full border-2 pointer-events-none z-50 transition-all duration-300 ${
          darkMode ? 'border-green-400' : 'border-purple-500'
        }`}
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          background: `radial-gradient(circle, ${darkMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(147, 51, 234, 0.2)'} 0%, transparent 70%)`
        }}
      />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className={`h-full transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-r from-green-400 via-blue-400 to-purple-400' 
              : 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500'
          }`}
          style={{
            width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        body {
          cursor: none;
        }
        
        * {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};

export default Index;
