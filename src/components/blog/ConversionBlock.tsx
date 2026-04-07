import { ArrowRight } from "lucide-react";

const ConversionBlock = () => {
  return (
    <div className="my-10 rounded-lg border-l-4 border-primary bg-secondary p-6">
      <p className="mb-1 font-serif text-lg font-bold text-foreground">
        Quer aplicar isso na sua clínica?
      </p>
      <p className="mb-4 font-sans text-sm text-muted-foreground">
        Converse com nosso time e descubra como a MindMed pode transformar seus resultados.
      </p>
      <a
        href="https://mindmed.online"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary transition-colors hover:underline"
      >
        Falar com a MindMed
        <ArrowRight size={14} />
      </a>
    </div>
  );
};

export default ConversionBlock;
