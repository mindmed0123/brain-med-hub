const BlogFooter = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-sm font-bold text-primary">M</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Mind<span className="text-primary">Med</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Inteligência artificial aplicada à medicina. Dados reais,
              resultados mensuráveis, futuro agora.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
              Links rápidos
            </h4>
            <ul className="space-y-2">
              {["Início", "Artigos", "Categorias", "Sobre", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`/#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
              Redes sociais
            </h4>
            <ul className="space-y-2">
              {["LinkedIn", "Instagram", "YouTube"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 line-thin" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 MindMed. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Inteligência médica orientada por dados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
