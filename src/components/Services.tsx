import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import productTransportadores from "@/assets/product-transportadores.jpg";
import productProtecoes from "@/assets/product-protecoes.jpg";
import productDutos from "@/assets/product-dutos.jpg";
import productFiltragem from "@/assets/product-filtragem.jpg";
import productEspeciais from "@/assets/product-especiais.jpg";
import productAcessorios from "@/assets/product-acessorios.jpg";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const Services = () => {
  const services = [
    {
      image: productTransportadores,
      title: "Transportadores",
      description: "Transportadores de cavacos, linha pesada, correias transportadoras de peças e caçambas. Sistemas automatizados para movimentação de materiais.",
    },
    {
      image: productProtecoes,
      title: "Proteções",
      description: "Proteções sanfonadas (fole sanfonado), proteções telescópicas, rolo cortina e esteiras de alumínio para máquinas industriais.",
    },
    {
      image: productDutos,
      title: "Dutos",
      description: "Trombas de carregamento e dutos flexíveis para sistemas de ventilação e exaustão industrial.",
    },
    {
      image: productFiltragem,
      title: "Sistema de Filtragem",
      description: "Sistemas completos de filtragem industrial para limpeza de ar, separação de partículas e controle de poluição.",
    },
    {
      image: productEspeciais,
      title: "Produtos Especiais",
      description: "Máquinas, peças e acessórios especiais produzidos sob medida pensando no aumento de produtividade da sua empresa.",
    },
    {
      image: productAcessorios,
      title: "Peças e Acessórios",
      description: "Linha completa de peças de reposição e acessórios para manutenção e upgrade de equipamentos industriais.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            NOSSOS <span className="gradient-text">SERVIÇOS</span>
          </h2>
          <p className="section-subtitle">
            Soluções industriais completas para suas necessidades
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
                
                {/* Title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
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
                    Solicitar catálogo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Precisa de um produto personalizado? Desenvolvemos soluções sob medida para sua necessidade.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-secondary rounded-full px-10 py-6 text-lg"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com nossos especialistas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
