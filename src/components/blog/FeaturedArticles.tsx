import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { Clock, ArrowRight } from "lucide-react";

const FeaturedArticles = () => {
  const { data: posts } = usePublishedPosts();
  const featured = posts?.filter((a) => a.featured).slice(0, 3) ?? [];

  if (!featured.length) return null;

  return (
    <section id="destaques" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Seleção editorial
            </span>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Artigos em destaque
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((post, i) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {post.cover_image && (
                <div className="mb-5 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              )}

              <span className="mb-2 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {post.category.replace(/-/g, " ")}
              </span>

              <h3 className="mb-2 font-serif text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
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
                <span className="flex items-center gap-1 font-sans text-xs font-semibold text-primary opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                  Ler <ArrowRight size={12} />
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
