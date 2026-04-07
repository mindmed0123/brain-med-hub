import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { Clock } from "lucide-react";

const FeaturedArticles = () => {
  const { data: posts } = usePublishedPosts();
  const featured = posts?.filter((a) => a.featured).slice(0, 3) ?? [];

  if (!featured.length) return null;

  return (
    <section id="artigos" className="border-b border-border py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
          Artigos em destaque
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((post) => (
            <Link key={post.id} to={`/artigo/${post.slug}`} className="group">
              {post.cover_image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <span className="mb-2 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-primary">
                {post.category.replace(/-/g, " ")}
              </span>

              <h3 className="mb-2 font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>

              <p className="mb-3 font-sans text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {post.subtitle}
              </p>

              <span className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
                <Clock size={12} />
                {post.read_time} min de leitura
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
