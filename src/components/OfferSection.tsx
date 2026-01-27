import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Heart, Leaf, Moon } from 'lucide-react';

interface OfferSectionProps {
  onBookClick: () => void;
}

export const OfferSection = ({ onBookClick }: OfferSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const offerings = [
    {
      icon: Leaf,
      title: 'Anti-Inflammatory Foods',
      description: 'Wild salmon/omega-3s, turmeric golden milk, mixed berries, magnesium-rich greens'
    },
    {
      icon: Sparkles,
      title: 'Blood Sugar Balance',
      description: 'Strategic eating to slow disease progression and reduce inflammation'
    },
    {
      icon: Heart,
      title: 'Gentle Movement',
      description: 'Yoga, walking, Pilates – movement that heals, not harms'
    },
    {
      icon: Moon,
      title: 'Sleep & Stress Tools',
      description: 'Herbal teas, breathing exercises, boundary setting for deep rest'
    }
  ];

  return (
    <section id="offer" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-3xl mb-4">🌿</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Personalized Holistic Coaching Sessions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One-on-one online sessions tailored to you. Together, we create a gentle, 
              sustainable plan for your unique body and life.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {offerings.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="bg-gradient-soft rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="font-heading text-2xl mb-6 text-center">
              Science-Backed Strategies to Help You:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                'Reduce daily pain and cramps',
                'Manage heavy bleeding naturally',
                'Decrease inflammation and bloating',
                'Balance hormones without harsh treatments',
                'Improve sleep quality',
                'Build sustainable energy',
                'Reduce flare-ups and triggers',
                'Feel more like yourself again'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <h3 className="font-heading text-2xl mb-2">Investment in Your Healing</h3>
            <p className="text-muted-foreground mb-8">Online via Zoom • Flexible scheduling</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="bg-muted rounded-2xl p-6 min-w-[200px]">
                <p className="text-sm text-muted-foreground mb-1">Single Session</p>
                <p className="font-heading text-3xl">$100</p>
                <p className="text-sm text-muted-foreground">60 minutes</p>
              </div>
              <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-6 min-w-[200px] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ribbon text-ribbon-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Best Value
                </div>
                <p className="text-sm text-muted-foreground mb-1">4-Session Package</p>
                <p className="font-heading text-3xl text-primary">$350</p>
                <p className="text-sm text-muted-foreground">Save $50</p>
              </div>
            </div>

            <Button 
              onClick={onBookClick}
              variant="warm"
              size="lg"
            >
              Ready to start? Book your intake →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
