import { CheckCircle, Award, Rocket, Lightbulb, Heart, Star } from "lucide-react";

export const Highlights = () => {
  const highlights = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "Excelência Reconhecida",
      description: "Qualidade comprovada em cada projeto entregue aos nossos clientes",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Inovação Constante",
      description: "Sempre à frente com soluções modernas e eficientes",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Resultados Garantidos",
      description: "Compromisso com entregas que geram valor real",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Soluções Criativas",
      description: "Pensamento estratégico para desafios complexos",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Atendimento Humanizado",
      description: "Cuidado e atenção em cada interação",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Padrão de Qualidade",
      description: "Processos rigorosos para resultados superiores",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="destaques" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            NOSSOS <span className="gradient-text">DIFERENCIAIS</span>
          </h2>
          <p className="section-subtitle">
            O que nos torna a escolha ideal para impulsionar o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl glass-card p-8 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className={`inline-flex h-20 w-20 rounded-2xl bg-gradient-to-br ${highlight.color} items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {highlight.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {highlight.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              {/* Decorative gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já confiam na THCOMERCIO
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Resposta rápida</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Atendimento personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
