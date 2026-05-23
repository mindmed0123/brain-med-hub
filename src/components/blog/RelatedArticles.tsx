import { Link } from "react-router-dom";
import { usePublishedPosts } from "@/hooks/usePosts";
import { categories } from "@/data/articles";
import { Clock } from "lucide-react";

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory: string;
}

const RelatedArticles = ({ currentSlug, currentCategory }: RelatedArticlesProps) => {
  const { data: posts } = usePublishedPosts();

  const sameCategory = posts?.filter(
    (p) => p.slug !== currentSlug && p.category === currentCategory,
  ) ?? [];
  const fallback = posts?.filter((p) => p.slug !== currentSlug) ?? [];
  const related = (sameCategory.length >= 3 ? sameCategory : [...sameCategory, ...fallback])
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
    .slice(0, 3);

  if (!related.length) return null;

  const catLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id.replace(/-/g, " ");

  return (
    <section className="mt-20 border-t border-border pt-14">
      <div className="mb-10">
        <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          Continue lendo
        </span>
        <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Artigos relacionados.
        </h3>
      </div>
      <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
        {related.map((article) => (
          <Link
            key={article.id}
            to={`/artigo/${article.slug}`}
            className="group flex flex-col"
          >
            {article.cover_image && (
              <div className="mb-5 overflow-hidden rounded-sm">
                <img
                  src={article.cover_image}
                  alt={article.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <span className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              {catLabel(article.category)}
            </span>
            <h4 className="mb-3 font-serif text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
              {article.title}
            </h4>
            <span className="mt-auto flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              <Clock size={11} />
              {article.read_time} min de leitura
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
