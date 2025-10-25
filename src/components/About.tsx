import { Building2, Shield, Zap, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Resposta Rápida",
      description: "Atendimento ágil para não deixar seu negócio parado",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Transparência",
      description: "Processos claros e comunicação honesta em cada etapa",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Foco em Resultados",
      description: "Soluções eficazes alinhadas aos seus objetivos",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Suporte Dedicado",
      description: "Equipe presente para acompanhar seu crescimento",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            SOBRE A <span className="gradient-text">THCOMERCIO</span>
          </h2>
          <p className="section-subtitle">
            A THCOMERCIO atua com excelência, unindo agilidade e confiabilidade para impulsionar seu negócio. 
            Nossa missão é entregar soluções que fazem a diferença real no seu dia a dia.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span className="font-mono">CNPJ: 32.351.204/0001-63</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100%", label: "Comprometimento" },
            { value: "24h", label: "Resposta média" },
            { value: "10+", label: "Anos de experiência" },
            { value: "500+", label: "Clientes atendidos" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card rounded-2xl p-6">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
