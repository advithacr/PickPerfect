import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 16.67; // 6 steps
      });
    }, 400);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=800)',
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-400/60" />

      {/* Header with logo */}
      <div className="relative z-10 flex items-center justify-between p-4 pt-10">
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="text-xl font-bold font-corben leading-none">
              <span className="text-pink-600">Pick</span>
              <span className="text-black">Perfect</span>
            </h1>
            <p className="text-[10px] text-gray-800 uppercase tracking-wide ml-1">
              Curated Gifts
            </p>
          </div>
        </div>

        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition">
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24">
        <h2 className="text-3xl text-white font-extrabold text-center leading-tight mb-10 font-corben">
          PickPerfect<br />
          is Finding<br />
          Gifts You’ll<br />
          Love to<br />
          Give...
        </h2>

        {/* Loading bar */}
        <div className="flex space-x-2 mt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-2 rounded-full transition-all duration-300 ${
                progress >= (i + 1) * 16.67 ? 'bg-pink-600' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
