import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

type Metric = "views" | "unique_readers" | "shares";

export async function trackMetric(slug: string, metric: Metric) {
  if (!slug) return;
  try {
    await supabase.rpc("increment_post_metric" as never, {
      _slug: slug,
      _metric: metric,
    } as never);
  } catch (e) {
    console.error("metric error", e);
  }
}

export function useTrackArticleView(slug: string | undefined) {
  useEffect(() => {
    if (!slug) return;
    // Always count a view
    trackMetric(slug, "views");

    // Unique reader per browser/session
    const key = `mm_read_${slug}`;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, "1");
      trackMetric(slug, "unique_readers");
    }
  }, [slug]);
}
