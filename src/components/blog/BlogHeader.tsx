import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mindmedLogo from "@/assets/mindmed-logo.png";

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { label: "Início", href: "/#inicio" },
    { label: "Destaques", href: "/#destaques" },
    { label: "Arquivo", href: "/#artigos" },
    { label: "Áreas", href: "/#categorias" },
    { label: "Sobre", href: "/#sobre" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return;
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (hash === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-border bg-background"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded bg-foreground transition-transform duration-200 group-hover:scale-105">
            <img src={mindmedLogo} alt="MindMed" className="h-5 w-5 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold tracking-tight text-foreground">
              MindMed
            </span>
            <span className="mt-0.5 font-sans text-[9px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Publicação editorial
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded px-3 py-2 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded px-4 py-3 font-sans text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
