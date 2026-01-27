import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import carolImage from '@/assets/carol-portrait.jpg';
import { Twitter } from 'lucide-react';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 gradient-warm">
      <div className="container max-w-5xl px-6">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-3xl mb-4">💛</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              My Story – From Daily Pain to Real Hope
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Photo */}
            <div className="lg:col-span-2 flex flex-col items-center lg:sticky lg:top-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                <img 
                  src={carolImage}
                  alt="Carol - Endometriosis Life Coach"
                  className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-3xl shadow-card"
                />
                <div className="absolute -bottom-3 -right-3 bg-ribbon rounded-full p-3 shadow-soft">
                  <span className="text-2xl">🎗️</span>
                </div>
              </div>
              
              {/* Credentials */}
              <div className="mt-8 text-center">
                <p className="font-heading text-xl mb-2">Carol</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Woman with Endo & Adeno</p>
                  <p>Osteosarcoma survivor at 13 💛</p>
                  <p>MSc Chemical Engineering</p>
                  <p className="text-primary font-medium">Holistic Endo Focus</p>
                </div>
                
                <a 
                  href="https://twitter.com/Carol_endolife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  @Carol_endolife
                </a>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                For as long as I can remember, I always felt pain! Long before I was diagnosed, I lived with the sharp, exhausting pain that doctors sometimes dismissed, friends didn't understand, and I learned to hide from myself. Feeling pain is <em>"normal"</em>, <em>"it is part of being a woman"</em>, or so I was told.
              </p>
              
              <p>
                It wasn't until I was 27 that I finally got a name for it: <strong className="text-foreground">endometriosis</strong>. By then, I had already endured years of uncertainty, countless pills, hormonal treatments, and even a laparoscopy to remove tumors that kept coming back. Over the years, I also relied on countless painkillers—paracetamol, diclofenac, naproxen, ibuprofen, even morphine. And while morphine can numb the pain, it is not a way to live. Nothing truly healed me. I felt frustrated, exhausted, and at times, hopeless.
              </p>
              
              <p>
                I realized that managing endometriosis meant more than chasing symptom relief—it meant <strong className="text-foreground">listening to my body, nurturing it, and finding balance</strong> in ways I had never tried before. That's when I turned to a holistic approach: mindful eating, consistent movement, and daily practices that quieted my mind. Slowly, I began to feel peace, and for the first time, I noticed real improvements—not just in pain, but in the way my body responded and healed.
              </p>
              
              <p>
                <strong className="text-foreground">This is my journey with endometriosis.</strong> I want other women to know they are not alone. You are not failing, your pain is valid, and there are ways to have a good life with a chronic illness like endometriosis.
              </p>
              
              <p>
                In addition to my personal experiences, I've read thousands of scientific articles, studied holistic approaches, and continue to educate myself to provide accurate, evidence-based information. My goal is to help others navigate endometriosis with knowledge, support, and hope.
              </p>
              
              <p className="text-foreground italic border-l-4 border-primary/30 pl-4 py-2 bg-card rounded-r-lg">
                I also share this for the women who feel unseen, unheard, or isolated. For the ones who lie awake at night wondering if anyone understands. For the ones who want to take back control of their health. If my story can give even one person hope, or remind them that they are not alone, then sharing it is worth everything.
              </p>
              
              <p className="font-heading text-lg text-foreground">
                With Love,<br />
                <span className="text-primary">Carol</span> 💛
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
