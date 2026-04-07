import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { usePostById, useCreatePost, useUpdatePost, uploadCoverImage, getCoverImageUrl } from "@/hooks/usePosts";
import { categories } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { ArrowLeft, Save, Upload, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminArticleForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();
  const { data: existing, isLoading: loadingPost } = usePostById(id);
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("ia-pratica");
  const [author, setAuthor] = useState("MindMed");
  const [readTime, setReadTime] = useState(5);
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [featured, setFeatured] = useState(false);
  const [highlightLabel, setHighlightLabel] = useState("");
  const [highlightValue, setHighlightValue] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setSubtitle(existing.subtitle || "");
      setContent(existing.content);
      setCategory(existing.category);
      setAuthor(existing.author);
      setReadTime(existing.read_time);
      setStatus(existing.status as "draft" | "published");
      setFeatured(existing.featured);
      setHighlightLabel(existing.highlight_label || "");
      setHighlightValue(existing.highlight_value || "");
      setCoverImage(existing.cover_image || "");
    }
  }, [existing]);

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { data, error } = await uploadCoverImage(file);
    if (error) {
      toast.error("Erro ao fazer upload da imagem.");
    } else if (data) {
      const url = getCoverImageUrl(data.path);
      setCoverImage(url);
      toast.success("Imagem enviada!");
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("O título é obrigatório.");
      return;
    }
    setSaving(true);
    const slug = slugify(title);
    const postData = {
      title,
      subtitle: subtitle || null,
      content,
      category,
      author,
      read_time: readTime,
      status,
      featured,
      highlight_label: highlightLabel || null,
      highlight_value: highlightValue || null,
      cover_image: coverImage || null,
      slug,
    };

    try {
      if (isEdit && id) {
        await updatePost.mutateAsync({ id, ...postData });
        toast.success("Artigo atualizado!");
      } else {
        await createPost.mutateAsync(postData);
        toast.success("Artigo criado!");
      }
      navigate("/admin");
    } catch (err: any) {
      toast.error(err.message || "Erro ao salvar artigo.");
    }
    setSaving(false);
  };

  if (isEdit && loadingPost) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B]">
        <p className="text-white/40">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <header className="border-b border-white/10 bg-[#111]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/admin" className="flex items-center gap-2 font-sans text-sm text-white/50 transition-colors hover:text-white">
            <ArrowLeft size={14} /> Voltar
          </Link>
          <h1 className="font-serif text-lg font-bold">{isEdit ? "Editar artigo" : "Novo artigo"}</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title & Subtitle */}
          <div className="grid gap-4 md:grid-cols-1">
            <div>
              <Label className="text-white/70">Título *</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Título do artigo"
                required
              />
            </div>
            <div>
              <Label className="text-white/70">Subtítulo</Label>
              <Input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Subtítulo explicativo"
              />
            </div>
          </div>

          {/* Meta fields */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <Label className="text-white/70">Categoria</Label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 font-sans text-sm text-white"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#111]">
                    {c.icon} {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label className="text-white/70">Autor</Label>
              <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/30"
              />
            </div>
            <div>
              <Label className="text-white/70">Tempo de leitura (min)</Label>
              <Input
                type="number"
                min={1}
                value={readTime}
                onChange={(e) => setReadTime(Number(e.target.value))}
                className="mt-1 border-white/10 bg-white/5 text-white"
              />
            </div>
            <div>
              <Label className="text-white/70">Status</Label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 font-sans text-sm text-white"
              >
                <option value="draft" className="bg-[#111]">Rascunho</option>
                <option value="published" className="bg-[#111]">Publicado</option>
              </select>
            </div>
          </div>

          {/* Featured & Highlight */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-white/5"
              />
              <Label htmlFor="featured" className="text-white/70">Artigo em destaque</Label>
            </div>
            <div>
              <Label className="text-white/70">Label do destaque</Label>
              <Input
                value={highlightLabel}
                onChange={(e) => setHighlightLabel(e.target.value)}
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Ex: Aumento na receita"
              />
            </div>
            <div>
              <Label className="text-white/70">Valor do destaque</Label>
              <Input
                value={highlightValue}
                onChange={(e) => setHighlightValue(e.target.value)}
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Ex: +5.8%"
              />
            </div>
          </div>

          {/* Cover image */}
          <div>
            <Label className="text-white/70">Imagem de capa</Label>
            <div className="mt-2 flex items-center gap-4">
              {coverImage ? (
                <div className="relative h-32 w-48 overflow-hidden rounded-lg border border-white/10">
                  <img src={coverImage} alt="Capa" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setCoverImage("")}
                    className="absolute right-1 top-1 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white hover:bg-black/80"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="flex h-32 w-48 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5">
                  <ImageIcon size={24} className="text-white/20" />
                </div>
              )}
              <label className="cursor-pointer">
                <input type="file" accept="image/*" onChange={handleCoverUpload} className="hidden" />
                <span className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 font-sans text-sm text-white/70 transition-colors hover:bg-white/10">
                  <Upload size={14} />
                  {uploading ? "Enviando..." : "Upload"}
                </span>
              </label>
            </div>
          </div>

          {/* Rich text editor */}
          <div>
            <Label className="text-white/70">Conteúdo</Label>
            <div className="mt-2">
              <RichTextEditor content={content} onChange={setContent} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/admin")}
              className="text-white/50 hover:text-white"
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={saving} className="gap-2">
              <Save size={16} />
              {saving ? "Salvando..." : isEdit ? "Atualizar" : "Criar artigo"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
