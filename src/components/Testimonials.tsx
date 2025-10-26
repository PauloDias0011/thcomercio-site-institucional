import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "José Carlos Mendes",
      role: "Gerente de Produção",
      company: "Metalúrgica Industrial",
      content: "Os transportadores da THCOMERCIO revolucionaram nossa linha de produção. Qualidade excepcional e suporte técnico impecável. Investimento que se paga rapidamente!",
      rating: 5,
    },
    {
      name: "Ana Paula Rodrigues",
      role: "Diretora de Operações",
      company: "Indústria de Usinagem",
      content: "Adquirimos o sistema completo de proteções para nossas máquinas CNC. Produto robusto, instalação perfeita e preço justo. A THCOMERCIO é nossa parceira de confiança.",
      rating: 5,
    },
    {
      name: "Ricardo Almeida Silva",
      role: "Engenheiro de Manutenção",
      company: "Fábrica de Componentes",
      content: "Sistema de filtragem de altíssima qualidade! Reduziu drasticamente o tempo de manutenção preventiva. Equipe técnica sempre pronta para auxiliar. Recomendo!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            O QUE DIZEM NOSSOS <span className="gradient-text">CLIENTES</span>
          </h2>
          <p className="section-subtitle">
            Depoimentos reais de quem confia na THCOMERCIO para crescer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 card-hover relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="h-16 w-16" />
              </div>

              {/* Rating */}
              <div className="flex mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[hsl(var(--brand-blue))] via-[hsl(var(--brand-orange))] to-[hsl(var(--brand-yellow))] mb-3 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">Avaliação 5.0 de nossos clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
