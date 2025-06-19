
import React from 'react';
import StatCard from './StatCard';

interface DashboardProps {
  darkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode }) => {
  const stats = [
    {
      title: 'Annual Gaming Hours',
      value: '2,847',
      unit: 'hours',
      percentChange: 12,
      icon: '🕹️',
      yearlyData: [
        { year: '2022', value: 2847, percentage: 95 },
        { year: '2021', value: 2654, percentage: 88 },
        { year: '2020', value: 2432, percentage: 81 },
        { year: '2019', value: 2198, percentage: 73 },
      ],
    },
    {
      title: 'Energy Consumption',
      value: '1,423',
      unit: 'kWh',
      percentChange: 8,
      icon: '⚡',
      yearlyData: [
        { year: '2022', value: 1423, percentage: 92 },
        { year: '2021', value: 1332, percentage: 86 },
        { year: '2020', value: 1245, percentage: 80 },
        { year: '2019', value: 1156, percentage: 75 },
      ],
    },
    {
      title: 'Carbon Emissions',
      value: '0.89',
      unit: 'tCO₂e',
      percentChange: -5,
      icon: '🌍',
      yearlyData: [
        { year: '2022', value: 0.89, percentage: 74 },
        { year: '2021', value: 0.92, percentage: 77 },
        { year: '2020', value: 0.95, percentage: 79 },
        { year: '2019', value: 0.98, percentage: 82 },
      ],
    },
  ];

  return (
    <section id="dashboard" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-4 ${
            darkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
          }`}>
            Your Gaming Impact Dashboard
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Track your progress and see how your gaming habits affect the environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <StatCard {...stat} darkMode={darkMode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
