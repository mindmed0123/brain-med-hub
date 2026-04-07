import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const LeadCaptureForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Preencha nome e email.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: name.trim(),
        email: email.trim(),
        specialty: specialty.trim() || null,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="border-b border-border bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <CheckCircle size={40} className="mx-auto mb-4 text-primary" />
          <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
            Obrigado pelo interesse!
          </h3>
          <p className="font-sans text-sm text-muted-foreground">
            Entraremos em contato em breve.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-lg text-center">
          <h3 className="mb-2 font-sans text-2xl font-bold text-foreground">
            Receba insights exclusivos
          </h3>
          <p className="mb-8 font-sans text-sm text-muted-foreground">
            Conteúdo sobre IA na medicina direto no seu email. Sem spam.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
            <input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
            <input
              type="text"
              placeholder="Especialidade médica (opcional)"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 font-sans text-sm font-semibold text-background transition-all hover:bg-foreground/90 disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Receber conteúdo"}
              <ArrowRight size={14} />
            </button>
          </form>

          <p className="mt-4 font-sans text-[11px] text-muted-foreground/60">
            Seus dados estão seguros. Nenhum spam será enviado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
