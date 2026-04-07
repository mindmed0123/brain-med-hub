import { ArrowRight } from "lucide-react";

const ConversionBlock = () => {
  return (
    <div className="my-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
      <p className="mb-2 text-lg font-bold text-foreground">
        Quer aplicar isso na sua clínica?
      </p>
      <p className="mb-6 text-sm text-muted-foreground">
        Converse com nosso time e descubra como a MindMed pode transformar seus
        resultados.
      </p>
      <a
        href="https://mindmed.online"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-blue"
      >
        Falar com a MindMed
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default ConversionBlock;
