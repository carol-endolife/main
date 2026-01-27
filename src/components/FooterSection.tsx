import { Button } from '@/components/ui/button';
import { Twitter, Mail, Heart } from 'lucide-react';

interface FooterSectionProps {
  onBookClick: () => void;
}

export const FooterSection = ({ onBookClick }: FooterSectionProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-card py-16 md:py-20">
      <div className="container max-w-5xl px-6">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <span className="inline-block text-4xl mb-4">🎗️</span>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            You don't have to navigate this alone. Let's work together to reduce your pain 
            and help you feel more like yourself again.
          </p>
          <Button 
            onClick={onBookClick}
            variant="warm"
            size="xl"
          >
            Book Your Intake Session
            <Heart className="w-5 h-5 ml-1" />
          </Button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-12" />

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl mb-3">
              Endometriosis<span className="text-primary">🎗️</span>Life
            </h3>
            <p className="text-sm text-muted-foreground">
              Holistic support for women with endometriosis and adenomyosis. 
              Science-backed, compassion-led.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'My Story', id: 'about' },
                { label: 'What I Offer', id: 'offer' },
                { label: 'Wellness Tips', id: 'tips' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="https://twitter.com/Carol_endolife"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
                @Carol_endolife
              </a>
              <button 
                onClick={onBookClick}
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email for bookings
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Endometriosis🎗️Life – All rights reserved
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Made with 💛 for the endo community
          </p>
        </div>
      </div>
    </footer>
  );
};
