import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles, Activity, Coffee, Apple, Search, Heart } from 'lucide-react';

export const TipsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const tips = [
    {
      icon: Activity,
      title: 'Exercise',
      description: 'Relaxes & strength muscles, eases cramps, and supports hormone balance naturally',
      color: 'bg-lavender-100'
    },
    {
      icon: Sparkles,
      title: 'Blood Sugar Balance',
      description: 'Stable levels reduce inflammation and may slow disease progression',
      color: 'bg-peach-100'
    },
    {
      icon: Coffee,
      title: 'Daily Herbal Teas',
      description: 'Ginger, chamomile, and peppermint changed my pain days completely',
      color: 'bg-cream-100'
    },
    {
      icon: Apple,
      title: 'Anti-Inflammatory Foods',
      description: 'Wild salmon, turmeric golden milk, berries – my daily healing foods',
      color: 'bg-pink-50'
    },
    {
      icon: Search,
      title: 'Mindfulness',
      description: "Understanding what's really happening in your body",
      color: 'bg-secondary'
    },
    {
      icon: Heart,
      title: 'Self-Compassion',
      description: 'Healing begins when we stop fighting our bodies and start listening',
      color: 'bg-ribbon'
    }
  ];

  return (
    <section id="tips" className="py-20 md:py-28 gradient-warm">
      <div className="container max-w-5xl px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-3xl mb-4">✨</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Simple, Powerful Steps to Feel Better
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Small changes that create big transformations. These are the foundations 
              that helped me experience a better life with Endometriosis.
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 ${tip.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tip.icon className="w-7 h-7 text-foreground/70" />
                </div>
                <h3 className="font-heading text-xl mb-2">{tip.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Empathetic Note */}
          <div className="text-center bg-card rounded-3xl p-8 shadow-soft">
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Small changes can lead to <span className="text-foreground font-medium">weeks flare-free</span>.
            </p>
            <p className="font-heading text-2xl text-primary">
              We heal together 🩷
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
