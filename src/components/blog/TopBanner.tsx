import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-primary px-4 py-2.5">
      <div className="container mx-auto flex items-center justify-center gap-3 text-center">
        <p className="font-sans text-sm font-medium text-primary-foreground">
          Teste a IA que está transformando a rotina médica
        </p>
        <a
          href="https://mindmed.online"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3.5 py-1 font-sans text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/25"
        >
          Começar agora
          <ArrowRight size={12} />
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-primary-foreground/60 transition-colors hover:text-primary-foreground"
        aria-label="Fechar"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default TopBanner;
