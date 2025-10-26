import { Building2, Shield, Zap, Target } from "lucide-react";
import heroBackground from "@/assets/hero-industrial.jpg";

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
        {/* Header Section */}
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

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroBackground} 
                alt="Equipe THCOMERCIO trabalhando na fabricação de peças industriais" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Overlay with company info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Fabricação Nacional
                  </h3>
                  <p className="text-white/90 text-sm">
                    Equipe especializada trabalhando com tecnologia de ponta para entregar produtos de alta qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Nossa Equipe em Ação
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nossa equipe de profissionais altamente qualificados trabalha com dedicação 
                  e precisão para garantir que cada produto atenda aos mais altos padrões de qualidade. 
                  Utilizamos tecnologia de ponta e processos rigorosos de controle.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group glass-card rounded-2xl p-6 card-hover"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[hsl(var(--brand-blue))] via-[hsl(var(--brand-orange))] to-[hsl(var(--brand-yellow))] flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
