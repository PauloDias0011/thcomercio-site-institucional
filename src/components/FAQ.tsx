import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual é o prazo médio de atendimento?",
      answer: "Nossa equipe responde em até 24 horas durante dias úteis. Para questões urgentes, entre em contato via WhatsApp e teremos prazer em atendê-lo com prioridade.",
    },
    {
      question: "Como funciona o processo de contratação?",
      answer: "É muito simples! Entre em contato pelo WhatsApp, conte sobre sua necessidade, e nossa equipe preparará uma proposta personalizada. Sem burocracia, com transparência total em cada etapa.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Trabalhamos com diversas modalidades: transferência bancária, PIX, boleto e parcelamento em cartão de crédito. Escolha a opção que melhor se adequa ao seu negócio.",
    },
    {
      question: "Vocês oferecem garantia nos serviços?",
      answer: "Sim! Todos os nossos serviços possuem garantia de qualidade. Trabalhamos até você ficar 100% satisfeito com o resultado. Seu sucesso é nossa prioridade.",
    },
    {
      question: "Há suporte após a conclusão do projeto?",
      answer: "Absolutamente! Oferecemos suporte contínuo para garantir que tudo funcione perfeitamente. Estamos sempre disponíveis para ajustes, melhorias e esclarecimentos.",
    },
    {
      question: "Atendem empresas de todos os portes?",
      answer: "Sim! Atendemos desde pequenos empreendedores até grandes empresas. Nossas soluções são personalizadas para o tamanho e necessidade específica de cada cliente.",
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
