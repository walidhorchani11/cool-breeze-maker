import { Button } from "@/components/ui/button";
import { Thermometer, Frown, CheckCircle } from "lucide-react";
import maisnegImage from "@/assets/maisneg.jpg";
import burnegImage from "@/assets/burneg.jpg";
import transnegImage from "@/assets/transneg.jpg";
import ventilateurMainImage from "@/assets/ventilateur_main.png";
import OrderModal from "@/components/OrderModal";

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-cool">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Problem Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
              <Thermometer className="w-10 h-10 text-destructive" />
              La Chaleur Estivale Ruine Votre Concentration et Votre Confort ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <img 
                  src={burnegImage} 
                  alt="Problème de chaleur au bureau" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-xl shadow-lg border border-destructive/20">
                  <Frown className="w-8 h-8 text-destructive mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Au Bureau</h3>
                  <p className="text-muted-foreground">
                    Transpiration excessive, difficultés de concentration, productivité en chute libre...
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <img 
                  src={transnegImage} 
                  alt="Problème de chaleur en transport" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-xl shadow-lg border border-destructive/20">
                  <Frown className="w-8 h-8 text-destructive mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">En Transport</h3>
                  <p className="text-muted-foreground">
                    Métro étouffant, voiture surchauffée, voyages devenus un calvaire...
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <img 
                  src={maisnegImage} 
                  alt="Problème de chaleur à la maison" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-xl shadow-lg border border-destructive/20">
                  <Frown className="w-8 h-8 text-destructive mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">À la Maison</h3>
                  <p className="text-muted-foreground">
                    Nuits agitées, sommeil perturbé, fatigue constante...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-8">
            <div className="bg-fresh-blue/10 p-8 rounded-2xl border border-fresh-blue/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Contenu à gauche */}
                <div className="text-center md:text-left">
                  <CheckCircle className="w-12 h-12 text-success-green mx-auto md:mx-0 mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    La Solution est Entre Vos Mains
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Imaginez une brise rafraîchissante et silencieuse, disponible sur simple pression d'un bouton. 
                    C'est la promesse de notre ventilateur mini portable. 
                    <span className="text-fresh-blue font-semibold"> Reprenez le contrôle de votre confort.</span>
                  </p>
                  
                  <OrderModal>
                    <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                      Obtenir Mon Ventilateur Portable
                    </Button>
                  </OrderModal>
                </div>
                
                {/* Image à droite */}
                <div className="flex justify-center md:justify-end">
                  <img 
                    src={ventilateurMainImage} 
                    alt="Ventilateur portable tenu dans les mains" 
                    className="w-full max-w-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;