import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { ArrowRight, Clock } from "lucide-react";

const ArticleList = () => {
  const { data: posts, isLoading } = usePublishedPosts();

  if (isLoading) {
    return (
      <section id="artigos" className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex gap-6 rounded-xl border border-border p-6">
                <div className="hidden h-28 w-44 rounded-lg bg-muted sm:block" />
                <div className="flex-1 space-y-3">
                  <div className="h-3 w-20 rounded bg-muted" />
                  <div className="h-5 w-3/4 rounded bg-muted" />
                  <div className="h-3 w-full rounded bg-muted" />
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
    <section id="artigos" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
            Todos os artigos
          </h2>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group flex flex-col gap-5 rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-md sm:flex-row sm:items-center sm:p-6"
            >
              {post.cover_image && (
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-28 sm:w-44"
                  />
                </div>
              )}
              <div className="flex-1">
                <span className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.category.replace(/-/g, " ")}
                </span>
                <h3 className="mb-1.5 font-sans text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-lg">
                  {post.title}
                </h3>
                <p className="mb-3 font-sans text-sm text-muted-foreground line-clamp-1">
                  {post.subtitle}
                </p>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                    <Clock size={12} />
                    {post.read_time} min
                  </span>
                  <span className="font-sans text-xs text-muted-foreground">
                    {new Date(post.created_at).toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <span className="ml-auto flex items-center gap-1 font-sans text-xs font-semibold text-primary opacity-0 transition-all duration-200 group-hover:opacity-100">
                    Ler <ArrowRight size={12} />
                  </span>
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
