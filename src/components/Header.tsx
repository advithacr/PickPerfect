import React from 'react';
import { Heart } from 'lucide-react';
import logo from '../assets/gif.png'; // Ensure logo is inside: src/assets/

interface HeaderProps {
  onFindGiftClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onFindGiftClick }) => {
  return (
    <header className="bg-gray-50 h-32 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="h-full flex items-center">
          <img
            src={logo}
            alt="Pick Perfect Logo"
            className="h-full object-contain" // Makes logo fill the header height
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {onFindGiftClick && (
            <button
              onClick={onFindGiftClick}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Find Gift
            </button>
          )}
          <button className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
            <Heart size={16} />
            <span className="font-medium">Favourites</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
