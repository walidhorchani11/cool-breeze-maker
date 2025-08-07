import { Smartphone, Battery, Wind, Volume2, Palette, Zap } from "lucide-react";
import posImage from "@/assets/pos.jpg";
import jolieImage from "@/assets/jolie.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Ultra-Portable et Léger",
      description: "Glissez-le dans votre sac et oubliez-le... jusqu'à ce que la chaleur monte.",
      color: "text-fresh-blue"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Autonomie Longue Durée (8h)",
      description: "Une journée complète de fraîcheur sans avoir besoin de le recharger.",
      color: "text-success-green"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rechargeable par USB",
      description: "Branchez-le sur votre ordinateur, batterie externe ou prise murale. Simple et universel.",
      color: "text-warm-orange"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Vitesses Réglables",
      description: "De la brise légère pour la concentration à un souffle puissant pour un soulagement immédiat.",
      color: "text-fresh-blue"
    },
    {
      icon: <Volume2 className="w-8 h-8 opacity-50" />,
      title: "Fonctionnement Silencieux",
      description: "Restez au frais sans déranger vos collègues ou perturber votre sommeil.",
      color: "text-muted-foreground"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Élégant et Moderne",
      description: "Un accessoire stylé qui complète votre espace de travail ou votre tenue.",
      color: "text-fresh-blue"
    }
  ];

  return (
    <section className="py-20 bg-background" data-section="features">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Une Technologie de <span className="text-fresh-blue">Fraîcheur</span> qui Tient dans la Main
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les caractéristiques qui font de ce ventilateur votre meilleur allié contre la chaleur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Première carte */}
          <div 
            className="bg-card p-8 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border group h-64"
          >
            <div className="text-fresh-blue mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ultra-Portable et Léger
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Glissez-le dans votre sac et oubliez-le... jusqu'à ce que la chaleur monte.
            </p>
          </div>

          {/* Image jolie.jpg remplace la deuxième carte */}
          <div className="bg-card rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border group overflow-hidden h-64">
            <img 
              src={jolieImage} 
              alt="Image jolie" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Troisième carte */}
          <div 
            className="bg-card p-8 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border group h-64"
          >
            <div className="text-warm-orange mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Rechargeable par USB
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Branchez-le sur votre ordinateur, batterie externe ou prise murale. Simple et universel.
            </p>
          </div>

          {/* Quatrième carte */}
          <div 
            className="bg-card p-8 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border group h-64"
          >
            <div className="text-fresh-blue mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wind className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Vitesses Réglables
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              De la brise légère pour la concentration à un souffle puissant pour un soulagement immédiat.
            </p>
          </div>

          {/* Cinquième carte */}
          <div 
            className="bg-card p-8 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border group h-64"
          >
            <div className="text-fresh-blue mb-6 group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Design Élégant et Moderne
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Un accessoire stylé qui complète votre espace de travail ou votre tenue.
            </p>
          </div>

          {/* Sixième carte */}
          <div 
            className="bg-card p-8 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border group h-64"
          >
            <div className="text-muted-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
              <Volume2 className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Fonctionnement Silencieux
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Restez au frais sans déranger vos collègues ou perturber votre sommeil.
            </p>
          </div>
        </div>

        {/* Image pos.png remplace la section des statistiques */}
        <div className="mt-16 text-center">
          <img 
            src={posImage} 
            alt="Femme utilisant un ventilateur portable sur une terrasse" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;