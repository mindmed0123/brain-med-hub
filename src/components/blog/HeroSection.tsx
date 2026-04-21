import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { categories } from "@/data/articles";
import { ArrowRight, Clock } from "lucide-react";

const HeroSection = () => {
  const { data: posts } = usePublishedPosts();
  const main = posts?.[0];

  const categoryLabel = (id?: string) =>
    categories.find((c) => c.id === id)?.label ?? id?.replace(/-/g, " ") ?? "";

  if (!main) {
    return (
      <section id="inicio" className="border-b border-border py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Publicação editorial
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Medicina, evidência e o futuro da prática clínica.
          </h1>
          <p className="mx-auto max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
            Análises aprofundadas sobre inteligência artificial, gestão clínica
            e transformação tecnológica na medicina contemporânea.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" className="border-b border-border">
      <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Link
          to={`/artigo/${main.slug}`}
          className="group grid items-center gap-12 md:grid-cols-12"
        >
          {main.cover_image && (
            <div className="overflow-hidden rounded-sm md:col-span-7">
              <img
                src={main.cover_image}
                alt={main.title}
                width={1200}
                height={672}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          )}
          <div className="md:col-span-5">
            <span className="mb-5 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              {categoryLabel(main.category)}
            </span>
            <h1 className="mb-5 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-[2.5rem] lg:text-[2.75rem]">
              {main.title}
            </h1>
            {main.subtitle && (
              <p className="mb-8 font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
                {main.subtitle}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-5 font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock size={11} />
                {main.read_time} min
              </span>
              <span className="text-border">·</span>
              <span>
                {new Date(main.created_at).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-border">·</span>
              <span>{main.author}</span>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-foreground transition-all duration-200 group-hover:gap-3 group-hover:text-primary">
                Ler análise completa
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
