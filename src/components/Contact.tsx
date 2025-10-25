import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Phone, ExternalLink } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const Contact = () => {
  const addresses = [
    {
      name: "Unidade Maracujá",
      address: "Avenida Principal, Maracujá",
      city: "São Luís - MA",
      cep: "CEP 65090-300",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Principal+Maracujá+São+Luís+MA",
    },
    {
      name: "Unidade Centro",
      address: "Rua São Judas Tadeu, Edifício Norte",
      city: "São Luís - MA",
      cep: "CEP 65090-300",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+São+Judas+Tadeu+Edifício+Norte+São+Luís+MA",
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="section-subtitle">
            Estamos prontos para atender você. Escolha a melhor forma de contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Fale Conosco</h3>
              
              {/* WhatsApp */}
              <div className="mb-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground mb-3">
                      Atendimento rápido e direto
                    </p>
                    <Button
                      asChild
                      className="btn-primary rounded-full"
                    >
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+5598996179713" className="hover:text-primary transition-colors">
                      +55 (98) 99617-9713
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Segunda a Sexta, 8h às 18h
                  </p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">THCOMERCIO</h3>
              <p className="text-sm text-muted-foreground font-mono">
                CNPJ: 32.351.204/0001-63
              </p>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-6">
            {addresses.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-border card-hover"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-2">{location.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {location.address}<br />
                      {location.city}<br />
                      {location.cep}
                    </p>
                  </div>
                </div>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full mt-4"
                >
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver no Google Maps
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-12 max-w-4xl mx-auto border border-border">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Prefere falar por WhatsApp?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            É rápido, prático e você recebe atendimento personalizado na hora. 
            Clique no botão abaixo e inicie uma conversa conosco agora mesmo.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-secondary rounded-full px-8"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Iniciar conversa no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
