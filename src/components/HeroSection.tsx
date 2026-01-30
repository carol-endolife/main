import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-wellness.jpg';

interface HeroSectionProps {
  onBookClick: () => void;
}

export const HeroSection = ({ onBookClick }: HeroSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Women practicing wellness and self-care"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-4xl md:text-6xl animate-float opacity-60">🎗️</div>
      <div className="absolute bottom-32 right-10 text-3xl md:text-5xl animate-float opacity-40" style={{ animationDelay: '2s' }}>🌸</div>
      <div className="absolute top-1/3 right-1/4 text-2xl animate-pulse-soft opacity-30">✨</div>

      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 container max-w-4xl text-center px-6 py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-ribbon/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="text-xl">🎗️</span>
          <span className="text-sm font-medium text-ribbon-foreground">Endometriosis Awareness</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Endometriosis<span className="text-primary">🎗️</span>Life
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal text-muted-foreground">
            Holistic Support for Women with Endo & Adeno
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          You're not alone. <span className="text-foreground font-medium">Your pain is valid.</span> Let's reduce inflammation, 
          balance hormones, and help you feel more like yourself again – 
          <span className="text-primary font-medium"> naturally and science-backed</span>.
        </p>

        <Button 
          onClick={onBookClick}
          variant="warm"
          size="xl"
          className="animate-pulse-soft"
        >
          Book Your Intake Session
          <span className="ml-1">💛</span>
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          Free 30 min intake call
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
