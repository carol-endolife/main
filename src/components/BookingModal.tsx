import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Copy, Check, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [copied, setCopied] = useState(false);
  const email = 'Carol.endometriosislife@gmail.com';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-3xl shadow-card p-8 md:p-10 max-w-md w-full animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ribbon flex items-center justify-center">
            <Mail className="w-8 h-8 text-ribbon-foreground" />
          </div>

          <h3 className="font-heading text-2xl md:text-3xl mb-3">
            Let's Connect 🎗️
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Email me to book your free 30 min intake call. I can't wait to support you on your healing journey.
          </p>

          <div className="bg-muted rounded-2xl p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Send an email to:</p>
            <p className="font-semibold text-foreground break-all">{email}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex-1"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Email
                </>
              )}
            </Button>
            
            <Button
              asChild
              variant="warm"
              className="flex-1"
            >
              <a href={`mailto:${email}?subject=Intake Session Inquiry - Endometriosis Life`}>
                <Mail className="w-4 h-4" />
                Open Email
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            With love and understanding 💛
          </p>
        </div>
      </div>
    </div>
  );
};
