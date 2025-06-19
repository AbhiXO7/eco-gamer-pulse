
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Dashboard from '../components/Dashboard';
import BadgesSection from '../components/BadgesSection';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(true); // Default to dark mode for gaming aesthetic
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-white via-purple-50 to-blue-50 text-gray-900'
    }`}>
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 ${
            darkMode ? 'bg-green-500' : 'bg-purple-500'
          }`}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className={`absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-500'
          }`}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className={`absolute bottom-40 left-1/4 w-40 h-40 rounded-full opacity-5 ${
            darkMode ? 'bg-purple-500' : 'bg-green-500'
          }`}
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <Dashboard darkMode={darkMode} />
      <BadgesSection darkMode={darkMode} />
      <VideoSection darkMode={darkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Index;
