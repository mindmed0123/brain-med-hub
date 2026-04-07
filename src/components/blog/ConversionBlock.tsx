import { ArrowRight } from "lucide-react";

const ConversionBlock = () => {
  return (
    <div className="my-12 rounded-2xl border border-primary/10 bg-muted/40 p-8 md:p-10">
      <p className="mb-2 font-sans text-lg font-bold text-foreground">
        Você ainda perde tempo com laudos manuais?
      </p>
      <p className="mb-5 font-sans text-sm leading-relaxed text-muted-foreground">
        A MindMed transcreve consultas, gera laudos automaticamente e devolve horas do seu dia. Sem complexidade.
      </p>
      <a
        href="https://mindmed.online"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 font-sans text-sm font-semibold text-background transition-all hover:bg-foreground/90"
      >
        Ver como funciona
        <ArrowRight size={14} />
      </a>
    </div>
  );
};

export default ConversionBlock;
