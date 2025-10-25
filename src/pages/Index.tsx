import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Highlights } from "@/components/Highlights";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "THCOMERCIO",
      url: "https://thcomercio.com.br",
      logo: "https://thcomercio.com.br/logo.png",
      description: "Soluções sob medida com atendimento rápido, processos simples e foco total no resultado.",
      telephone: "+5598996179713",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "Avenida Principal, Maracujá",
          addressLocality: "São Luís",
          addressRegion: "MA",
          postalCode: "65090-300",
          addressCountry: "BR",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Rua São Judas Tadeu, Edifício Norte",
          addressLocality: "São Luís",
          addressRegion: "MA",
          postalCode: "65090-300",
          addressCountry: "BR",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+5598996179713",
        contactType: "Customer Service",
        availableLanguage: "Portuguese",
      },
      sameAs: [
        "https://wa.me/5598996179713",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Highlights />
          <Testimonials />
          <CTA />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
