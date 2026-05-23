import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import mindmedLogo from "@/assets/mindmed-logo.png";
import NewsletterBlock from "./NewsletterBlock";

const BlogFooter = () => {
  const handleNav = (id: string) => {
    if (window.location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="border-t border-border bg-secondary/40 py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Sobre */}
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded bg-foreground">
                <img src={mindmedLogo} alt="MindMed" className="h-5 w-5 object-contain" />
              </div>
              <span className="font-serif text-base font-bold text-foreground">MindMed</span>
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Publicação editorial
              </span>
            </div>
            <p className="max-w-md font-serif text-sm leading-relaxed text-muted-foreground">
              A maior referência em Inteligência Artificial na Saúde do Brasil.
              Análises independentes sobre tecnologia, gestão clínica e o futuro
              da prática médica baseada em evidência.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/mindmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://www.instagram.com/mindmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://twitter.com/mindmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Twitter size={14} />
              </a>
              <a
                href="mailto:mindmedcontato@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h4 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Início", id: "inicio" },
                { label: "Destaques", id: "destaques" },
                { label: "Arquivo", id: "artigos" },
                { label: "Áreas", id: "categorias" },
                { label: "Sobre", id: "sobre" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="font-sans text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground">
              Assine gratuitamente
            </h4>
            <p className="mb-4 font-serif text-sm leading-relaxed text-muted-foreground">
              IA na Saúde toda semana, direto no seu email.
            </p>
            <NewsletterBlock variant="footer" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} MindMed · Todos os direitos reservados ·{" "}
            <a
              href="mailto:mindmedcontato@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              mindmedcontato@gmail.com
            </a>
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Publicação digital independente
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
