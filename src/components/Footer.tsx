import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20vim%20pelo%20site.";

export const Footer = () => {
  const menuLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Destaques", href: "#destaques" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[hsl(220_25%_10%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_10%)] text-white border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="THCOMERCIO" className="h-12 mb-4" />
            <p className="text-gray-400 leading-relaxed">
              Fabricante de peças e acessórios industriais com tecnologia de ponta e compromisso com a qualidade.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              CNPJ: 32.351.204/0001-63
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span> +55 (98) 4141-4440</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5598996179713"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>+55 (98) 99617-9713</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Endereços</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  Avenida Principal, Maracujá<br />
                  São Luís - MA, CEP 65090-300
                </span>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} THCOMERCIO. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Fale Conosco
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 text-sm">
                Desenvolvido com ❤️
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
