import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { Clock, ArrowRight } from "lucide-react";

const ArticleList = () => {
  const { data: posts, isLoading } = usePublishedPosts();

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">Carregando artigos...</p>
        </div>
      </section>
    );
  }

  if (!posts?.length) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
          Todos os artigos
        </h2>

        <div className="divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group flex gap-6 py-6 first:pt-0 last:pb-0"
            >
              {post.cover_image && (
                <div className="hidden h-24 w-36 flex-shrink-0 overflow-hidden rounded-lg sm:block">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col justify-center">
                <div className="mb-1.5 flex items-center gap-3 font-sans text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-widest text-primary">
                    {post.category.replace(/-/g, " ")}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.read_time} min
                  </span>
                  <span>·</span>
                  <span>
                    {new Date(post.created_at).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mb-1 font-serif text-base font-bold text-foreground transition-colors group-hover:text-primary md:text-lg">
                  {post.title}
                </h3>

                <p className="hidden font-sans text-sm text-muted-foreground line-clamp-1 sm:block">
                  {post.subtitle}
                </p>
              </div>

              <div className="hidden items-center text-muted-foreground transition-colors group-hover:text-primary md:flex">
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
