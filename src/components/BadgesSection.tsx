
import React from 'react';
import BadgeCard from './BadgeCard';

interface BadgesSectionProps {
  darkMode: boolean;
}

const BadgesSection: React.FC<BadgesSectionProps> = ({ darkMode }) => {
  const badges = [
    {
      title: '1000 Hours Club',
      description: 'Game for over 1000 hours in a year',
      icon: '🏆',
      achieved: true,
    },
    {
      title: 'Eco Warrior',
      description: 'Reduce energy consumption by 10%',
      icon: '🌱',
      achieved: true,
    },
    {
      title: 'Carbon Cutter',
      description: 'Lower CO₂ emissions below 1.0 tCO₂e',
      icon: '🌍',
      achieved: true,
    },
    {
      title: 'Energy Saver',
      description: 'Use less than 1200 kWh annually',
      icon: '⚡',
      achieved: false,
      progress: 78,
    },
    {
      title: 'Night Owl',
      description: 'Game for 5000+ hours total',
      icon: '🦉',
      achieved: false,
      progress: 45,
    },
    {
      title: 'Green Gamer',
      description: 'Achieve net-zero gaming impact',
      icon: '🍃',
      achieved: false,
      progress: 23,
    },
  ];

  const tips = [
    {
      title: 'Use Power Saving Mode',
      description: 'Enable energy-efficient settings on your gaming devices',
      icon: '💡',
    },
    {
      title: 'Unplug When Idle',
      description: 'Disconnect accessories when not gaming',
      icon: '🔌',
    },
    {
      title: 'Optimize Graphics',
      description: 'Balance performance with power consumption',
      icon: '🎮',
    },
    {
      title: 'Schedule Gaming',
      description: 'Play during off-peak energy hours',
      icon: '⏰',
    },
  ];

  return (
    <section id="badges" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Achievement Badges */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-4 ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600'
            }`}>
              Achievement Badges
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Unlock milestones and show off your eco-gaming achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
              <div
                key={badge.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <BadgeCard {...badge} darkMode={darkMode} />
              </div>
            ))}
          </div>
        </div>

        {/* Eco Tips */}
        <div>
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600'
            }`}>
              Eco-Gaming Tips
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Simple ways to reduce your gaming environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className={`group p-6 rounded-xl border backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  darkMode
                    ? 'bg-blue-500/10 border-blue-500/30 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20'
                    : 'bg-blue-50/60 border-blue-200/50 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-500/20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4 group-hover:animate-bounce">{tip.icon}</div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {tip.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
