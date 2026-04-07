import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-16">
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Blog MindMed — Inteligência médica baseada em dados
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground opacity-0 animate-fade-up md:text-6xl lg:text-7xl" style={{ animationDelay: "0.2s" }}>
            IA na medicina,{" "}
            <span className="text-primary glow-text">explicada com dados.</span>
            <br />
            Aplicada com resultado.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-up md:text-xl" style={{ animationDelay: "0.4s" }}>
            Estudos reais. Impacto financeiro. O futuro da prática médica.
          </p>

          <a
            href="#artigos"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-blue opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Ver artigos mais recentes
            <ArrowDown size={16} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 line-thin" />
    </section>
  );
};

export default HeroSection;
