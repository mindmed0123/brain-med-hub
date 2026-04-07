import { useParams, Link } from "react-router-dom";
import { usePost } from "@/hooks/usePosts";
import TopBanner from "@/components/blog/TopBanner";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import ConversionBlock from "@/components/blog/ConversionBlock";
import ArticleCTA from "@/components/blog/ArticleCTA";
import SEOHead from "@/components/blog/SEOHead";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams();
  const { data: post, isLoading } = usePost(slug || "");

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-pulse space-y-4 text-center">
          <div className="mx-auto h-4 w-48 rounded bg-muted" />
          <div className="mx-auto h-3 w-32 rounded bg-muted" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 font-sans text-2xl font-bold text-foreground">Artigo não encontrado</h1>
          <Link to="/" className="font-sans text-sm font-medium text-primary hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const dateFormatted = new Date(post.created_at).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} — MindMed Blog`}
        description={post.subtitle || post.title}
        slug={post.slug}
        image={post.cover_image || undefined}
      />
      <TopBanner />
      <BlogHeader />

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Voltar aos artigos
          </Link>

          <div className="mx-auto max-w-3xl">
            {/* Meta */}
            <div className="mb-5 flex flex-wrap items-center gap-3 font-sans text-xs text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold uppercase tracking-wider text-primary">
                {post.category.replace(/-/g, " ")}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.read_time} min de leitura
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {dateFormatted}
              </span>
              <span className="flex items-center gap-1">
                <User size={12} />
                {post.author}
              </span>
            </div>

            <h1 className="mb-5 font-sans text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="mb-10 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                {post.subtitle}
              </p>
            )}

            {/* Hero image */}
            {post.cover_image && (
              <div className="mb-12 overflow-hidden rounded-2xl border border-border">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}

            {/* Highlight block */}
            {post.highlight_label && post.highlight_value && (
              <div className="mb-12 rounded-2xl border border-primary/10 bg-primary/5 p-8 text-center md:p-10">
                <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {post.highlight_label}
                </p>
                <p className="font-sans text-5xl font-extrabold text-primary md:text-6xl">
                  {post.highlight_value}
                </p>
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none font-sans text-muted-foreground prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-primary/30 prose-blockquote:text-muted-foreground prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Mid-article CTA */}
            <ConversionBlock />

            {/* Final CTA */}
            <ArticleCTA />
          </div>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
};

export default ArticlePage;
