import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Início", href: "/" },
    { label: "Artigos", href: "/#artigos" },
    { label: "Categorias", href: "/#categorias" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container mx-auto flex h-8 items-center px-6">
          <span className="font-sans text-xs font-medium text-primary-foreground">
            MindMed — Centro de Inteligência em IA Médica
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-serif text-xl font-bold text-foreground">
            MindMed <span className="font-sans text-sm font-normal text-muted-foreground">Blog</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button className="text-muted-foreground transition-colors hover:text-foreground">
            <Search size={16} />
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-muted-foreground md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-6 py-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 font-sans text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default BlogHeader;
