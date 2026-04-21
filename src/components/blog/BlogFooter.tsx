import mindmedLogo from "@/assets/mindmed-logo.png";

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
          {/* Identidade editorial */}
          <div className="md:col-span-6">
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
              Análises independentes sobre inteligência artificial, gestão clínica
              e o futuro da prática médica baseada em evidência.
            </p>
            <p className="mt-6 max-w-md font-sans text-xs leading-relaxed text-muted-foreground/70">
              Esta publicação é mantida pela MindMed. O conteúdo editorial é
              independente e não reflete posicionamento comercial.
            </p>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h4 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground">
              Seções
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

          {/* Editorial */}
          <div className="md:col-span-3">
            <h4 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground">
              Editorial
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-muted-foreground">
              <li>Conteúdo baseado em evidência</li>
              <li>Fontes verificáveis</li>
              <li>Acesso aberto</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} MindMed. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            ISSN editorial · Publicação digital independente
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
