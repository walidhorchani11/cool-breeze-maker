import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Wind } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-fresh text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Question */}
          <div className="space-y-4">
            <Wind className="w-16 h-16 mx-auto text-white/80" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Prêt(e) à passer un été au frais ?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Ne laissez plus la chaleur gâcher vos journées. Votre confort personnel commence maintenant !
            </p>
          </div>

          {/* Benefits Recap */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Star className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Efficacité Prouvée</h3>
              <p className="text-white/80 text-sm">Plus de 5000 clients satisfaits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Wind className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Ultra-Portable</h3>
              <p className="text-white/80 text-sm">8h d'autonomie, 3 vitesses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <ArrowRight className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-white/80 text-sm">Chez vous en 48h maximum</p>
            </div>
          </div>

          {/* Final Offer Reminder */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl line-through text-white/60">79€</span>
              <span className="text-4xl font-bold">39€</span>
              <div className="bg-warm-orange text-white px-4 py-2 rounded-full text-lg font-bold">
                -50%
              </div>
            </div>
            <p className="text-white/90 mb-6">
              Offre de lancement limitée • Livraison gratuite incluse • Garantie 30 jours
            </p>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-xl px-12 py-8 bg-white text-fresh-blue hover:bg-white/90 hover:text-fresh-blue-dark shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 mr-2" />
              Commander Mon Ventilateur Mini Portable
            </Button>
            
            <div className="flex justify-center gap-6 text-sm text-white/70">
              <span>✓ Paiement sécurisé</span>
              <span>✓ Livraison 48h</span>
              <span>✓ Satisfait ou remboursé</span>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80 italic">
              "Les stocks sont limités et l'offre -50% se termine bientôt. 
              Ne ratez pas cette opportunité de transformer votre été !"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;