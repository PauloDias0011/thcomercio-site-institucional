import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual é o prazo de entrega dos produtos?",
      answer: "O prazo varia conforme o produto e quantidade. Itens de linha geralmente são entregues em 7 a 15 dias úteis. Para produtos especiais sob medida, o prazo é definido após análise do projeto. Entre em contato para um orçamento detalhado com prazos específicos.",
    },
    {
      question: "Vocês fazem produtos personalizados?",
      answer: "Sim! Desenvolvemos produtos especiais sob medida para atender necessidades específicas. Nossa equipe técnica analisa seu projeto e desenvolve a solução ideal. Entre em contato pelo WhatsApp com suas especificações.",
    },
    {
      question: "Como funciona a garantia dos produtos?",
      answer: "Todos os nossos produtos possuem garantia contra defeitos de fabricação. O período varia de acordo com o produto, mas geralmente é de 12 meses. Oferecemos suporte técnico durante e após o período de garantia.",
    },
    {
      question: "Fazem instalação dos equipamentos?",
      answer: "Sim, oferecemos serviço de instalação e comissionamento para garantir o perfeito funcionamento dos equipamentos. Nossa equipe técnica realiza a montagem e orienta sobre operação e manutenção.",
    },
    {
      question: "Vocês fornecem catálogos técnicos?",
      answer: "Sim! Disponibilizamos catálogos técnicos completos com especificações, dimensões e características de cada produto. Entre em contato pelo WhatsApp e informe qual categoria de produto você deseja conhecer.",
    },
    {
      question: "Atendem todo o Brasil?",
      answer: "Sim, atendemos todo o território nacional. Temos logística estruturada para entregas em qualquer região do país. Consulte as condições de frete para sua localidade.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            PERGUNTAS <span className="gradient-text">FREQUENTES</span>
          </h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços e atendimento
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0",
                    openIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-flex items-center"
          >
            Fale conosco no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
