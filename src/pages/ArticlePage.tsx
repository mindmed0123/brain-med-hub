import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import ConversionBlock from "@/components/blog/ConversionBlock";
import CTASection from "@/components/blog/CTASection";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Artigo não encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  const dateFormatted = new Date(article.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <article className="pb-16 pt-24">
        <div className="container mx-auto px-6">
          {/* Back */}
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Voltar aos artigos
          </Link>

          {/* Header */}
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {article.categoryIcon} {article.category.replace("-", " ")}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                {article.readTime} min
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar size={12} />
                {dateFormatted}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              {article.title}
            </h1>

            <p className="mb-8 text-lg text-muted-foreground">
              {article.subtitle}
            </p>

            {/* Highlight block */}
            <div className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="mb-1 text-sm uppercase tracking-widest text-muted-foreground">
                {article.highlight.label}
              </p>
              <p className="text-5xl font-extrabold text-primary glow-text md:text-6xl">
                {article.highlight.value}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {article.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {section.content}
                  </p>

                  {/* Conversion block after section 3 */}
                  {i === 2 && <ConversionBlock />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTASection />
      <BlogFooter />
    </div>
  );
};

export default ArticlePage;
