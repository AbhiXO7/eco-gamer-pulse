
import React, { useState } from 'react';

interface InteractiveTextSectionProps {
  darkMode: boolean;
}

const InteractiveTextSection: React.FC<InteractiveTextSectionProps> = ({ darkMode }) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);

  const textData = [
    {
      word: "Gaming",
      bgImage: "photo-1518770660439-4636190af475", // circuit board
      description: "circuit patterns"
    },
    {
      word: "energy",
      bgImage: "photo-1526374965328-7f61d4dc18c5", // Matrix code
      description: "digital matrix"
    },
    {
      word: "consumption",
      bgImage: "photo-1487058792275-0ad4aaf24ca7", // colorful code
      description: "vibrant code"
    },
    {
      word: "while",
      bgImage: "photo-1470813740244-df37b8c1edcb", // starry night
      description: "cosmic space"
    },
    {
      word: "reducing",
      bgImage: "photo-1500673922987-e212871fec22", // yellow lights
      description: "energy lights"
    }
  ];

  const fullText = "Gaming energy consumption tracking while reducing environmental impact through smart technology.";

  const renderInteractiveText = () => {
    let words = fullText.split(' ');
    
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?;:]/, '');
      const wordData = textData.find(item => 
        item.word.toLowerCase() === cleanWord.toLowerCase()
      );
      
      if (wordData) {
        return (
          <span
            key={index}
            className={`inline-block px-4 py-3 mx-2 my-1 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-110 ${
              darkMode 
                ? 'text-green-400 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/30' 
                : 'text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-purple-500/30'
            } ${activeWord === wordData.word ? 'scale-110' : ''}`}
            onMouseEnter={() => setActiveWord(wordData.word)}
            onMouseLeave={() => setActiveWord(null)}
          >
            {word}
          </span>
        );
      }
      
      return <span key={index} className="mx-1">{word}</span>;
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Images */}
      <div className="absolute inset-0">
        {textData.map((item) => (
          <div
            key={item.word}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              activeWord === item.word ? 'opacity-30 scale-105 z-10' : 'opacity-5 scale-100 z-0'
            }`}
            style={{
              backgroundImage: `url(https://images.unsplash.com/${item.bgImage}?auto=format&fit=crop&w=1920&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: activeWord === item.word 
                ? darkMode ? 'hue-rotate(120deg) saturate(1.2)' : 'hue-rotate(280deg) saturate(1.1)'
                : 'grayscale(70%)'
            }}
          />
        ))}
        
        {/* Overlay */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-black/70 via-black/50 to-black/70' 
            : 'bg-gradient-to-br from-white/70 via-white/50 to-white/70'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <div className={`backdrop-blur-lg rounded-3xl p-12 border ${
          darkMode 
            ? 'bg-black/30 border-green-500/20' 
            : 'bg-white/30 border-purple-200/50'
        }`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
            darkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'
          }`}>
            Interactive Experience
          </h2>
          
          <div className={`text-2xl md:text-3xl leading-relaxed font-medium ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            {renderInteractiveText()}
          </div>
          
          <p className={`mt-8 text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Hover over the highlighted words to see related visuals
          </p>
          
          {/* Active Word Info */}
          {activeWord && (
            <div className={`mt-6 p-4 rounded-xl border transition-all duration-300 ${
              darkMode 
                ? 'bg-green-500/10 border-green-500/30 text-green-300' 
                : 'bg-purple-100/80 border-purple-300/50 text-purple-700'
            }`}>
              <span className="text-sm font-semibold">Now showing: </span>
              <span className="text-lg font-bold">{activeWord}</span>
              <span className="text-sm ml-2">
                ({textData.find(item => item.word === activeWord)?.description})
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTextSection;
