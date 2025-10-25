import { useEffect, useRef } from "react";
import csnLogo from "@/assets/csn-logo.png";
import valeLogo from "@/assets/Logotipo_Vale.svg.png";
import mrnLogo from "@/assets/mrn2-logo.png";
import vliLogo from "@/assets/VLI.png";

export const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    {
      name: "CSN",
      logo: csnLogo,
      alt: "CSN - Companhia Siderúrgica Nacional"
    },
    {
      name: "Vale",
      logo: valeLogo,
      alt: "Vale - Mineração"
    },
    {
      name: "MRN",
      logo: mrnLogo,
      alt: "MRN - Mineração Rio do Norte"
    },
    {
      name: "VLI",
      logo: vliLogo,
      alt: "VLI - Logística"
    }
  ];

  return (
    <section id="clientes" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confiamos em grandes empresas do setor industrial e de mineração
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-0 transition-all duration-1000"
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-border/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="max-h-16 max-w-32 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            + de 50 empresas atendidas em todo o Brasil
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
