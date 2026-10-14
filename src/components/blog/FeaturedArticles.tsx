import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { categories } from "@/data/articles";
import { Clock } from "lucide-react";
import CoverFallback from "./CoverFallback";

const FeaturedArticles = () => {
  const { data: posts } = usePublishedPosts();
  const featured = posts?.filter((a) => a.featured).slice(0, 3) ?? [];

  if (!featured.length) return null;

  const categoryLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id.replace(/-/g, " ");

  return (
    <section id="destaques" className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            Seleção editorial
          </span>
          <h2 className="font-serif text-[34px] font-normal leading-[1.05] tracking-tight text-foreground md:text-[44px]">
            Em destaque.
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.id}
              to={`/artigo/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-4"
            >
              {post.cover_image ? (
                <div className="mb-6 overflow-hidden rounded-2xl bg-border">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover grayscale-[0.05] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="mb-6"><CoverFallback category={categoryLabel(post.category)} /></div>
              )}

              <span className="mb-3 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                {categoryLabel(post.category)}
              </span>

              <h3 className="mb-3 font-sans text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-foreground underline-offset-4 group-hover:underline md:text-[24px]">
                {post.title}
              </h3>

              {post.subtitle && (
                <p className="mb-5 flex-1 font-sans text-base leading-relaxed text-muted-foreground line-clamp-2">
                  {post.subtitle}
                </p>
              )}

              <div className="flex items-center gap-3 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock size={11} />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
