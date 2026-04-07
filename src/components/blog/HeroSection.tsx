import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="container relative mx-auto px-6 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5">
            <span className="font-sans text-xs font-medium text-muted-foreground">
              Inteligência artificial para medicina
            </span>
          </div>

          <h1 className="mb-6 font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            O futuro da medicina está sendo{" "}
            <span className="text-gradient">automatizado.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            Descubra como a inteligência artificial está transformando a rotina médica. Dados reais, impacto financeiro e aplicação prática.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://mindmed.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-sans text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg"
            >
              Conhecer a MindMed
              <ArrowRight size={16} />
            </a>
            <a
              href="https://mindmed.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-sans text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted"
            >
              Testar gratuitamente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
