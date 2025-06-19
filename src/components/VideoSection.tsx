
import React, { useState, useEffect } from 'react';

interface VideoSectionProps {
  darkMode: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ darkMode }) => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      emoji: "💜",
      title: "Cut my energy usage by 30%!",
      description: "By optimizing my setup and using power-saving modes, I've dramatically reduced my carbon footprint while maintaining peak performance.",
      color: darkMode ? "purple" : "purple"
    },
    {
      emoji: "🎮",
      title: "Achieved carbon-neutral gaming!",
      description: "Through careful monitoring and eco-friendly practices, I've reached my goal of net-zero gaming impact.",
      color: darkMode ? "blue" : "blue"
    },
    {
      emoji: "🌟",
      title: "Inspired my entire clan!",
      description: "My energy-saving achievements motivated my gaming community to adopt eco-friendly practices too.",
      color: darkMode ? "green" : "green"
    },
    {
      emoji: "⚡",
      title: "Reduced power bills by 40%!",
      description: "Smart gaming schedules and efficient hardware choices have made a huge difference in my monthly expenses.",
      color: darkMode ? "yellow" : "orange"
    },
    {
      emoji: "🏆",
      title: "Top eco-gamer in my region!",
      description: "Consistent tracking and optimization helped me become a leader in sustainable gaming practices.",
      color: darkMode ? "cyan" : "teal"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stories.length]);

  const getStoryPosition = (index: number) => {
    const diff = index - currentStory;
    if (diff === 0) return 'translate-x-0 scale-100 z-30 opacity-100';
    if (diff === 1 || diff === -(stories.length - 1)) return 'translate-x-full scale-95 z-20 opacity-70';
    if (diff === -1 || diff === stories.length - 1) return '-translate-x-full scale-95 z-20 opacity-70';
    return 'translate-x-full scale-90 z-10 opacity-0';
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: darkMode ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' : 'bg-purple-50/60 border-purple-200/50 text-purple-600',
      blue: darkMode ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50/60 border-blue-200/50 text-blue-600',
      green: darkMode ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-green-50/60 border-green-200/50 text-green-600',
      yellow: darkMode ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' : 'bg-orange-50/60 border-orange-200/50 text-orange-600',
      cyan: darkMode ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-teal-50/60 border-teal-200/50 text-teal-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section id="videos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 ${
            darkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
          }`}>
            Community Showcase
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            See how other gamers are making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="group">
            <div className={`relative rounded-2xl overflow-hidden border-4 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
              darkMode
                ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                : 'border-purple-300/50 shadow-2xl shadow-purple-500/20'
            }`}
            style={{
              transform: 'perspective(1000px) rotateX(5deg)',
            }}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-white text-lg">Gaming Impact Showcase</p>
                  <p className="text-purple-200 text-sm mt-2">Click to play featured video</p>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-8 border-l-purple-600 border-y-6 border-y-transparent ml-1"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Success Stories Carousel */}
          <div>
            <h3 className={`text-3xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Gamer Success Stories
            </h3>
            
            <div className="relative h-64 overflow-hidden">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${getStoryPosition(index)}`}
                >
                  <div className={`p-6 rounded-xl border backdrop-blur-lg h-full ${getColorClasses(story.color)}`}>
                    <div className="flex items-start space-x-4 h-full">
                      <div className="text-3xl flex-shrink-0">{story.emoji}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3 text-lg">
                          {story.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {story.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Story Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory
                      ? darkMode ? 'bg-green-400' : 'bg-purple-600'
                      : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
