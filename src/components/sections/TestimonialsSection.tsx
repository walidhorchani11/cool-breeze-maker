import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Léa",
      role: "Graphiste",
      content: "Je ne peux plus m'en passer au bureau ! Discret, efficace et super pratique avec sa recharge USB. Un must-have pour l'été.",
      rating: 5,
      avatar: "🎨"
    },
    {
      name: "Thomas",
      role: "Étudiant",
      content: "Parfait pour les révisions ! Je peux enfin étudier sans transpirer. L'autonomie de 8h est top pour les longues sessions.",
      rating: 5,
      avatar: "📚"
    },
    {
      name: "Sarah",
      role: "Consultante",
      content: "Idéal en déplacement. Je l'emmène partout : trains, hôtels, bureaux clients. Petit mais puissant !",
      rating: 5,
      avatar: "✈️"
    },
    {
      name: "Marc",
      role: "Développeur",
      content: "Ultra silencieux, je peux l'utiliser en réunion vidéo sans gêner. Design élégant qui s'intègre parfaitement à mon setup.",
      rating: 5,
      avatar: "💻"
    }
  ];

  return (
    <section className="py-20 bg-cool-gray">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ils l'ont adopté. <span className="text-fresh-blue">Pourquoi pas vous ?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez ce que nos clients satisfaits disent de leur expérience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-fresh transition-all duration-300 transform hover:-translate-y-2 border border-border relative"
            >
              <Quote className="w-8 h-8 text-fresh-blue/30 mb-4" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-orange text-warm-orange" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-gradient-fresh rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border inline-block">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold text-fresh-blue">5 000+</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-fresh-blue">4.9/5</div>
                <div className="text-sm text-muted-foreground">Note moyenne</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-fresh-blue">98%</div>
                <div className="text-sm text-muted-foreground">Recommandent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;