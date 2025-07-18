import React from 'react';

interface GiftSuggestionPopupProps {
  onDone: () => void;
  selections: {
    occasion: string;
    relationship: string;
    gender: string;
  };
}

const GiftSuggestionPopup: React.FC<GiftSuggestionPopupProps> = ({ onDone, selections }) => {
  const getGiftSuggestion = () => {
    const { occasion, relationship, gender } = selections;

    const suggestions: Record<string, { name: string; image: string; bg: string }> = {
      'Birthday-Mom-Female': {
        name: 'Hand Bag',
        image: 'https://images.pexels.com/photos/925402/pexels-photo-925402.jpeg?auto=compress&cs=tinysrgb&w=600',
        bg: 'https://images.pexels.com/photos/18645340/pexels-photo-18645340.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      'Birthday-Dad-Male': {
        name: 'Leather Wallet',
        image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600',
        bg: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      'Anniversary-Partner-Female': {
        name: 'Jewelry Box',
        image: 'https://images.pexels.com/photos/3768588/pexels-photo-3768588.jpeg?auto=compress&cs=tinysrgb&w=600',
        bg: 'https://images.pexels.com/photos/7679447/pexels-photo-7679447.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      'Anniversary-Partner-Male': {
        name: 'Watch',
        image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
        bg: 'https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
    };

    const key = `${occasion}-${relationship}-${gender}`;
    return suggestions[key] || {
      name: 'Flower Bouquet',
      image: 'https://images.pexels.com/photos/931147/pexels-photo-931147.jpeg?auto=compress&cs=tinysrgb&w=600',
      bg: 'https://images.pexels.com/photos/1303082/pexels-photo-1303082.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
  };

  const suggestion = getGiftSuggestion();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url(${suggestion.bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-4 pt-10">
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="text-xl font-bold">
              <span className="text-pink-600">Pick</span>
              <span className="text-black">Perfect</span>
            </h1>
            <p className="text-xs text-gray-700 uppercase tracking-wide">Curated Gifts</p>
          </div>
        </div>
        <button
          onClick={onDone}
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-1.5 rounded-full text-sm font-medium"
        >
          Back
        </button>
      </div>

      {/* Gift card */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 pb-10">
        <div className="bg-pink-100/90 p-6 rounded-3xl text-center w-full max-w-sm shadow-xl border border-white">
          <h2 className="text-lg md:text-xl font-bold text-white bg-pink-600 py-2 rounded-xl mb-4">
            PickPerfect recommends a<br /> {suggestion.name}
          </h2>
          <div className="aspect-square overflow-hidden rounded-xl bg-white mb-4">
            <img
              src={suggestion.image}
              alt={suggestion.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-base text-gray-700 font-medium mb-6">
            Perfectly curated just for them
          </p>
          <button
            onClick={onDone}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftSuggestionPopup;
