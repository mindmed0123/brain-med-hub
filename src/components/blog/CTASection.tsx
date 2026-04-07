import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary/10 p-12 text-center md:p-20">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              A nova medicina já começou.
              <br />
              <span className="text-primary">E ela é orientada por dados.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
              Descubra como a MindMed está transformando clínicas e hospitais
              com inteligência artificial aplicada.
            </p>
            <a
              href="https://mindmed.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-blue"
            >
              Conhecer a MindMed
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
