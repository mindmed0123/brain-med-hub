import { ArrowUpRight } from "lucide-react";
import mindmedLogo from "@/assets/mindmed-logo.png";

const BlogFooter = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-muted/30 py-14">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg bg-primary">
                <img src={mindmedLogo} alt="MindMed" className="h-4 w-4 object-contain brightness-0 invert" />
              </div>
              <span className="font-sans text-lg font-bold text-foreground">MindMed</span>
            </div>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
              O principal centro de inteligência sobre IA na medicina do Brasil. Dados reais, impacto financeiro e aplicação prática.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Início", id: "inicio" },
                { label: "Artigos", id: "artigos" },
                { label: "Categorias", id: "categorias" },
                { label: "Sobre", id: "sobre" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-foreground">
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
                    className="inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
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
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
