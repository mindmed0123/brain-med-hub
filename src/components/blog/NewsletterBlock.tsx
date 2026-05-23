import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterBlockProps {
  variant?: "hero" | "inline" | "footer";
}

const NewsletterBlock = ({ variant = "inline" }: NewsletterBlockProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.open(
      `https://mindmed.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-4 py-3 font-sans text-sm text-foreground">
        <Check size={16} className="text-primary" />
        Obrigado! Verifique seu email para confirmar a inscrição.
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="seu@email.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 flex-1 border-border bg-background font-sans text-sm"
          required
        />
        <Button type="submit" className="h-11 shrink-0 font-sans text-xs uppercase tracking-[0.2em]">
          Assinar grátis
        </Button>
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <aside className="my-12 border-y border-border bg-secondary/40 px-6 py-10 text-center sm:px-10">
        <span className="mb-3 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          <Mail size={12} className="mr-2 inline" />
          Newsletter MindMed
        </span>
        <h3 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          IA na Saúde, toda semana no seu email
        </h3>
        <p className="mx-auto mb-6 max-w-lg font-serif text-base leading-relaxed text-muted-foreground">
          Análises, pesquisas e notícias sobre Inteligência Artificial na medicina
          brasileira e mundial. Gratuito, sem spam.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="seu@email.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 flex-1 border-border bg-background font-sans text-sm"
            required
          />
          <Button type="submit" className="h-11 shrink-0 font-sans text-xs uppercase tracking-[0.2em]">
            Assinar grátis
          </Button>
        </form>
      </aside>
    );
  }

  // footer
  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        placeholder="seu@email.com.br"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-10 flex-1 border-border bg-background font-sans text-sm"
        required
      />
      <Button
        type="submit"
        variant="outline"
        className="h-10 shrink-0 font-sans text-xs uppercase tracking-[0.2em]"
      >
        Assinar
      </Button>
    </form>
  );
};

export default NewsletterBlock;
