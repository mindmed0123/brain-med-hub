import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { ArrowRight, Clock } from "lucide-react";

const HeroSection = () => {
  const { data: posts } = usePublishedPosts();
  const main = posts?.[0];

  if (!main) {
    return (
      <section id="inicio" className="border-b border-border py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Centro de Inteligência
          </span>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            IA na medicina, explicada com dados.
          </h1>
          <p className="mx-auto max-w-xl font-sans text-lg text-muted-foreground">
            Estudos reais. Impacto financeiro. O futuro da prática médica.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" className="border-b border-border">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <Link
          to={`/artigo/${main.slug}`}
          className="group grid items-center gap-10 md:grid-cols-2"
        >
          {main.cover_image && (
            <div className="overflow-hidden rounded-xl shadow-lg transition-shadow duration-500 group-hover:shadow-xl">
              <img
                src={main.cover_image}
                alt={main.title}
                width={1200}
                height={672}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          )}
          <div>
            <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Destaque
            </span>
            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-4xl lg:text-[2.75rem]">
              {main.title}
            </h1>
            <p className="mb-6 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              {main.subtitle}
            </p>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                <Clock size={12} />
                {main.read_time} min de leitura
              </span>
              <span className="text-xs text-border">|</span>
              <span className="font-sans text-xs text-muted-foreground">
                {new Date(main.created_at).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-3">
                Ler artigo completo
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
