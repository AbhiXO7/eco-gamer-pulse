
import React, { useState } from 'react';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  percentChange: number;
  icon: string;
  yearlyData: { year: string; value: number; percentage: number }[];
  darkMode: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  unit, 
  percentChange, 
  icon, 
  yearlyData, 
  darkMode 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (format: 'csv' | 'pdf') => {
    console.log(`Downloading ${title} report as ${format.toUpperCase()}`);
    // Download logic would go here
  };

  return (
    <div
      className={`group relative p-8 rounded-2xl border backdrop-blur-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
        darkMode
          ? 'bg-black/40 border-green-500/30 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/20'
          : 'bg-white/40 border-purple-200/50 hover:border-purple-300/70 hover:shadow-2xl hover:shadow-purple-500/20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'perspective(1000px) rotateX(5deg) rotateY(5deg)' : 'none',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl">{icon}</div>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${
          percentChange >= 0
            ? darkMode
              ? 'bg-red-500/20 text-red-400'
              : 'bg-red-100 text-red-600'
            : darkMode
              ? 'bg-green-500/20 text-green-400'
              : 'bg-green-100 text-green-600'
        }`}>
          {percentChange >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{Math.abs(percentChange)}%</span>
        </div>
      </div>

      {/* Main Value */}
      <div className="mb-6">
        <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {title}
        </h3>
        <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {value}
          <span className={`text-lg font-normal ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {unit}
          </span>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3 mb-6">
        {yearlyData.map((data, index) => (
          <div key={data.year} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{data.year}</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{data.value}</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`}>
              <div
                className={`h-full rounded-full transition-all duration-1000 delay-${index * 200} ${
                  darkMode
                    ? 'bg-gradient-to-r from-green-500 to-blue-500'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500'
                }`}
                style={{
                  width: `${data.percentage}%`,
                  transform: isHovered ? 'scaleX(1)' : 'scaleX(0.8)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Download Button */}
      <div className="flex space-x-2">
        <button
          onClick={() => handleDownload('csv')}
          className={`group flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
            darkMode
              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30'
              : 'bg-purple-100 text-purple-600 hover:bg-purple-200 border border-purple-200'
          }`}
        >
          <Download size={16} className="group-hover:rotate-12 transition-transform duration-300" />
          <span>CSV</span>
        </button>
        <button
          onClick={() => handleDownload('pdf')}
          className={`group flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
            darkMode
              ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200 border border-blue-200'
          }`}
        >
          <Download size={16} className="group-hover:rotate-12 transition-transform duration-300" />
          <span>PDF</span>
        </button>
      </div>
    </div>
  );
};

export default StatCard;
