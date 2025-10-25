import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

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
              <TrendingUp className="mr-2 h-4 w-4" />
              Soluções que impulsionam seu negócio
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
            MAIOR PARCEIRO EM{" "}
            <span className="gradient-text block mt-2">
              SOLUÇÕES COMERCIAIS
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
            A THCOMERCIO preza pela qualidade e agilidade, buscando sempre o melhor para o nosso parceiro e garantindo todo suporte e rapidez no atendimento.
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
                Fale no WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-lg border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
            >
              <a href="#servicos">
                Conheça nossos serviços
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
                <p className="font-bold text-white text-lg">Resposta Rápida</p>
                <p className="text-sm text-gray-400">Em até 24 horas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-2xl glass-card flex items-center justify-center shadow-lg">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-lg">Sem Burocracia</p>
                <p className="text-sm text-gray-400">Processos simples</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 rounded-2xl glass-card flex items-center justify-center shadow-lg">
                <TrendingUp className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-lg">Resultados</p>
                <p className="text-sm text-gray-400">Comprovados</p>
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
