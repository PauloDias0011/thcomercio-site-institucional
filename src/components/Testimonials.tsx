import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo Santos",
      role: "Diretor Comercial",
      company: "Empresa de Logística",
      content: "A THCOMERCIO transformou completamente nossa operação. O atendimento é excepcional e os resultados superaram nossas expectativas. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "Mariana Oliveira Costa",
      role: "CEO",
      company: "Startup de Tecnologia",
      content: "Profissionalismo e agilidade definem a THCOMERCIO. Eles entenderam nossa necessidade e entregaram exatamente o que precisávamos, no prazo e com qualidade impecável.",
      rating: 5,
    },
    {
      name: "Roberto Ferreira Lima",
      role: "Gerente de Operações",
      company: "Indústria",
      content: "Parceria de verdade! A equipe da THCOMERCIO está sempre disponível e nos ajuda a resolver desafios complexos com soluções práticas e eficientes. Simplesmente excelente!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            O que dizem nossos <span className="text-primary">clientes</span>
          </h2>
          <p className="section-subtitle">
            Depoimentos reais de quem confia na THCOMERCIO para crescer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-border card-hover relative"
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
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary mb-3 flex items-center justify-center text-white font-bold text-lg">
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
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-200">
            <Star className="h-5 w-5 fill-green-600 text-green-600" />
            <span className="font-semibold">Avaliação 5.0 de nossos clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
