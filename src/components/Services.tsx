import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import serviceGrowth from "@/assets/service-growth.jpg";
import serviceTeam from "@/assets/service-team.jpg";
import serviceSupport from "@/assets/service-support.jpg";
import serviceCommunication from "@/assets/service-communication.jpg";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const Services = () => {
  const services = [
    {
      image: serviceCommercial,
      title: "Soluções Comerciais",
      description: "Estratégias personalizadas para expandir seus negócios e alcançar novos mercados com segurança e eficiência.",
    },
    {
      image: serviceConsulting,
      title: "Consultoria Empresarial",
      description: "Orientação especializada para otimizar processos, reduzir custos e maximizar resultados do seu empreendimento.",
    },
    {
      image: serviceGrowth,
      title: "Gestão e Crescimento",
      description: "Planejamento estratégico focado no crescimento sustentável e na escalabilidade do seu negócio.",
    },
    {
      image: serviceTeam,
      title: "Desenvolvimento de Equipes",
      description: "Capacitação e treinamento para formar times de alta performance alinhados aos seus objetivos.",
    },
    {
      image: serviceSupport,
      title: "Suporte Contínuo",
      description: "Acompanhamento dedicado para garantir que suas operações funcionem sem interrupções.",
    },
    {
      image: serviceCommunication,
      title: "Atendimento Personalizado",
      description: "Canal direto de comunicação para esclarecer dúvidas e atender demandas com agilidade.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            CONHEÇA NOSSA LINHA DE{" "}
            <span className="gradient-text">SERVIÇOS</span>
          </h2>
          <p className="section-subtitle">
            Soluções completas e integradas produzidas pensando no aumento de produtividade da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Solicitar orçamento
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Não encontrou o que procura? Fale conosco e vamos criar a solução ideal para você.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-secondary rounded-full px-10 py-6 text-lg"
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
