import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre a MindMed
          </h2>
          <p className="mb-6 font-sans text-2xl font-bold leading-snug text-foreground md:text-3xl">
            Inteligência artificial que transforma a rotina médica
          </p>
          <p className="mb-10 font-sans text-base leading-relaxed text-muted-foreground">
            A MindMed desenvolve tecnologia de IA para medicina: transcrição automática de consultas, geração de laudos e redução de carga administrativa. Nosso objetivo é devolver tempo ao médico para que ele foque no paciente.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: "+2h/dia", label: "Tempo devolvido" },
              { value: "-70%", label: "Carga administrativa" },
              { value: "99.2%", label: "Precisão de transcrição" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card/50 p-5">
                <p className="font-sans text-2xl font-extrabold text-foreground">{stat.value}</p>
                <p className="mt-1 font-sans text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://mindmed.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 font-sans text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90"
            >
              Conhecer a MindMed
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-suassuna-8a3626386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted"
            >
              LinkedIn
              <ArrowUpRight size={14} className="text-muted-foreground" />
            </a>
            <a
              href="https://www.instagram.com/mindmed_ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted"
            >
              Instagram
              <ArrowUpRight size={14} className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
