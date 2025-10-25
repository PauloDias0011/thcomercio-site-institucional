import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-display font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="btn-primary rounded-full px-8">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar para o início
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-2" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
