import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Clock, ArrowRight } from "lucide-react";

const ArticleList = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Todos
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Artigos recentes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/artigo/${article.slug}`}
              className="group flex gap-5 rounded-2xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/30"
            >
              <div className="hidden h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl sm:block">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs text-primary">
                      {article.categoryIcon}{" "}
                      {article.category.replace("-", " ")}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={10} />
                      {article.readTime} min
                    </span>
                  </div>
                  <h3 className="mb-1.5 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Ler artigo <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
