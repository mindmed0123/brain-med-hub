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
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse space-y-3">
                <div className="aspect-[16/10] w-full rounded-sm bg-muted" />
                <div className="h-3 w-24 rounded bg-muted" />
                <div className="h-5 w-3/4 rounded bg-muted" />
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
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Arquivo
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Todos os artigos.
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group flex flex-col"
            >
              {post.cover_image ? (
                <div className="mb-5 overflow-hidden rounded-sm">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="mb-5 aspect-[16/10] w-full rounded-sm bg-secondary/40" />
              )}

              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="font-semibold text-primary">
                  {categoryLabel(post.category)}
                </span>
                <span className="text-border">·</span>
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {post.read_time} min
                </span>
              </div>

              <h3 className="mb-3 font-serif text-xl font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary md:text-2xl">
                {post.title}
              </h3>

              {post.subtitle && (
                <p className="mb-4 line-clamp-3 font-serif text-base leading-relaxed text-muted-foreground">
                  {post.subtitle}
                </p>
              )}

              <p className="mt-auto font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70">
                Por <span className="text-foreground">{post.author}</span> ·{" "}
                {new Date(post.created_at).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
