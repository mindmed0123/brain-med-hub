import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";

const HeroSection = () => {
  const { data: posts } = usePublishedPosts();
  const main = posts?.[0];

  if (!main) {
    return (
      <section className="border-b border-border py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            IA na medicina, explicada com dados.
          </h1>
          <p className="font-sans text-lg text-muted-foreground">
            Estudos reais. Impacto financeiro. O futuro da prática médica.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-6 py-10">
        <Link to={`/artigo/${main.slug}`} className="group grid items-center gap-8 md:grid-cols-2">
          {main.cover_image && (
            <div className="overflow-hidden rounded-lg">
              <img
                src={main.cover_image}
                alt={main.title}
                width={1200}
                height={672}
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          )}
          <div>
            <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-primary">
              Destaque
            </span>
            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
              {main.title}
            </h1>
            <p className="mb-4 font-sans text-base leading-relaxed text-muted-foreground">
              {main.subtitle}
            </p>
            <div className="flex items-center gap-4 font-sans text-xs text-muted-foreground">
              <span>{main.read_time} min de leitura</span>
              <span>·</span>
              <span>{new Date(main.created_at).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
