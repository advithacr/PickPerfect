import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-100 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-gray-800">About Us</h3>
        </div>
        
        <div className="flex items-center space-x-4">
          <Instagram size={24} className="text-gray-800" />
          <span className="text-lg font-semibold text-gray-800">pick_perfect</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;