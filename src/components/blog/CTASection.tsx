import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="border-t border-border bg-primary py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
          A nova medicina já começou.
        </h2>
        <p className="mb-8 font-serif text-xl text-primary-foreground/80">
          E ela é orientada por dados.
        </p>
        <a
          href="https://mindmed.online"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 font-sans text-sm font-semibold text-foreground transition-all hover:bg-background/90"
        >
          Conhecer a MindMed
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
