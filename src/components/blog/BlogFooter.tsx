const BlogFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 block font-serif text-lg font-bold text-foreground">
              MindMed <span className="font-sans text-sm font-normal text-muted-foreground">Blog</span>
            </span>
            <p className="max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
              O principal hub de conteúdo sobre inteligência artificial na medicina no Brasil. Estudos reais, impacto financeiro e o futuro da prática médica.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2">
              {["Início", "Artigos", "Categorias", "Sobre", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`/#${link.toLowerCase()}`}
                      className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-foreground">
              Redes sociais
            </h4>
            <ul className="space-y-2">
              {["LinkedIn", "Instagram", "YouTube"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-sans text-xs text-muted-foreground">
            © 2026 MindMed. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
