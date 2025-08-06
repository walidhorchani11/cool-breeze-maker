import { Shield, CreditCard, Truck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantie Satisfait ou Remboursé 30 Jours",
      description: "Testez-le, adorez-le, ou nous vous remboursons intégralement.",
      color: "text-success-green"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Paiement Sécurisé",
      description: "Vos informations sont protégées par un cryptage SSL.",
      color: "text-fresh-blue"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Livraison Rapide",
      description: "Recevez votre ventilateur chez vous en 48h.",
      color: "text-warm-orange"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support Client Réactif",
      description: "Une question ? Notre équipe vous répond 7j/7.",
      color: "text-fresh-blue"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Votre Achat, <span className="text-success-green">100% Sans Risque</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous mettons tout en œuvre pour vous garantir une expérience d'achat parfaite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border text-center group"
              >
                <div className={`${guarantee.color} mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {guarantee.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Pourquoi Choisir Notre Ventilateur ?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-success-green rounded-full mx-auto"></div>
                  <div className="font-semibold">Qualité Premium</div>
                  <div className="text-muted-foreground">Matériaux durables et design soigné</div>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-success-green rounded-full mx-auto"></div>
                  <div className="font-semibold">Testé & Approuvé</div>
                  <div className="text-muted-foreground">Plus de 5000 clients satisfaits</div>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-success-green rounded-full mx-auto"></div>
                  <div className="font-semibold">Innovation</div>
                  <div className="text-muted-foreground">Technologie de pointe silencieuse</div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-4">
                  Rejoignez les milliers de personnes qui ont déjà transformé leur été
                </p>
                <div className="flex justify-center">
                  <Button variant="outline-fresh" size="lg" className="px-8">
                    Lire Tous les Avis Clients
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;