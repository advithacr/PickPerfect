import React from 'react';
import giftImage from '../assets/Untitled design.png'; // Update to match your image filename

interface HeroProps {
  onFindGiftClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onFindGiftClick }) => {
  return (
    <section className="relative bg-pink-400 px-4 py-24 text-white overflow-hidden">
      {/* Gift Image as a positioned background */}
      <img
        src={giftImage}
        alt="Gift with red ribbon"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md md:max-w-lg lg:max-w-xl pointer-events-none select-none"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-lalezar text-shadow mb-2">
          Welcome to Pick Perfect
        </h2>

        <p className="text-xl md:text-2xl mb-8 opacity-90">
          where every gift tells a story
        </p>

        <button
          onClick={onFindGiftClick}
          className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors shadow-inner"
        >
          Find The Perfect Gift
        </button>
      </div>
    </section>
  );
};

export default Hero;
