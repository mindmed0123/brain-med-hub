import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Clock } from "lucide-react";

const FeaturedArticles = () => {
  const featured = articles.filter((a) => a.featured).slice(0, 3);

  return (
    <section id="artigos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Destaque
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Artigos principais
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((article, i) => (
            <Link
              key={article.id}
              to={`/artigo/${article.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:glow-blue"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-secondary/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    {article.categoryIcon} {article.category.replace("-", " ")}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {article.readTime} min de leitura
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
