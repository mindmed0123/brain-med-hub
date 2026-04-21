const AboutSection = () => {
  return (
    <section id="sobre" className="border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-6">
        <span className="mb-5 block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          Sobre a publicação
        </span>
        <h2 className="mb-8 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          Conteúdo médico independente, baseado em evidência.
        </h2>
        <div className="space-y-5 font-serif text-lg leading-relaxed text-muted-foreground">
          <p>
            Esta publicação reúne análises sobre inteligência artificial,
            gestão clínica, educação médica e tecnologia hospitalar. O objetivo
            é traduzir pesquisa científica revisada por pares em material útil
            para a prática clínica e a tomada de decisão institucional.
          </p>
          <p>
            Todos os artigos seguem padrão editorial baseado em referências
            verificáveis — estudos publicados, relatórios institucionais e
            dados primários. Não há patrocínio, conteúdo promocional ou
            interferência comercial sobre a linha editorial.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-3">
          {[
            { value: "Editorial", label: "Linha independente" },
            { value: "Peer-reviewed", label: "Fontes verificáveis" },
            { value: "Open access", label: "Leitura sem barreiras" },
          ].map((item) => (
            <div key={item.label} className="bg-background p-6">
              <p className="font-serif text-xl font-bold text-foreground">{item.value}</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
