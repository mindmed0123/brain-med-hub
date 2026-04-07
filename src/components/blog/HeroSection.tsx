import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const HeroSection = () => {
  const main = articles[0];

  return (
    <section className="border-b border-border">
      {/* Featured hero */}
      <div className="container mx-auto px-6 py-10">
        <Link to={`/artigo/${main.slug}`} className="group grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={main.image}
              alt={main.title}
              width={1200}
              height={672}
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div>
            <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-primary">
              {main.categoryIcon} Destaque
            </span>
            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
              {main.title}
            </h1>
            <p className="mb-4 font-sans text-base leading-relaxed text-muted-foreground">
              {main.subtitle}
            </p>
            <div className="flex items-center gap-4 font-sans text-xs text-muted-foreground">
              <span>{main.readTime} min de leitura</span>
              <span>·</span>
              <span>{new Date(main.date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
