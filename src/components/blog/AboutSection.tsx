import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="border-t border-border bg-secondary/50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Sobre o projeto
          </span>
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            O hub de inteligência em IA médica do Brasil
          </h2>
          <p className="mb-8 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            A MindMed nasceu para traduzir a ciência mais avançada em inteligência artificial
            para a realidade clínica brasileira. Aqui você encontra estudos reais, dados
            concretos e análises de impacto financeiro — tudo com rigor científico e
            aplicação prática.
          </p>

          <div className="mb-10 grid gap-6 sm:grid-cols-3">
            {[
              { value: "847+", label: "Clínicas analisadas" },
              { value: "12.000", label: "Médicos no estudo" },
              { value: "R$ 4.7bi", label: "Impacto projetado" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-background p-5">
                <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 font-sans text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/pedro-suassuna-8a3626386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:shadow-sm"
            >
              LinkedIn
              <ArrowUpRight size={14} className="text-muted-foreground" />
            </a>
            <a
              href="https://www.instagram.com/mindmed_ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:shadow-sm"
            >
              Instagram
              <ArrowUpRight size={14} className="text-muted-foreground" />
            </a>
            <a
              href="https://mindmed.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
            >
              Conhecer a MindMed
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
