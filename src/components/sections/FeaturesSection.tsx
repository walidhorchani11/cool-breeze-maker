import { Smartphone, Battery, Wind, Volume2, Palette, Zap } from "lucide-react";

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
      title: "3 Vitesses Réglables",
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
    <section className="py-20 bg-background">
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
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border group"
            >
              <div className={`${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-fresh rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">8h</div>
              <div className="text-white/80">Autonomie</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-white/80">Vitesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200g</div>
              <div className="text-white/80">Poids plume</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30dB</div>
              <div className="text-white/80">Silencieux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;