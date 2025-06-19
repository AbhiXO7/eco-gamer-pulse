
import React, { useState } from 'react';

interface BadgeCardProps {
  title: string;
  description: string;
  icon: string;
  achieved: boolean;
  progress?: number;
  darkMode: boolean;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ 
  title, 
  description, 
  icon, 
  achieved, 
  progress = 0, 
  darkMode 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative p-6 rounded-xl border backdrop-blur-lg transition-all duration-500 cursor-pointer ${
        achieved
          ? darkMode
            ? 'bg-green-500/20 border-green-400/50 hover:shadow-xl hover:shadow-green-500/30'
            : 'bg-green-100 border-green-300 hover:shadow-xl hover:shadow-green-500/20'
          : darkMode
            ? 'bg-gray-800/40 border-gray-700 hover:border-gray-600'
            : 'bg-gray-100/40 border-gray-300 hover:border-gray-400'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'perspective(500px) rotateX(10deg) rotateY(5deg) scale(1.05)' : 'none',
      }}
    >
      {/* Badge Icon */}
      <div className={`text-5xl mb-4 transition-all duration-300 ${
        achieved ? 'animate-bounce' : isHovered ? 'animate-pulse' : ''
      }`}>
        {icon}
      </div>

      {/* Badge Title */}
      <h3 className={`text-xl font-bold mb-2 ${
        achieved
          ? darkMode ? 'text-green-400' : 'text-green-600'
          : darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {title}
      </h3>

      {/* Badge Description */}
      <p className={`text-sm mb-4 ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {description}
      </p>

      {/* Progress Bar (for unachieved badges) */}
      {!achieved && progress > 0 && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{progress}%</span>
          </div>
          <div className={`h-2 rounded-full overflow-hidden ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                darkMode
                  ? 'bg-gradient-to-r from-green-500 to-blue-500'
                  : 'bg-gradient-to-r from-purple-500 to-blue-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Achievement Indicator */}
      {achieved && (
        <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center ${
          darkMode ? 'bg-green-500' : 'bg-green-600'
        }`}>
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </div>
  );
};

export default BadgeCard;
