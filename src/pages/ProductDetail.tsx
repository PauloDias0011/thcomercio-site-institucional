import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, Package, Shield, Truck, Filter, MessageCircle, Phone } from "lucide-react";
import { RelatedProducts } from "@/components/RelatedProducts";

// Import product images
import productDutos from "@/assets/product-dutos.jpg";
import productProtecoes from "@/assets/product-protecoes.jpg";
import productTransportadores from "@/assets/product-transportadores.jpg";
import productFiltragem from "@/assets/product-filtragem.jpg";
import productAcessorios from "@/assets/product-acessorios.jpg";

const WHATSAPP_URL = "https://wa.me/5598996179713?text=Olá%20THCOMERCIO%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20produto%3A%20";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const products = [
    // DUTOS
    {
      id: "trombas-carregamento",
      name: "Trombas de Carregamento",
      category: "dutos",
      description: "Soluções eficientes para carregamento de materiais em processos industriais",
      longDescription: "As trombas de carregamento são equipamentos essenciais para o transporte eficiente de materiais granulares e líquidos em processos industriais. Desenvolvidas com materiais de alta qualidade, oferecem durabilidade e confiabilidade para operações contínuas.",
      image: productDutos,
      features: [
        "Alta durabilidade e resistência à corrosão",
        "Fácil instalação e manutenção",
        "Design otimizado para fluxo eficiente",
        "Compatível com diversos tipos de materiais",
        "Resistente a temperaturas elevadas"
      ],
      specifications: {
        material: "Aço carbono SAE 1020",
        temperatura: "Até 200°C",
        pressao: "Até 10 bar",
        diametro: "100mm a 500mm",
        comprimento: "Até 3 metros"
      },
      applications: [
        "Indústria alimentícia",
        "Processamento de grãos",
        "Indústria química",
        "Mineradoras",
        "Siderúrgicas"
      ],
      benefits: [
        "Redução de perdas de material",
        "Aumento da eficiência operacional",
        "Menor necessidade de manutenção",
        "Maior segurança no processo"
      ]
    },
    {
      id: "dutos-flexiveis",
      name: "Dutos Flexíveis",
      category: "dutos",
      description: "Flexibilidade e resistência para diversas aplicações industriais",
      longDescription: "Os dutos flexíveis são a solução ideal para aplicações que requerem movimento e flexibilidade. Fabricados com materiais de alta qualidade, garantem resistência química e mecânica para os mais diversos processos industriais.",
      image: productDutos,
      features: [
        "Flexibilidade total com resistência mecânica",
        "Resistente a produtos químicos agressivos",
        "Fácil manutenção e limpeza",
        "Instalação rápida e simples",
        "Longa vida útil"
      ],
      specifications: {
        material: "Aço inoxidável 316L",
        temperatura: "Até 300°C",
        pressao: "Até 15 bar",
        diametro: "50mm a 300mm",
        comprimento: "Até 5 metros"
      },
      applications: [
        "Indústria farmacêutica",
        "Processamento químico",
        "Indústria petroquímica",
        "Tratamento de efluentes",
        "Sistemas de ventilação"
      ],
      benefits: [
        "Adaptabilidade a diferentes layouts",
        "Resistência à corrosão",
        "Facilidade de instalação",
        "Custo-benefício otimizado"
      ]
    },

    // PROTEÇÕES
    {
      id: "protecoes-sanfonadas",
      name: "Proteções Sanfonadas (Fole Sanfonado)",
      category: "protecoes",
      description: "Proteção eficaz contra contaminação e acidentes em máquinas",
      longDescription: "As proteções sanfonadas oferecem proteção completa para guias e eixos de máquinas-ferramentas, impedindo a entrada de contaminantes e garantindo a segurança dos operadores. Fabricadas com materiais de alta qualidade, proporcionam movimento suave e durabilidade excepcional.",
      image: productProtecoes,
      features: [
        "Movimento suave e silencioso",
        "Resistente ao desgaste e abrasão",
        "Fácil instalação e manutenção",
        "Proteção total contra contaminantes",
        "Design compacto e eficiente"
      ],
      specifications: {
        material: "PVC reforçado com nylon",
        temperatura: "Até 80°C",
        ciclo: "Mais de 1 milhão de ciclos",
        velocidade: "Até 50 m/min",
        compressao: "Até 80%"
      },
      applications: [
        "Máquinas-ferramentas CNC",
        "Centros de usinagem",
        "Tornos automáticos",
        "Fresadoras",
        "Retificadoras"
      ],
      benefits: [
        "Proteção total dos componentes",
        "Redução de manutenção",
        "Aumento da vida útil das máquinas",
        "Melhoria da qualidade do produto"
      ]
    },
    {
      id: "protecoes-telescopicas",
      name: "Proteções Telescópicas",
      category: "protecoes",
      description: "Proteção telescópica para movimentos lineares de alta precisão",
      longDescription: "As proteções telescópicas são ideais para aplicações que requerem movimento linear com alta precisão. Fabricadas em aço carbono de alta qualidade, oferecem proteção robusta e confiável para guias e sistemas de movimento.",
      image: productProtecoes,
      features: [
        "Movimento linear preciso",
        "Alta resistência mecânica",
        "Baixa necessidade de manutenção",
        "Instalação simples",
        "Design robusto"
      ],
      specifications: {
        material: "Aço carbono SAE 1045",
        temperatura: "Até 150°C",
        precisao: "±0.1mm",
        velocidade: "Até 30 m/min",
        carga: "Até 500 kg"
      },
      applications: [
        "Máquinas de corte",
        "Prensas hidráulicas",
        "Sistemas de posicionamento",
        "Equipamentos de solda",
        "Linhas de montagem"
      ],
      benefits: [
        "Precisão de movimento",
        "Durabilidade excepcional",
        "Proteção eficaz",
        "Custo-benefício otimizado"
      ]
    },
    {
      id: "rolo-cortina",
      name: "Rolo Cortina",
      category: "protecoes",
      description: "Sistema de proteção por cortina para áreas de trabalho",
      longDescription: "O sistema de rolo cortina oferece proteção eficaz para áreas de trabalho, mantendo a visibilidade e facilitando o acesso. Ideal para separação de ambientes e proteção contra partículas e respingos.",
      image: productProtecoes,
      features: [
        "Proteção total com visibilidade",
        "Instalação rápida e simples",
        "Movimento suave e silencioso",
        "Resistente a produtos químicos",
        "Fácil limpeza e manutenção"
      ],
      specifications: {
        material: "PVC transparente reforçado",
        temperatura: "Até 60°C",
        resistencia: "Alta resistência mecânica",
        velocidade: "Até 20 m/min",
        largura: "Até 3 metros"
      },
      applications: [
        "Cabines de pintura",
        "Estações de solda",
        "Áreas de processamento",
        "Laboratórios",
        "Ambientes controlados"
      ],
      benefits: [
        "Proteção eficaz",
        "Visibilidade mantida",
        "Facilidade de acesso",
        "Instalação rápida"
      ]
    },
    {
      id: "esteira-aluminio",
      name: "Esteira de Alumínio",
      category: "protecoes",
      description: "Esteiras leves e resistentes em alumínio para aplicações especiais",
      longDescription: "As esteiras de alumínio são ideais para aplicações que requerem leveza e resistência. Fabricadas em alumínio de alta qualidade, oferecem excelente resistência à corrosão e propriedades não magnéticas.",
      image: productProtecoes,
      features: [
        "Leveza excepcional",
        "Alta resistência à corrosão",
        "Propriedades não magnéticas",
        "Excelente condutividade térmica",
        "Facilidade de usinagem"
      ],
      specifications: {
        material: "Alumínio 6061-T6",
        temperatura: "Até 200°C",
        peso: "2.7 g/cm³",
        resistencia: "310 MPa",
        condutividade: "167 W/m·K"
      },
      applications: [
        "Indústria aeroespacial",
        "Equipamentos médicos",
        "Eletrônicos",
        "Indústria alimentícia",
        "Aplicações magnéticas"
      ],
      benefits: [
        "Redução de peso",
        "Resistência à corrosão",
        "Propriedades especiais",
        "Facilidade de trabalho"
      ]
    },

    // TRANSPORTADORES
    {
      id: "transportadores-cavacos",
      name: "Transportadores de Cavacos",
      category: "transportadores",
      description: "Sistema eficiente para transporte de cavacos e resíduos",
      longDescription: "Os transportadores de cavacos são equipamentos essenciais para a remoção eficiente de resíduos de usinagem. Projetados para alta capacidade e baixo consumo energético, garantem operação contínua e confiável.",
      image: productTransportadores,
      features: [
        "Alta capacidade de transporte",
        "Baixo consumo energético",
        "Manutenção simples e rápida",
        "Operação silenciosa",
        "Design compacto"
      ],
      specifications: {
        capacidade: "Até 500 kg/h",
        potencia: "1.5 a 15 kW",
        velocidade: "0.1 a 1 m/s",
        largura: "200mm a 800mm",
        comprimento: "Até 20 metros"
      },
      applications: [
        "Usinagem CNC",
        "Tornos automáticos",
        "Centros de usinagem",
        "Fresadoras",
        "Retificadoras"
      ],
      benefits: [
        "Automação do processo",
        "Redução de custos operacionais",
        "Melhoria da produtividade",
        "Ambiente de trabalho limpo"
      ]
    },
    {
      id: "transportadores-linha-pesada",
      name: "Transportadores Linha Pesada",
      category: "transportadores",
      description: "Transportadores robustos para cargas pesadas e aplicações industriais",
      longDescription: "Os transportadores de linha pesada são projetados para aplicações industriais que requerem alta capacidade e resistência. Fabricados com componentes robustos, garantem operação confiável mesmo em condições severas.",
      image: productTransportadores,
      features: [
        "Alta resistência mecânica",
        "Grande capacidade de carga",
        "Durabilidade excepcional",
        "Operação em condições severas",
        "Manutenção facilitada"
      ],
      specifications: {
        capacidade: "Até 2000 kg/h",
        potencia: "5 a 50 kW",
        velocidade: "0.05 a 0.5 m/s",
        largura: "400mm a 1200mm",
        comprimento: "Até 50 metros"
      },
      applications: [
        "Indústria siderúrgica",
        "Mineradoras",
        "Indústria automotiva",
        "Processamento de materiais",
        "Linhas de produção"
      ],
      benefits: [
        "Alta produtividade",
        "Confiabilidade operacional",
        "Redução de paradas",
        "Custo-benefício otimizado"
      ]
    },
    {
      id: "correia-transportadora-pecas",
      name: "Correia Transportadora de Peças",
      category: "transportadores",
      description: "Transporte preciso de peças industriais com controle de velocidade",
      longDescription: "As correias transportadoras de peças são projetadas para transporte preciso e controlado de componentes industriais. Com sistemas de controle avançados, garantem posicionamento exato e fluxo contínuo na linha de produção.",
      image: productTransportadores,
      features: [
        "Transporte preciso e controlado",
        "Movimento suave e uniforme",
        "Controle de velocidade variável",
        "Sistema de posicionamento",
        "Facilidade de integração"
      ],
      specifications: {
        precisao: "±0.5mm",
        velocidade: "0.1 a 2 m/s",
        carga: "Até 100 kg/m",
        largura: "100mm a 600mm",
        comprimento: "Até 30 metros"
      },
      applications: [
        "Linhas de montagem",
        "Sistemas de inspeção",
        "Estações de trabalho",
        "Processamento de peças",
        "Sistemas automatizados"
      ],
      benefits: [
        "Precisão de posicionamento",
        "Flexibilidade operacional",
        "Integração com sistemas",
        "Aumento da eficiência"
      ]
    },
    {
      id: "cacambas",
      name: "Caçambas",
      category: "transportadores",
      description: "Caçambas industriais para coleta e transporte de materiais",
      longDescription: "As caçambas industriais são equipamentos essenciais para coleta, armazenamento e transporte de materiais diversos. Projetadas para alta capacidade e facilidade de operação, garantem eficiência nos processos industriais.",
      image: productTransportadores,
      features: [
        "Grande capacidade de armazenamento",
        "Alta resistência estrutural",
        "Fácil operação de descarga",
        "Design otimizado para elevação",
        "Compatibilidade com equipamentos"
      ],
      specifications: {
        capacidade: "0.5 a 5 m³",
        material: "Aço carbono SAE 1020",
        peso: "50 a 500 kg",
        resistencia: "Alta resistência mecânica",
        aplicacao: "Elevação e transporte"
      },
      applications: [
        "Indústria de construção",
        "Mineradoras",
        "Indústria química",
        "Processamento de materiais",
        "Sistemas de elevação"
      ],
      benefits: [
        "Alta capacidade",
        "Facilidade de operação",
        "Durabilidade",
        "Versatilidade de aplicação"
      ]
    },

    // PRODUTOS ESPECIAIS
    {
      id: "sistema-filtragem",
      name: "Sistema de Filtragem",
      category: "especiais",
      description: "Sistemas completos de filtragem industrial de alta eficiência",
      longDescription: "Os sistemas de filtragem industrial são projetados para remoção eficiente de contaminantes em processos industriais. Com tecnologia avançada e componentes de alta qualidade, garantem qualidade do produto final e proteção dos equipamentos.",
      image: productFiltragem,
      features: [
        "Alta eficiência de filtragem",
        "Baixa necessidade de manutenção",
        "Economia de energia",
        "Sistema automatizado",
        "Monitoramento contínuo"
      ],
      specifications: {
        eficiencia: "99.9%",
        fluxo: "100 a 10000 m³/h",
        pressao: "Até 20 bar",
        temperatura: "Até 200°C",
        particulas: "Até 0.1 μm"
      },
      applications: [
        "Indústria farmacêutica",
        "Processamento de alimentos",
        "Indústria química",
        "Tratamento de água",
        "Sistemas de ar comprimido"
      ],
      benefits: [
        "Qualidade do produto",
        "Proteção dos equipamentos",
        "Redução de custos",
        "Conformidade regulatória"
      ]
    },
    {
      id: "acessorios-industriais",
      name: "Acessórios Industriais",
      category: "especiais",
      description: "Acessórios diversos para aplicações industriais especializadas",
      longDescription: "Nossa linha de acessórios industriais inclui uma ampla variedade de componentes e peças para aplicações especializadas. Fabricados com materiais de alta qualidade e seguindo padrões internacionais, garantem compatibilidade e confiabilidade.",
      image: productAcessorios,
      features: [
        "Ampla variedade de produtos",
        "Alta qualidade dos materiais",
        "Compatibilidade universal",
        "Padrões internacionais",
        "Disponibilidade imediata"
      ],
      specifications: {
        aplicacao: "Universal",
        material: "Diversos (aço, alumínio, plástico)",
        padrao: "ISO/ANSI/DIN",
        qualidade: "Alta precisão",
        certificacao: "Conformidade internacional"
      },
      applications: [
        "Manutenção industrial",
        "Reposição de peças",
        "Projetos especiais",
        "Sistemas customizados",
        "Aplicações gerais"
      ],
      benefits: [
        "Versatilidade",
        "Qualidade garantida",
        "Compatibilidade",
        "Suporte técnico"
      ]
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Button asChild>
            <Link to="/">Voltar ao início</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "dutos": return Package;
      case "protecoes": return Shield;
      case "transportadores": return Truck;
      case "especiais": return Filter;
      default: return Package;
    }
  };

  const CategoryIcon = getCategoryIcon(product.category);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="outline" size="sm">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Link>
            </Button>
            <Badge variant="secondary" className="flex items-center gap-2">
              <CategoryIcon className="h-4 w-4" />
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {product.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-video overflow-hidden rounded-2xl mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quick Contact */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Solicite um Orçamento
                </CardTitle>
                <CardDescription>
                  Entre em contato conosco para mais informações sobre este produto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full">
                  <a href={`${WHATSAPP_URL}${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+5598996179713">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar Agora
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Descrição Detalhada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Características Principais</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Especificações Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border/50">
                      <span className="font-medium capitalize">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Aplicações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {product.applications.map((application, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-2">
                      {application}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefícios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts 
        currentProductId={product.id} 
        currentCategory={product.category} 
      />
    </div>
  );
};
