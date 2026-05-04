import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useAllPosts, useDeletePost } from "@/hooks/usePosts";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, LogOut, Eye, EyeOff, Star, Users, Share2, BarChart3 } from "lucide-react";

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const { data: posts, isLoading } = useAllPosts();
  const deletePost = useDeletePost();
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja deletar este artigo?")) return;
    setDeleting(id);
    await deletePost.mutateAsync(id);
    setDeleting(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#111]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-serif text-xl font-bold">MindMed</Link>
            <span className="rounded bg-primary/20 px-2 py-0.5 font-sans text-xs text-primary">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-sans text-sm text-white/50">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2 text-white/50 hover:text-white">
              <LogOut size={14} /> Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl font-bold">Artigos</h1>
            <p className="font-sans text-sm text-white/50">Gerencie os artigos do blog</p>
          </div>
          <Button onClick={() => navigate("/admin/novo")} className="gap-2">
            <Plus size={16} /> Novo artigo
          </Button>
        </div>

        {/* Stats */}
        {posts && posts.length > 0 && (() => {
          const totals = posts.reduce(
            (acc, p) => {
              const x = p as typeof p & { views?: number; unique_readers?: number; shares?: number };
              acc.views += x.views ?? 0;
              acc.readers += x.unique_readers ?? 0;
              acc.shares += x.shares ?? 0;
              return acc;
            },
            { views: 0, readers: 0, shares: 0 },
          );
          const cards = [
            { label: "Visualizações", value: totals.views, icon: BarChart3, color: "text-blue-400" },
            { label: "Leitores únicos", value: totals.readers, icon: Users, color: "text-green-400" },
            { label: "Compartilhamentos", value: totals.shares, icon: Share2, color: "text-purple-400" },
          ];
          return (
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {cards.map((c) => (
                <div key={c.label} className="rounded-xl border border-white/10 bg-[#111] p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs uppercase tracking-wider text-white/40">{c.label}</span>
                    <c.icon size={16} className={c.color} />
                  </div>
                  <p className="mt-3 font-serif text-3xl font-bold">{c.value.toLocaleString("pt-BR")}</p>
                </div>
              ))}
            </div>
          );
        })()}

        {isLoading ? (
          <div className="py-20 text-center text-white/40">Carregando...</div>
        ) : !posts?.length ? (
          <div className="rounded-xl border border-white/10 bg-[#111] py-20 text-center">
            <p className="text-white/40">Nenhum artigo ainda.</p>
            <Button onClick={() => navigate("/admin/novo")} variant="outline" className="mt-4 gap-2 border-white/20 text-white hover:bg-white/10">
              <Plus size={16} /> Criar primeiro artigo
            </Button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-4 py-3 font-sans text-xs font-medium uppercase tracking-wider text-white/40">Título</th>
                  <th className="hidden px-4 py-3 font-sans text-xs font-medium uppercase tracking-wider text-white/40 md:table-cell">Categoria</th>
                  <th className="px-4 py-3 font-sans text-xs font-medium uppercase tracking-wider text-white/40">Status</th>
                  <th className="hidden px-4 py-3 text-right font-sans text-xs font-medium uppercase tracking-wider text-white/40 sm:table-cell">Views</th>
                  <th className="hidden px-4 py-3 text-right font-sans text-xs font-medium uppercase tracking-wider text-white/40 sm:table-cell">Leitores</th>
                  <th className="hidden px-4 py-3 text-right font-sans text-xs font-medium uppercase tracking-wider text-white/40 sm:table-cell">Shares</th>
                  <th className="hidden px-4 py-3 font-sans text-xs font-medium uppercase tracking-wider text-white/40 lg:table-cell">Data</th>
                  <th className="px-4 py-3 text-right font-sans text-xs font-medium uppercase tracking-wider text-white/40">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {posts.map((post) => (
                  <tr key={post.id} className="transition-colors hover:bg-white/5">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {post.featured && <Star size={12} className="text-yellow-400" />}
                        <span className="font-sans text-sm text-white/90 line-clamp-1">{post.title}</span>
                      </div>
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      <span className="font-sans text-xs text-white/40">{post.category}</span>
                    </td>
                    <td className="px-4 py-3">
                      {post.status === "published" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 font-sans text-xs text-green-400">
                          <Eye size={10} /> Publicado
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5 font-sans text-xs text-yellow-400">
                          <EyeOff size={10} /> Rascunho
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-sans text-xs text-white/40">
                      {new Date(post.created_at).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate(`/admin/editar/${post.id}`)}
                          className="h-8 w-8 text-white/40 hover:text-primary"
                        >
                          <Edit size={14} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(post.id)}
                          disabled={deleting === post.id}
                          className="h-8 w-8 text-white/40 hover:text-red-400"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
