import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Cog, Shield, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-industrial.jpg";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(15, 23, 42, 0.85) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="inline-flex items-center px-6 py-3 rounded-full glass-card text-primary text-sm font-medium shadow-lg">
              <Cog className="mr-2 h-4 w-4" />
              Fabricação Nacional de Alta Qualidade
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
            MAIOR FABRICANTE DE{" "}
            <span className="gradient-text block mt-2">
              PEÇAS E ACESSÓRIOS
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
            A T COMERCIO preza pela qualidade dos seus produtos buscando sempre o melhor para o nosso parceiro e garantindo todo suporte e rapidez no atendimento.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
            <Button
              asChild
              size="lg"
              className="btn-primary rounded-full px-10 py-7 text-lg font-semibold"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Solicite um Orçamento
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-lg border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
            >
              <a href="#servicos">
                Ver Linha de Produtos
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-12 pt-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-400">
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-2xl glass-card flex items-center justify-center shadow-lg">
                <Zap className="h-7 w-7 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-lg">Produção Própria</p>
                <p className="text-sm text-gray-400">Fabricação nacional</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-2xl glass-card flex items-center justify-center shadow-lg">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-lg">Garantia Total</p>
                <p className="text-sm text-gray-400">Produtos certificados</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-2xl glass-card flex items-center justify-center shadow-lg">
                <Cog className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-lg">Alta Tecnologia</p>
                <p className="text-sm text-gray-400">Equipamentos modernos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
