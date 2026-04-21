import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { categories } from "@/data/articles";
import { Clock } from "lucide-react";

const ArticleList = () => {
  const { data: posts, isLoading } = usePublishedPosts();

  const categoryLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id.replace(/-/g, " ");

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="space-y-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse space-y-3 border-b border-border pb-10">
                <div className="h-3 w-40 rounded bg-muted" />
                <div className="h-6 w-3/4 rounded bg-muted" />
                <div className="h-3 w-full rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!posts?.length) return null;

  return (
    <section id="artigos" className="py-20 md:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Arquivo
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Todos os artigos.
          </h2>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group block py-10 transition-colors"
            >
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="font-semibold text-primary">
                  {categoryLabel(post.category)}
                </span>
                <span className="text-border">·</span>
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {post.read_time} min
                </span>
                <span className="text-border">·</span>
                <span>
                  {new Date(post.created_at).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h3 className="mb-3 font-serif text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary md:text-3xl">
                {post.title}
              </h3>

              {post.subtitle && (
                <p className="font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
                  {post.subtitle}
                </p>
              )}

              <p className="mt-4 font-sans text-xs text-muted-foreground/70">
                Por <span className="text-foreground">{post.author}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
