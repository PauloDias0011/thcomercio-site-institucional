import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🚀 Soluções que impulsionam seu negócio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Soluções sob medida com a{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-orange))] bg-clip-text text-transparent">
                THCOMERCIO
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Atendimento rápido, processos simples e foco total no resultado. Transforme desafios em oportunidades com quem entende do seu negócio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="btn-primary rounded-full px-8 text-base"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale no WhatsApp
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base border-2 hover:bg-primary/5"
              >
                <a href="#servicos">
                  Conheça nossos serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Resposta Rápida</p>
                  <p className="text-sm text-muted-foreground">Em horário comercial</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sem Burocracia</p>
                  <p className="text-sm text-muted-foreground">Processos simples</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6 scale-105 blur-2xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white space-y-4 p-8">
                    <div className="text-6xl md:text-8xl font-display font-bold">TH</div>
                    <p className="text-xl md:text-2xl font-semibold">COMERCIO</p>
                    <p className="text-sm md:text-base opacity-90">Excelência em resultados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
