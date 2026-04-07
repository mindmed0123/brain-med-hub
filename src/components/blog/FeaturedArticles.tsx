import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Clock } from "lucide-react";

const FeaturedArticles = () => {
  const featured = articles.filter((a) => a.featured).slice(0, 3);

  return (
    <section id="artigos" className="border-b border-border py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
          Artigos em destaque
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((article) => (
            <Link
              key={article.id}
              to={`/artigo/${article.slug}`}
              className="group"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={1200}
                  height={672}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <span className="mb-2 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-primary">
                {article.categoryIcon} {article.category.replace(/-/g, " ")}
              </span>

              <h3 className="mb-2 font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {article.title}
              </h3>

              <p className="mb-3 font-sans text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {article.summary}
              </p>

              <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                <Clock size={12} />
                {article.readTime} min de leitura
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
