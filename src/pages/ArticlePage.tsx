import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { usePost } from "@/hooks/usePosts";
import { categories } from "@/data/articles";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ReferencesBlock from "@/components/blog/ReferencesBlock";
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
          <h1 className="mb-4 font-serif text-2xl font-bold text-foreground">
            Artigo não encontrado
          </h1>
          <Link to="/" className="font-sans text-sm font-medium text-primary hover:underline">
            ← Voltar à publicação
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

  const categoryLabel =
    categories.find((c) => c.id === post.category)?.label ?? post.category.replace(/-/g, " ");

  const description = post.subtitle ?? post.title;
  const canonical = `https://blog.mindmed.online/artigo/${post.slug}`;

  // JSON-LD Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: post.cover_image ? [post.cover_image] : undefined,
    datePublished: post.created_at,
    dateModified: post.updated_at,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "MindMed",
    },
    mainEntityOfPage: canonical,
    articleSection: categoryLabel,
  };

  // Acesso seguro a "references" (campo recém-adicionado, ainda fora do tipo gerado)
  const references = (post as unknown as { references?: string | null }).references ?? null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${post.title} — MindMed`}</title>
        <meta name="description" content={description.slice(0, 158)} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description.slice(0, 158)} />
        <meta property="og:url" content={canonical} />
        {post.cover_image && <meta property="og:image" content={post.cover_image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description.slice(0, 158)} />
        {post.cover_image && <meta name="twitter:image" content={post.cover_image} />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <ReadingProgress />
      <BlogHeader />

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft size={12} />
            Voltar ao arquivo
          </Link>

          <header className="mx-auto max-w-2xl">
            <div className="mb-6">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                {categoryLabel}
              </span>
            </div>

            <h1 className="mb-6 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="mb-10 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
                {post.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-border py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User size={11} />
                {post.author}
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={11} />
                {dateFormatted}
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={11} />
                {post.read_time} min de leitura
              </span>
            </div>
          </header>

          {/* Hero image */}
          {post.cover_image && (
            <figure className="mx-auto my-12 max-w-4xl">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </figure>
          )}

          <div className="mx-auto max-w-2xl">
            {/* Highlight block (data crítica) */}
            {post.highlight_label && post.highlight_value && (
              <aside
                className="my-12 border-l-2 border-primary bg-secondary/40 p-8 text-center"
                aria-label="Dado em destaque"
              >
                <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {post.highlight_label}
                </p>
                <p className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                  {post.highlight_value}
                </p>
              </aside>
            )}

            {/* Conteúdo editorial */}
            <div
              className="
                article-content
                prose prose-lg max-w-none
                font-serif text-[1.0625rem] leading-[1.75] text-foreground/90
                [&_h1]:font-serif [&_h1]:text-foreground [&_h1]:tracking-tight
                [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground
                [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground
                [&_p]:my-5 [&_p]:text-foreground/85
                [&_strong]:font-semibold [&_strong]:text-foreground
                [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-primary/40 hover:[&_a]:decoration-primary
                [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:bg-secondary/30 [&_blockquote]:py-4 [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:font-serif [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:leading-relaxed [&_blockquote]:text-foreground
                [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6
                [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6
                [&_li]:my-2
                [&_img]:my-8 [&_img]:rounded-sm
                [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <ReferencesBlock references={references} />

            <footer className="mt-16 border-t border-border pt-8">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Publicado em {dateFormatted} · {categoryLabel}
              </p>
              <Link
                to="/"
                className="mt-3 inline-flex items-center gap-2 font-sans text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft size={14} />
                Voltar ao arquivo editorial
              </Link>
            </footer>
          </div>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
};

export default ArticlePage;
