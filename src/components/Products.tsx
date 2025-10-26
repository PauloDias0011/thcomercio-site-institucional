import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Shield, Truck, Filter } from "lucide-react";
import { Link } from "react-router-dom";

// Import product images
import productDutos from "@/assets/product-dutos.jpg";
import productProtecoes from "@/assets/product-protecoes.jpg";
import productTransportadores from "@/assets/product-transportadores.jpg";
import productFiltragem from "@/assets/product-filtragem.jpg";
import productAcessorios from "@/assets/product-acessorios.jpg";

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos", icon: Package },
    { id: "dutos", name: "Dutos", icon: Package },
    { id: "protecoes", name: "Proteções", icon: Shield },
    { id: "transportadores", name: "Transportadores", icon: Truck },
    { id: "especiais", name: "Especiais", icon: Filter },
  ];

  const products = [
    // DUTOS
    {
      id: "trombas-carregamento",
      name: "Trombas de Carregamento",
      category: "dutos",
      description: "Soluções eficientes para carregamento de materiais",
      image: productDutos,
      features: ["Alta durabilidade", "Fácil instalação", "Resistente à corrosão"],
      specifications: {
        material: "Aço carbono",
        temperatura: "Até 200°C",
        pressao: "Até 10 bar"
      }
    },
    {
      id: "dutos-flexiveis",
      name: "Dutos Flexíveis",
      category: "dutos",
      description: "Flexibilidade e resistência para diversas aplicações",
      image: productDutos,
      features: ["Flexibilidade total", "Resistente a produtos químicos", "Fácil manutenção"],
      specifications: {
        material: "Aço inoxidável",
        temperatura: "Até 300°C",
        pressao: "Até 15 bar"
      }
    },

    // PROTEÇÕES
    {
      id: "protecoes-sanfonadas",
      name: "Proteções Sanfonadas (Fole Sanfonado)",
      category: "protecoes",
      description: "Proteção eficaz contra contaminação e acidentes",
      image: productProtecoes,
      features: ["Movimento suave", "Resistente ao desgaste", "Fácil instalação"],
      specifications: {
        material: "PVC reforçado",
        temperatura: "Até 80°C",
        ciclo: "Mais de 1 milhão"
      }
    },
    {
      id: "protecoes-telescopicas",
      name: "Proteções Telescópicas",
      category: "protecoes",
      description: "Proteção telescópica para movimentos lineares",
      image: productProtecoes,
      features: ["Movimento linear", "Alta precisão", "Baixa manutenção"],
      specifications: {
        material: "Aço carbono",
        temperatura: "Até 150°C",
        precisao: "±0.1mm"
      }
    },
    {
      id: "rolo-cortina",
      name: "Rolo Cortina",
      category: "protecoes",
      description: "Sistema de proteção por cortina",
      image: productProtecoes,
      features: ["Proteção total", "Visibilidade mantida", "Instalação rápida"],
      specifications: {
        material: "PVC transparente",
        temperatura: "Até 60°C",
        resistencia: "Alta"
      }
    },
    {
      id: "esteira-aluminio",
      name: "Esteira de Alumínio",
      category: "protecoes",
      description: "Esteiras leves e resistentes em alumínio",
      image: productProtecoes,
      features: ["Leveza", "Resistência", "Não magnético"],
      specifications: {
        material: "Alumínio 6061",
        temperatura: "Até 200°C",
        peso: "2.7 g/cm³"
      }
    },

    // TRANSPORTADORES
    {
      id: "transportadores-cavacos",
      name: "Transportadores de Cavacos",
      category: "transportadores",
      description: "Sistema eficiente para transporte de cavacos",
      image: productTransportadores,
      features: ["Alta capacidade", "Baixo consumo", "Manutenção simples"],
      specifications: {
        capacidade: "Até 500 kg/h",
        potencia: "1.5 a 15 kW",
        velocidade: "0.1 a 1 m/s"
      }
    },
    {
      id: "transportadores-linha-pesada",
      name: "Transportadores Linha Pesada",
      category: "transportadores",
      description: "Transportadores robustos para cargas pesadas",
      image: productTransportadores,
      features: ["Alta resistência", "Grande capacidade", "Durabilidade"],
      specifications: {
        capacidade: "Até 2000 kg/h",
        potencia: "5 a 50 kW",
        velocidade: "0.05 a 0.5 m/s"
      }
    },
    {
      id: "correia-transportadora-pecas",
      name: "Correia Transportadora de Peças",
      category: "transportadores",
      description: "Transporte preciso de peças industriais",
      image: productTransportadores,
      features: ["Precisão", "Suavidade", "Controle de velocidade"],
      specifications: {
        precisao: "±0.5mm",
        velocidade: "0.1 a 2 m/s",
        carga: "Até 100 kg/m"
      }
    },
    {
      id: "cacambas",
      name: "Caçambas",
      category: "transportadores",
      description: "Caçambas industriais para coleta e transporte",
      image: productTransportadores,
      features: ["Grande capacidade", "Resistência", "Fácil descarga"],
      specifications: {
        capacidade: "0.5 a 5 m³",
        material: "Aço carbono",
        peso: "50 a 500 kg"
      }
    },

    // PRODUTOS ESPECIAIS
    {
      id: "sistema-filtragem",
      name: "Sistema de Filtragem",
      category: "especiais",
      description: "Sistemas completos de filtragem industrial",
      image: productFiltragem,
      features: ["Alta eficiência", "Baixa manutenção", "Economia de energia"],
      specifications: {
        eficiencia: "99.9%",
        fluxo: "100 a 10000 m³/h",
        pressao: "Até 20 bar"
      }
    },
    {
      id: "acessorios-industriais",
      name: "Acessórios Industriais",
      category: "especiais",
      description: "Acessórios diversos para aplicações industriais",
      image: productAcessorios,
      features: ["Variedade", "Qualidade", "Compatibilidade"],
      specifications: {
        aplicacao: "Universal",
        material: "Diversos",
        padrao: "ISO/ANSI"
      }
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, 6);

  return (
    <section id="produtos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title font-display">
            LINHA DE <span className="gradient-text">PRODUTOS</span>
          </h2>
          <p className="section-subtitle">
            Soluções industriais completas para suas necessidades
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2 rounded-full"
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProducts.map((product) => (
            <Card key={product.id} className="group card-hover">
              <CardHeader className="pb-4">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Principais Características:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button asChild className="w-full rounded-full">
                      <Link to={`/produto/${product.id}`}>
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {filteredProducts.length > 6 && (
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
