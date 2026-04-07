import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { ArrowRight, Clock } from "lucide-react";

const FeaturedArticles = () => {
  const { data: posts, isLoading } = usePublishedPosts();
  const featured = posts?.filter((a) => a.featured).slice(0, 3) ?? [];

  if (isLoading) {
    return (
      <section id="destaques" className="border-b border-border py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="aspect-[16/10] rounded-xl bg-muted" />
                <div className="h-3 w-20 rounded bg-muted" />
                <div className="h-5 w-3/4 rounded bg-muted" />
                <div className="h-3 w-full rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!featured.length) return null;

  return (
    <section id="destaques" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
            Em destaque
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group flex flex-col"
            >
              {post.cover_image && (
                <div className="mb-4 overflow-hidden rounded-xl border border-border transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <span className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category.replace(/-/g, " ")}
              </span>

              <h3 className="mb-2 font-sans text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                {post.title}
              </h3>

              <p className="mb-4 flex-1 font-sans text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {post.subtitle}
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                  <Clock size={12} />
                  {post.read_time} min
                </span>
                <span className="flex items-center gap-1 font-sans text-xs font-semibold text-primary opacity-0 transition-all duration-200 group-hover:opacity-100">
                  Ler artigo <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
