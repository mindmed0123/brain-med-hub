import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { categories } from "@/data/articles";
import type { Tables } from "@/integrations/supabase/types";

type Post = Tables<"posts">;

function usePopularPosts() {
  return useQuery({
    queryKey: ["posts", "popular"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("status", "published")
        .order("views", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data as Post[];
    },
  });
}

const PopularPosts = () => {
  const { data: posts } = usePopularPosts();

  if (!posts || posts.length === 0) return null;

  const catLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id.replace(/-/g, " ");

  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Mais lidos
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O que está sendo lido.
          </h2>
        </div>

        <ol className="divide-y divide-border border-t border-border">
          {posts.map((post, idx) => (
            <li key={post.id}>
              <Link
                to={`/artigo/${post.slug}`}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-6 py-8 transition-colors"
              >
                <span className="font-serif text-3xl font-bold text-muted-foreground/40 transition-colors group-hover:text-primary md:text-4xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="mb-2 block font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                    {catLabel(post.category)}
                  </span>
                  <h3 className="font-serif text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PopularPosts;
