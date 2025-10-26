import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Package, Shield, Truck, Filter, Search } from "lucide-react";

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="outline" size="sm">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Link>
            </Button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Linha de Produtos
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Conheça nossa completa linha de produtos industriais, desenvolvidos com tecnologia de ponta e materiais de alta qualidade.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
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
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
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
                      {product.features.slice(0, 3).map((feature, index) => (
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
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground mb-4">
              Tente ajustar os filtros ou termo de busca
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}>
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glass-card rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">{products.length}</div>
            <div className="text-sm text-muted-foreground">Produtos</div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">{categories.length - 1}</div>
            <div className="text-sm text-muted-foreground">Categorias</div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Clientes</div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Anos</div>
          </div>
        </div>
      </div>
    </div>
  );
};
