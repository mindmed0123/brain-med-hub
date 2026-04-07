import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { Clock, ArrowRight } from "lucide-react";

const ArticleList = () => {
  const { data: posts, isLoading } = usePublishedPosts();

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-6 animate-pulse">
                <div className="hidden h-24 w-36 rounded-lg bg-muted sm:block" />
                <div className="flex-1 space-y-3">
                  <div className="h-3 w-32 rounded bg-muted" />
                  <div className="h-5 w-3/4 rounded bg-muted" />
                  <div className="h-3 w-1/2 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!posts?.length) return null;

  return (
    <section id="artigos" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <span className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Biblioteca
          </span>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Todos os artigos
          </h2>
        </div>

        <div className="divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group flex gap-6 py-6 first:pt-0 last:pb-0"
            >
              {post.cover_image && (
                <div className="hidden h-28 w-40 flex-shrink-0 overflow-hidden rounded-xl sm:block">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col justify-center">
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-[0.15em] text-primary">
                    {post.category.replace(/-/g, " ")}
                  </span>
                  <span className="hidden text-border sm:inline">·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.read_time} min
                  </span>
                  <span className="hidden text-border sm:inline">·</span>
                  <span className="hidden sm:inline">
                    {new Date(post.created_at).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mb-1.5 font-serif text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary md:text-lg">
                  {post.title}
                </h3>

                <p className="hidden font-sans text-sm leading-relaxed text-muted-foreground line-clamp-1 sm:block">
                  {post.subtitle}
                </p>
              </div>

              <div className="hidden items-center text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-x-1 md:flex">
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
