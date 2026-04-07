import { useParams, Link } from "react-router-dom";
import { usePost } from "@/hooks/usePosts";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import ConversionBlock from "@/components/blog/ConversionBlock";
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
          <h1 className="mb-4 font-serif text-2xl font-bold text-foreground">Artigo não encontrado</h1>
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
      <BlogHeader />

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            <ArrowLeft size={14} />
            Voltar aos artigos
          </Link>

          <div className="mx-auto max-w-3xl">
            {/* Meta */}
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-sans text-xs text-muted-foreground">
              <span className="font-semibold uppercase tracking-[0.2em] text-primary">
                {post.category.replace(/-/g, " ")}
              </span>
              <span className="hidden text-border sm:inline">·</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.read_time} min
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {dateFormatted}
              </span>
              <span className="hidden text-border sm:inline">·</span>
              <span className="hidden items-center gap-1 sm:flex">
                <User size={12} />
                {post.author}
              </span>
            </div>

            <h1 className="mb-5 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="mb-10 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                {post.subtitle}
              </p>
            )}

            {/* Hero image */}
            {post.cover_image && (
              <div className="mb-12 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}

            {/* Highlight block */}
            {post.highlight_label && post.highlight_value && (
              <div className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center md:p-10">
                <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {post.highlight_label}
                </p>
                <p className="font-serif text-5xl font-extrabold text-primary md:text-6xl">
                  {post.highlight_value}
                </p>
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none font-sans text-muted-foreground [&_h1]:font-serif [&_h1]:text-foreground [&_h2]:font-serif [&_h2]:text-foreground [&_h3]:font-serif [&_h3]:text-foreground [&_strong]:text-foreground [&_a]:text-primary [&_blockquote]:border-primary/30 [&_blockquote]:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <ConversionBlock />
          </div>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
};

export default ArticlePage;
