import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCards from './components/CategoryCards';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import Footer from './components/Footer';
import GiftFinder from './components/GiftFinder';
import LoadingScreen from './components/LoadingScreen';
import GiftSuggestionPopup from './components/GiftSuggestionPopup';

type AppView = 'home' | 'giftFinder' | 'loading' | 'giftSuggestion';

interface GiftSelections {
  occasion: string;
  relationship: string;
  gender: string;
}

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [giftSelections, setGiftSelections] = useState<GiftSelections>({
    occasion: '',
    relationship: '',
    gender: ''
  });

  const handleFindGiftClick = () => {
    setCurrentView('giftFinder');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleFindGift = (selections: GiftSelections) => {
    setGiftSelections(selections);
    setCurrentView('loading');
  };

  const handleLoadingComplete = () => {
    setCurrentView('giftSuggestion');
  };

  const handleDone = () => {
    setCurrentView('home');
  };

  if (currentView === 'giftFinder') {
    return <GiftFinder onBack={handleBackToHome} onFindGift={handleFindGift} />;
  }

  if (currentView === 'loading') {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (currentView === 'giftSuggestion') {
    return <GiftSuggestionPopup onDone={handleDone} selections={giftSelections} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onFindGiftClick={handleFindGiftClick} />
      <Hero onFindGiftClick={handleFindGiftClick} />
      <ValueProposition />
      <CategoryCards />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;