import { ArrowRight } from "lucide-react";

const ArticleCTA = () => {
  return (
    <div className="my-12 rounded-2xl bg-foreground p-8 text-center md:p-12">
      <h3 className="mb-3 font-sans text-2xl font-bold text-background">
        Comece agora com a MindMed
      </h3>
      <p className="mb-6 font-sans text-sm text-background/60">
        Automatize laudos, transcreva consultas e aumente sua produtividade com IA.
      </p>
      <a
        href="https://mindmed.online"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
      >
        Teste grátis
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default ArticleCTA;
