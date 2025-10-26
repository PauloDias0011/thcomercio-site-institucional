import { Building2, Shield, Zap, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Entrega Ágil",
      description: "Produção otimizada para atender seus prazos com eficiência",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Qualidade Certificada",
      description: "Produtos testados e aprovados com rigoroso controle de qualidade",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precisão Técnica",
      description: "Especificações exatas para perfeito funcionamento",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Suporte Técnico",
      description: "Equipe especializada para orientação e assistência",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            TECNOLOGIA E COMPROMISSO A FAVOR DA{" "}
            <span className="gradient-text">QUALIDADE</span>
          </h2>
          <p className="section-subtitle">
            A T COMERCIO é referência em fabricação de peças e acessórios industriais, 
            unindo tecnologia de ponta e know-how para entregar produtos que aumentam 
            a produtividade e segurança das suas operações.
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
            { value: "7+", label: "Anos de experiência" },
            { value: "5000+", label: "Produtos entregues" },
            { value: "98%", label: "Satisfação dos clientes" },
            { value: "100%", label: "Fabricação nacional" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card rounded-2xl p-6">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quality commitment */}
        <div className="mt-16 glass-card rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Compromisso com a Excelência
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Investimos continuamente em tecnologia e capacitação para oferecer produtos 
            que atendem às mais rigorosas normas técnicas e de segurança. Nossa missão 
            é ser o parceiro ideal para o crescimento da sua indústria.
          </p>
        </div>
      </div>
    </section>
  );
};
