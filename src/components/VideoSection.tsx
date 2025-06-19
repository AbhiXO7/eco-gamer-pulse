
import React from 'react';

interface VideoSectionProps {
  darkMode: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ darkMode }) => {
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

          {/* Content */}
          <div>
            <h3 className={`text-3xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Gamer Success Stories
            </h3>
            
            <div className="space-y-6">
              <div className={`p-6 rounded-xl border backdrop-blur-lg ${
                darkMode
                  ? 'bg-purple-500/10 border-purple-500/30'
                  : 'bg-purple-50/60 border-purple-200/50'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💜</div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      "Cut my energy usage by 30%!"
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      By optimizing my setup and using power-saving modes, I've dramatically reduced my carbon footprint while maintaining peak performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border backdrop-blur-lg ${
                darkMode
                  ? 'bg-blue-500/10 border-blue-500/30'
                  : 'bg-blue-50/60 border-blue-200/50'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🎮</div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      "Achieved carbon-neutral gaming!"
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Through careful monitoring and eco-friendly practices, I've reached my goal of net-zero gaming impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border backdrop-blur-lg ${
                darkMode
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-green-50/60 border-green-200/50'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🌟</div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                      "Inspired my entire clan!"
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      My energy-saving achievements motivated my gaming community to adopt eco-friendly practices too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
