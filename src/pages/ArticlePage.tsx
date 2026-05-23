import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { usePost } from "@/hooks/usePosts";
import { categories } from "@/data/articles";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ReferencesBlock from "@/components/blog/ReferencesBlock";
import ShareButton from "@/components/blog/ShareButton";
import NewsletterBlock from "@/components/blog/NewsletterBlock";
import RelatedArticles from "@/components/blog/RelatedArticles";
import TableOfContents, { slugifyHeading } from "@/components/blog/TableOfContents";
import BackToTop from "@/components/blog/BackToTop";
import { useTrackArticleView } from "@/hooks/usePostMetrics";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams();
  const { data: post, isLoading } = usePost(slug || "");
  useTrackArticleView(post?.slug);

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: post.cover_image ? [post.cover_image] : undefined,
    datePublished: post.created_at,
    dateModified: post.updated_at,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "MindMed" },
    mainEntityOfPage: canonical,
    articleSection: categoryLabel,
  };

  const references = (post as unknown as { references?: string | null }).references ?? null;

  // Detect markdown vs HTML content. If content starts with an HTML tag, render
  // raw HTML (legacy TipTap output). Otherwise treat as Markdown (supports GFM
  // tables, etc.).
  const isHtml = /^\s*<(?:p|h[1-6]|ul|ol|blockquote|table|div|figure|img)/i.test(post.content);

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

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="mb-16 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <ArrowLeft size={12} />
            Voltar ao arquivo
          </Link>

          <header className="mx-auto max-w-2xl">
            <div className="mb-8">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                {categoryLabel}
              </span>
            </div>

            <h1 className="mb-6 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
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
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
                MindMed
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </header>

          {post.cover_image && (
            <figure className="mx-auto my-12 max-w-5xl">
              <div className="overflow-hidden rounded-sm shadow-sm">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="aspect-[21/9] w-full object-cover"
                  loading="eager"
                />
              </div>
            </figure>
          )}

          <div className="mx-auto max-w-5xl">
            <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16 xl:grid-cols-[220px_1fr] xl:gap-20">
              <aside className="hidden lg:block">
                <div className="sticky top-28 pt-2">
                  {!isHtml && <TableOfContents content={post.content} mode="sidebar" />}
                </div>
              </aside>

              <div className="min-w-0 lg:max-w-[680px]">
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

            {!isHtml && (
              <div className="lg:hidden">
                <TableOfContents content={post.content} mode="inline" />
              </div>
            )}

            <div
              className="
                article-content
                prose prose-lg max-w-none
                font-serif text-[1.0625rem] leading-[1.75] text-foreground/90
                [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-24 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground
                [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:scroll-mt-24 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground
                [&_p]:my-5 [&_p]:text-foreground/85
                [&_strong]:font-semibold [&_strong]:text-foreground
                [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-primary/40 hover:[&_a]:decoration-primary
                [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:bg-secondary/30 [&_blockquote]:py-4 [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:font-serif [&_blockquote]:text-xl [&_blockquote]:italic [&_blockquote]:leading-relaxed [&_blockquote]:text-foreground
                [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6
                [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6
                [&_li]:my-2
                [&_img]:my-8 [&_img]:rounded-sm
                [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm
                [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-sm [&_table]:border [&_table]:border-border [&_table]:font-sans [&_table]:text-sm
                [&_thead]:bg-secondary/60
                [&_th]:border [&_th]:border-border [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground
                [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:text-foreground/85
                [&_tbody_tr:nth-child(even)]:bg-secondary/20
                [&_hr]:my-10 [&_hr]:border-border
              "
            >
              {isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h2: ({ children, ...props }) => {
                      const text = String(children);
                      const id = slugifyHeading(text);
                      return (
                        <h2 id={id} {...props}>
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ children, ...props }) => {
                      const text = String(children);
                      const id = slugifyHeading(text);
                      return (
                        <h3 id={id} {...props}>
                          {children}
                        </h3>
                      );
                    },
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              )}
            </div>

            <NewsletterBlock variant="inline" />

            <ShareButton slug={post.slug} title={post.title} />
            <ReferencesBlock references={references} />

            <RelatedArticles currentSlug={post.slug} currentCategory={post.category} />

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
          </div>
        </div>
      </article>

      <BlogFooter />
      <BackToTop />
    </div>
  );
};

export default ArticlePage;
