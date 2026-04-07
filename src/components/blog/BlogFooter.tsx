import { ArrowUpRight } from "lucide-react";

const BlogFooter = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-secondary/50 py-14">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="font-serif text-xs font-bold text-primary-foreground">M</span>
              </div>
              <span className="font-serif text-lg font-bold text-foreground">MindMed</span>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Blog
              </span>
            </div>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
              O principal centro de inteligência sobre IA na medicina do Brasil.
              Estudos reais, impacto financeiro e o futuro da prática médica.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Início", id: "inicio" },
                { label: "Destaques", id: "destaques" },
                { label: "Artigos", id: "artigos" },
                { label: "Categorias", id: "categorias" },
                { label: "Sobre", id: "sobre" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-sans text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Conecte-se
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/in/pedro-suassuna-8a3626386" },
                { name: "Instagram", href: "https://www.instagram.com/mindmed_ia/" },
                { name: "Site oficial", href: "https://mindmed.online" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {social.name}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} MindMed. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Feito com inteligência artificial e rigor científico.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
