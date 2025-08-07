import { Button } from "@/components/ui/button";
import { Wind, Zap, Volume2 } from "lucide-react";
import heroFan from "@/assets/ventilateur.png";
import OrderModal from "@/components/OrderModal";
import SocialShare from "@/components/SocialShare";

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('[data-section="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-fresh-blue rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-warm-orange rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-fresh-blue-light rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Votre <span className="text-fresh-blue">Oasis de Fraîcheur</span> Personnelle
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground/80">
                Partout, Tout le Temps.
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Compact, ultra-silencieux et rechargeable par USB. Le compagnon idéal pour un été serein au bureau, en transport ou en vacances.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-fresh-blue">
                <Wind className="w-5 h-5" />
                <span className="font-medium">Ultra-portable</span>
              </div>
              <div className="flex items-center gap-2 text-fresh-blue">
                <Volume2 className="w-5 h-5 opacity-50" />
                <span className="font-medium">Silencieux</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex items-center justify-center lg:justify-start">
              <OrderModal>
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  Je Veux Ma Fraîcheur
                </Button>
              </OrderModal>
              <Button 
                variant="outline-fresh" 
                size="lg" 
                className="text-lg px-8 py-6 w-full sm:w-auto"
                onClick={scrollToFeatures}
              >
                Découvrir les Avantages
              </Button>
            </div>

            {/* Social Share */}
            <div className="flex justify-center lg:justify-start">
              <SocialShare variant="ghost" size="sm" />
            </div>

            {/* Special Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-warm-orange/10 text-warm-orange px-4 py-2 rounded-full border border-warm-orange/20">
              <span className="w-2 h-2 bg-warm-orange rounded-full animate-pulse"></span>
              <span className="font-semibold">Offre Limité</span>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroFan} 
                alt="Ventilateur mini portable" 
                className="w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;