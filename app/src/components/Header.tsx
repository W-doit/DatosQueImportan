import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "España", path: "/espana" },
  { label: "Subvenciones", path: "/subvenciones" },
  { label: "Justicia", path: "/justicia" },
  { label: "Candidatos", path: "/candidatos" },
];

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-14 border-b bg-background/90 backdrop-blur-lg">
      <div className="container flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-foreground">Datos</span><span className="text-accent">Que</span><span className="text-primary">Importan</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-foreground bg-secondary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-b bg-background p-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start text-sm font-medium"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
