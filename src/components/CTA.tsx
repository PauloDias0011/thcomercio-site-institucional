import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-blue))] via-[hsl(var(--brand-orange))] to-[hsl(var(--brand-yellow))]" />
      
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Precisa de um Orçamento?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba uma proposta personalizada para os produtos 
            que sua empresa precisa. Nossa equipe técnica está pronta para atender você.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Orçamento sem compromisso",
              "Resposta em até 24h",
              "Suporte técnico incluso",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-white">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 text-lg shadow-2xl"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar orçamento agora
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 text-lg"
            >
              <a href="#contato">
                Ver informações de contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-8 text-white/80 text-sm">
            🏭 Fabricação nacional com os mais altos padrões de qualidade
          </p>
        </div>
      </div>
    </section>
  );
};
