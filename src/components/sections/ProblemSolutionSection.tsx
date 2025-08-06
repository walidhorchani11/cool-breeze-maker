import { Button } from "@/components/ui/button";
import { Thermometer, Frown, CheckCircle } from "lucide-react";

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
              <div className="bg-card p-6 rounded-xl shadow-lg border border-destructive/20">
                <Frown className="w-8 h-8 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Au Bureau</h3>
                <p className="text-muted-foreground">
                  Transpiration excessive, difficultés de concentration, productivité en chute libre...
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-lg border border-destructive/20">
                <Frown className="w-8 h-8 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">En Transport</h3>
                <p className="text-muted-foreground">
                  Métro étouffant, voiture surchauffée, voyages devenus un calvaire...
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-lg border border-destructive/20">
                <Frown className="w-8 h-8 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">À la Maison</h3>
                <p className="text-muted-foreground">
                  Nuits agitées, sommeil perturbé, fatigue constante...
                </p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-8">
            <div className="bg-fresh-blue/10 p-8 rounded-2xl border border-fresh-blue/20">
              <CheckCircle className="w-12 h-12 text-success-green mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                La Solution est Entre Vos Mains
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Imaginez une brise rafraîchissante et silencieuse, disponible sur simple pression d'un bouton. 
                C'est la promesse de notre ventilateur mini portable. 
                <span className="text-fresh-blue font-semibold"> Reprenez le contrôle de votre confort.</span>
              </p>
              
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Obtenir Mon Ventilateur Portable
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;