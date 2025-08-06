import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Package } from "lucide-react";
import { useState, useEffect } from "react";

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [stockLevel, setStockLevel] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-warm-orange/5 to-fresh-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <div className="bg-card rounded-2xl shadow-2xl border border-warm-orange/20 overflow-hidden">
            <div className="bg-gradient-to-r from-warm-orange to-fresh-blue p-6 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Offre de Lancement Exceptionnelle !
              </h2>
              <p className="text-lg text-white/90">
                -50% et Livraison Gratuite Aujourd'hui Seulement !
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* Price Section */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-muted-foreground line-through">79€</span>
                  <span className="text-5xl font-bold text-fresh-blue">39€</span>
                  <div className="bg-warm-orange text-white px-3 py-1 rounded-full text-sm font-bold">
                    -50%
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Livraison gratuite incluse • Garantie 30 jours satisfait ou remboursé
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="bg-destructive/10 p-6 rounded-xl border border-destructive/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-destructive">Offre limitée dans le temps !</span>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="bg-destructive text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Heures</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-destructive text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-destructive text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Secondes</div>
                  </div>
                </div>
              </div>

              {/* Stock Indicator */}
              <div className="bg-warm-orange/10 p-6 rounded-xl border border-warm-orange/20">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-warm-orange" />
                  <span className="font-semibold text-warm-orange">
                    Attention : Stock Limité !
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Unités restantes</span>
                    <span className="font-semibold">{stockLevel} sur 100</span>
                  </div>
                  <div className="w-full bg-warm-orange/20 rounded-full h-3">
                    <div 
                      className="bg-warm-orange h-3 rounded-full transition-all duration-300"
                      style={{ width: `${stockLevel}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    En raison de la forte demande, les stocks s'épuisent rapidement
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-xl px-12 py-8 w-full md:w-auto animate-pulse-glow"
                >
                  <TrendingDown className="w-6 h-6 mr-2" />
                  Oui, Je Profite de -50% !
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Paiement 100% sécurisé • Livraison en 48h
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span>SSL Sécurisé</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span>Livraison 48h</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span>30j Garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;