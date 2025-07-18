// ✅ Updated GiftFinder.tsx (image removed, logo text only)
import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';

interface GiftFinderProps {
  onBack: () => void;
  onFindGift: (selections: GiftSelections) => void;
}

interface GiftSelections {
  occasion: string;
  relationship: string;
  gender: string;
}

const GiftFinder: React.FC<GiftFinderProps> = ({ onBack, onFindGift }) => {
  const [selections, setSelections] = useState<GiftSelections>({
    occasion: '',
    relationship: '',
    gender: ''
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Gift For'];
  const relationships = ['Mom', 'Dad', 'Partner', 'Sibling', 'Other'];
  const genders = ['Female', 'Male'];

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelection = (category: keyof GiftSelections, value: string) => {
    setSelections(prev => ({ ...prev, [category]: value }));
    setOpenDropdown(null);
  };

  const handlePickPerfect = () => {
    if (selections.occasion && selections.relationship && selections.gender) {
      onFindGift(selections);
    }
  };

  const isFormComplete = selections.occasion && selections.relationship && selections.gender;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-pink-400">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <div className="flex items-center space-x-3">
          {/* Removed image */}
          <div>
            <h1 className="text-lg font-bold font-corben leading-none">
              <span className="text-pink-600">Pick</span>
              <span className="text-black">Perfect</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-black">
              Curated Gifts
            </p>
          </div>
        </div>

        <button 
          onClick={onBack}
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} className="inline-block mr-1" />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 leading-tight font-corben">
          Let's Find the<br />
          Perfect Gift for<br />
          Your Loved One
        </h2>

        <div className="max-w-md mx-auto space-y-8">
          {/* Occasion Dropdown */}
          <div className="relative">
            <label className="block text-black font-semibold mb-2">Occasion</label>
            <button
              onClick={() => handleDropdownToggle('occasion')}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-full flex items-center justify-between transition-colors"
            >
              <span className="font-medium">
                {selections.occasion || 'Select'}
              </span>
              <ChevronDown 
                size={20} 
                className={`transform transition-transform ${openDropdown === 'occasion' ? 'rotate-180' : ''}`}
              />
            </button>

            {openDropdown === 'occasion' && (
              <div className="absolute top-full left-0 right-0 bg-pink-200 rounded-2xl mt-2 py-2 shadow-lg z-10">
                {occasions.map((occasion) => (
                  <button
                    key={occasion}
                    onClick={() => handleSelection('occasion', occasion)}
                    className="w-full text-left px-6 py-3 text-black hover:bg-pink-300 transition-colors"
                  >
                    {occasion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Relationship Dropdown */}
          <div className="relative">
            <label className="block text-black font-semibold mb-2">Relationship</label>
            <button
              onClick={() => handleDropdownToggle('relationship')}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-full flex items-center justify-between transition-colors"
            >
              <span className="font-medium">
                {selections.relationship || 'Select'}
              </span>
              <ChevronDown 
                size={20} 
                className={`transform transition-transform ${openDropdown === 'relationship' ? 'rotate-180' : ''}`}
              />
            </button>

            {openDropdown === 'relationship' && (
              <div className="absolute top-full left-0 right-0 bg-pink-200 rounded-2xl mt-2 py-2 shadow-lg z-10">
                {relationships.map((relationship) => (
                  <button
                    key={relationship}
                    onClick={() => handleSelection('relationship', relationship)}
                    className="w-full text-left px-6 py-3 text-black hover:bg-pink-300 transition-colors"
                  >
                    {relationship}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Gender Dropdown */}
          <div className="relative">
            <label className="block text-black font-semibold mb-2">Gender</label>
            <button
              onClick={() => handleDropdownToggle('gender')}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-full flex items-center justify-between transition-colors"
            >
              <span className="font-medium">
                {selections.gender || 'Select'}
              </span>
              <ChevronDown 
                size={20} 
                className={`transform transition-transform ${openDropdown === 'gender' ? 'rotate-180' : ''}`}
              />
            </button>

            {openDropdown === 'gender' && (
              <div className="absolute top-full left-0 right-0 bg-pink-200 rounded-2xl mt-2 py-2 shadow-lg z-10">
                {genders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() => handleSelection('gender', gender)}
                    className="w-full text-left px-6 py-3 text-black hover:bg-pink-300 transition-colors"
                  >
                    {gender}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pick Perfect Button */}
          <div className="pt-8">
            <button
              onClick={handlePickPerfect}
              disabled={!isFormComplete}
              className={`w-full py-4 px-8 rounded-full text-lg font-corben transition-all ${
                isFormComplete
                  ? 'bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-pink-300 text-pink-500 cursor-not-allowed'
              }`}
            >
              Pick Perfect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftFinder;
