import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Package, Shield, Truck, Filter } from "lucide-react";

interface RelatedProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

interface RelatedProductsProps {
  currentProductId: string;
  currentCategory: string;
}

export const RelatedProducts = ({ currentProductId, currentCategory }: RelatedProductsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allProducts: RelatedProduct[] = [
    // DUTOS
    {
      id: "trombas-carregamento",
      name: "Trombas de Carregamento",
      category: "dutos",
      description: "Soluções eficientes para carregamento de materiais",
      image: "/src/assets/product-dutos.jpg",
      features: ["Alta durabilidade", "Fácil instalação", "Resistente à corrosão"],
    },
    {
      id: "dutos-flexiveis",
      name: "Dutos Flexíveis",
      category: "dutos",
      description: "Flexibilidade e resistência para diversas aplicações",
      image: "/src/assets/product-dutos.jpg",
      features: ["Flexibilidade total", "Resistente a produtos químicos", "Fácil manutenção"],
    },

    // PROTEÇÕES
    {
      id: "protecoes-sanfonadas",
      name: "Proteções Sanfonadas (Fole Sanfonado)",
      category: "protecoes",
      description: "Proteção eficaz contra contaminação e acidentes",
      image: "/src/assets/product-protecoes.jpg",
      features: ["Movimento suave", "Resistente ao desgaste", "Fácil instalação"],
    },
    {
      id: "protecoes-telescopicas",
      name: "Proteções Telescópicas",
      category: "protecoes",
      description: "Proteção telescópica para movimentos lineares",
      image: "/src/assets/product-protecoes.jpg",
      features: ["Movimento linear", "Alta precisão", "Baixa manutenção"],
    },
    {
      id: "rolo-cortina",
      name: "Rolo Cortina",
      category: "protecoes",
      description: "Sistema de proteção por cortina",
      image: "/src/assets/product-protecoes.jpg",
      features: ["Proteção total", "Visibilidade mantida", "Instalação rápida"],
    },
    {
      id: "esteira-aluminio",
      name: "Esteira de Alumínio",
      category: "protecoes",
      description: "Esteiras leves e resistentes em alumínio",
      image: "/src/assets/product-protecoes.jpg",
      features: ["Leveza", "Resistência", "Não magnético"],
    },

    // TRANSPORTADORES
    {
      id: "transportadores-cavacos",
      name: "Transportadores de Cavacos",
      category: "transportadores",
      description: "Sistema eficiente para transporte de cavacos",
      image: "/src/assets/product-transportadores.jpg",
      features: ["Alta capacidade", "Baixo consumo", "Manutenção simples"],
    },
    {
      id: "transportadores-linha-pesada",
      name: "Transportadores Linha Pesada",
      category: "transportadores",
      description: "Transportadores robustos para cargas pesadas",
      image: "/src/assets/product-transportadores.jpg",
      features: ["Alta resistência", "Grande capacidade", "Durabilidade"],
    },
    {
      id: "correia-transportadora-pecas",
      name: "Correia Transportadora de Peças",
      category: "transportadores",
      description: "Transporte preciso de peças industriais",
      image: "/src/assets/product-transportadores.jpg",
      features: ["Precisão", "Suavidade", "Controle de velocidade"],
    },
    {
      id: "cacambas",
      name: "Caçambas",
      category: "transportadores",
      description: "Caçambas industriais para coleta e transporte",
      image: "/src/assets/product-transportadores.jpg",
      features: ["Grande capacidade", "Resistência", "Fácil descarga"],
    },

    // PRODUTOS ESPECIAIS
    {
      id: "sistema-filtragem",
      name: "Sistema de Filtragem",
      category: "especiais",
      description: "Sistemas completos de filtragem industrial",
      image: "/src/assets/product-filtragem.jpg",
      features: ["Alta eficiência", "Baixa manutenção", "Economia de energia"],
    },
    {
      id: "acessorios-industriais",
      name: "Acessórios Industriais",
      category: "especiais",
      description: "Acessórios diversos para aplicações industriais",
      image: "/src/assets/product-acessorios.jpg",
      features: ["Variedade", "Qualidade", "Compatibilidade"],
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "dutos": return Package;
      case "protecoes": return Shield;
      case "transportadores": return Truck;
      case "especiais": return Filter;
      default: return Package;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "dutos": return "Dutos";
      case "protecoes": return "Proteções";
      case "transportadores": return "Transportadores";
      case "especiais": return "Especiais";
      default: return "Produtos";
    }
  };

  // Filtrar produtos relacionados (mesma categoria, excluindo o produto atual)
  const relatedProducts = allProducts.filter(
    product => product.category === currentCategory && product.id !== currentProductId
  );

  // Se não houver produtos da mesma categoria, mostrar produtos de outras categorias
  const displayProducts = relatedProducts.length > 0 
    ? relatedProducts 
    : allProducts.filter(product => product.id !== currentProductId);

  const productsPerPage = 3;
  const totalPages = Math.ceil(displayProducts.length / productsPerPage);
  const currentProducts = displayProducts.slice(
    currentIndex * productsPerPage,
    (currentIndex + 1) * productsPerPage
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produtos <span className="gradient-text">Relacionados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça outros produtos que podem interessar você
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => {
              const CategoryIcon = getCategoryIcon(product.category);
              return (
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
                      <Badge variant="secondary" className="text-xs flex items-center gap-1">
                        <CategoryIcon className="h-3 w-3" />
                        {getCategoryName(product.category)}
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
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link to="/produtos">
              Ver Todos os Produtos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
