import React from 'react';
import { ArrowLeft, Heart, ExternalLink } from 'lucide-react';

interface GiftSuggestionsProps {
  onBack: () => void;
  selections: {
    occasion: string;
    relationship: string;
    gender: string;
  };
}

interface GiftSuggestion {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
}

const GiftSuggestions: React.FC<GiftSuggestionsProps> = ({ onBack, selections }) => {
  // Generate gift suggestions based on user selections
  const generateGiftSuggestions = (): GiftSuggestion[] => {
    const { occasion, relationship, gender } = selections;
    
    // Sample gift suggestions based on different combinations
    const giftDatabase: Record<string, GiftSuggestion[]> = {
      'Birthday-Mom-Female': [
        {
          id: 1,
          name: 'Luxury Spa Gift Set',
          description: 'Premium skincare collection with essential oils and bath bombs',
          price: '$89.99',
          image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Beauty & Wellness',
          rating: 4.8
        },
        {
          id: 2,
          name: 'Personalized Jewelry Box',
          description: 'Elegant wooden jewelry box with custom engraving',
          price: '$124.99',
          image: 'https://images.pexels.com/photos/1927574/pexels-photo-1927574.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Accessories',
          rating: 4.9
        },
        {
          id: 3,
          name: 'Gourmet Tea Collection',
          description: 'Curated selection of premium teas from around the world',
          price: '$45.99',
          image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Food & Beverage',
          rating: 4.7
        }
      ],
      'Birthday-Dad-Male': [
        {
          id: 4,
          name: 'Premium Whiskey Stones Set',
          description: 'Soapstone whiskey chillers with elegant wooden box',
          price: '$79.99',
          image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Lifestyle',
          rating: 4.6
        },
        {
          id: 5,
          name: 'Smart Watch Fitness Tracker',
          description: 'Advanced fitness tracking with heart rate monitoring',
          price: '$199.99',
          image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Technology',
          rating: 4.5
        },
        {
          id: 6,
          name: 'Artisan Coffee Subscription',
          description: 'Monthly delivery of freshly roasted specialty coffee',
          price: '$29.99/month',
          image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Food & Beverage',
          rating: 4.8
        }
      ],
      'Anniversary-Partner-Female': [
        {
          id: 7,
          name: 'Custom Star Map',
          description: 'Personalized star map of your special night sky',
          price: '$69.99',
          image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Personalized',
          rating: 4.9
        },
        {
          id: 8,
          name: 'Silk Scarf Collection',
          description: 'Luxurious hand-painted silk scarves in beautiful patterns',
          price: '$149.99',
          image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Fashion',
          rating: 4.7
        }
      ],
      'Anniversary-Partner-Male': [
        {
          id: 9,
          name: 'Leather Travel Wallet',
          description: 'Handcrafted leather wallet with passport holder',
          price: '$89.99',
          image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Accessories',
          rating: 4.8
        },
        {
          id: 10,
          name: 'Vintage Wine Collection',
          description: 'Curated selection of aged wines from renowned vineyards',
          price: '$299.99',
          image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=400',
          category: 'Food & Beverage',
          rating: 4.9
        }
      ]
    };

    const key = `${occasion}-${relationship}-${gender}`;
    return giftDatabase[key] || [
      {
        id: 11,
        name: 'Universal Gift Card',
        description: 'Perfect for any occasion - let them choose their favorite',
        price: '$50.00',
        image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Gift Cards',
        rating: 4.5
      }
    ];
  };

  const suggestions = generateGiftSuggestions();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-pink-400">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12">
            <img 
              src="/public/gif (1).png" 
              alt="Pick Perfect Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">
              <span className="text-pink-600">Pick</span>
              <span className="text-black">Perfect</span>
            </h1>
            <p className="text-xs text-gray-700 uppercase tracking-wide">Curated Gifts</p>
          </div>
        </div>
        
        <button 
          onClick={onBack}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Perfect Gifts Found!
          </h2>
          <p className="text-white/90 text-lg">
            Based on your selections: {selections.occasion} for {selections.relationship} ({selections.gender})
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((gift) => (
            <div 
              key={gift.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square mb-4 rounded-xl overflow-hidden">
                <img 
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-gray-800 leading-tight">
                    {gift.name}
                  </h3>
                  <button className="text-pink-500 hover:text-pink-600 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {gift.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-pink-600 font-bold text-lg">
                    {gift.price}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-600 text-sm">{gift.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {gift.category}
                  </span>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 transition-colors">
                    <span>View Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onBack}
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Find More Gifts
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftSuggestions;