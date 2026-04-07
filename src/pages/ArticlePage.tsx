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
          <h1 className="mb-4 font-serif text-2xl font-bold text-foreground">Artigo não encontrado</h1>
          <Link to="/" className="font-sans text-sm text-primary hover:underline">Voltar ao início</Link>
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

      <article className="py-12">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} />
            Voltar aos artigos
          </Link>

          <div className="mx-auto max-w-3xl">
            {/* Meta */}
            <div className="mb-4 flex flex-wrap items-center gap-3 font-sans text-xs text-muted-foreground">
              <span className="font-semibold uppercase tracking-widest text-primary">
                {article.categoryIcon} {article.category.replace(/-/g, " ")}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {article.readTime} min de leitura
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {dateFormatted}
              </span>
            </div>

            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <p className="mb-8 font-sans text-lg text-muted-foreground">
              {article.subtitle}
            </p>

            {/* Hero image */}
            <div className="mb-10 overflow-hidden rounded-lg">
              <img
                src={article.image}
                alt={article.title}
                width={1200}
                height={672}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            {/* Highlight block */}
            <div className="mb-10 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {article.highlight.label}
              </p>
              <p className="font-serif text-5xl font-extrabold text-primary md:text-6xl">
                {article.highlight.value}
              </p>
            </div>

            {/* Content sections */}
            <div className="space-y-8">
              {article.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="mb-3 font-serif text-xl font-bold text-foreground md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="font-sans text-base leading-[1.8] text-muted-foreground">
                    {section.content}
                  </p>
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
