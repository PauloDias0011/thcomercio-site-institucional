import { Button } from "@/components/ui/button";
import { Package, Briefcase, TrendingUp, Users, MessageCircle, Headphones } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const Services = () => {
  const services = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Soluções Comerciais",
      description: "Estratégias personalizadas para expandir seus negócios e alcançar novos mercados com segurança e eficiência.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Consultoria Empresarial",
      description: "Orientação especializada para otimizar processos, reduzir custos e maximizar resultados do seu empreendimento.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Gestão e Crescimento",
      description: "Planejamento estratégico focado no crescimento sustentável e na escalabilidade do seu negócio.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Desenvolvimento de Equipes",
      description: "Capacitação e treinamento para formar times de alta performance alinhados aos seus objetivos.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte Contínuo",
      description: "Acompanhamento dedicado para garantir que suas operações funcionem sem interrupções.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Atendimento Personalizado",
      description: "Canal direto de comunicação para esclarecer dúvidas e atender demandas com agilidade.",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="section-subtitle">
            Soluções completas e integradas para impulsionar todos os aspectos do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Solicitar orçamento
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Fale conosco e vamos criar a solução ideal para você.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-secondary rounded-full px-8"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com nossa equipe
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
