import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { label: "Início", href: "/#inicio" },
    { label: "Destaques", href: "/#destaques" },
    { label: "Artigos", href: "/#artigos" },
    { label: "Categorias", href: "/#categorias" },
    { label: "Sobre", href: "/#sobre" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return;

    // If we're already on the home page, scroll to section
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (hash === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // Otherwise, let the link navigate to /#hash
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/98 shadow-sm backdrop-blur-md"
          : "border-b border-border bg-background"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full bg-primary" />

      {/* Main nav */}
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary transition-transform duration-200 group-hover:scale-105">
            <span className="font-serif text-sm font-bold text-primary-foreground">M</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-lg font-bold tracking-tight text-foreground">
              MindMed
            </span>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Blog
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-md px-3 py-2 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 h-5 w-px bg-border" />
          <a
            href="https://mindmed.online"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-primary px-4 py-2 font-sans text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
          >
            Conhecer a MindMed
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
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
              className="rounded-md px-4 py-3 font-sans text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="my-2 h-px bg-border" />
          <a
            href="https://mindmed.online"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-4 py-3 text-center font-sans text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Conhecer a MindMed
          </a>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
