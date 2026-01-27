import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { OfferSection } from '@/components/OfferSection';
import { TipsSection } from '@/components/TipsSection';
import { FooterSection } from '@/components/FooterSection';
import { BookingModal } from '@/components/BookingModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection onBookClick={handleBookClick} />
        <AboutSection />
        <OfferSection onBookClick={handleBookClick} />
        <TipsSection />
        <FooterSection onBookClick={handleBookClick} />
      </main>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
