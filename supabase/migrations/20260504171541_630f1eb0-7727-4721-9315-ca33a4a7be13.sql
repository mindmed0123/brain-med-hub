
ALTER TABLE public.posts
  ADD COLUMN IF NOT EXISTS views integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS unique_readers integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS shares integer NOT NULL DEFAULT 0;

CREATE OR REPLACE FUNCTION public.increment_post_metric(_slug text, _metric text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF _metric = 'views' THEN
    UPDATE public.posts SET views = views + 1 WHERE slug = _slug AND status = 'published';
  ELSIF _metric = 'unique_readers' THEN
    UPDATE public.posts SET unique_readers = unique_readers + 1 WHERE slug = _slug AND status = 'published';
  ELSIF _metric = 'shares' THEN
    UPDATE public.posts SET shares = shares + 1 WHERE slug = _slug AND status = 'published';
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_post_metric(text, text) TO anon, authenticated;
