import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold, Italic, List, ListOrdered, Heading1, Heading2, Heading3,
  Quote, Minus, Link as LinkIcon, Image as ImageIcon, Undo, Redo,
} from "lucide-react";

interface Props {
  content: string;
  onChange: (html: string) => void;
}

const MenuButton = ({
  onClick, active, children, title,
}: {
  onClick: () => void; active?: boolean; children: React.ReactNode; title: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className={`rounded p-1.5 transition-colors ${
      active ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Image,
      Placeholder.configure({ placeholder: "Comece a escrever seu artigo..." }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose max-w-none min-h-[300px] p-4 focus:outline-none text-foreground [&_h1]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_blockquote]:text-muted-foreground [&_blockquote]:border-primary/40",
      },
    },
  });

  if (!editor) return null;

  const addLink = () => {
    const url = prompt("URL do link:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = prompt("URL da imagem:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex flex-wrap gap-0.5 border-b border-border bg-muted/30 p-1.5">
        <MenuButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Negrito">
          <Bold size={16} />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Itálico">
          <Italic size={16} />
        </MenuButton>
        <div className="mx-1 w-px bg-border" />
        <MenuButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive("heading", { level: 1 })} title="Título 1">
          <Heading1 size={16} />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="Título 2">
          <Heading2 size={16} />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="Título 3">
          <Heading3 size={16} />
        </MenuButton>
        <div className="mx-1 w-px bg-border" />
        <MenuButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Lista">
          <List size={16} />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Lista numerada">
          <ListOrdered size={16} />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Citação">
          <Quote size={16} />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Linha horizontal">
          <Minus size={16} />
        </MenuButton>
        <div className="mx-1 w-px bg-border" />
        <MenuButton onClick={addLink} active={editor.isActive("link")} title="Link">
          <LinkIcon size={16} />
        </MenuButton>
        <MenuButton onClick={addImage} title="Imagem">
          <ImageIcon size={16} />
        </MenuButton>
        <div className="mx-1 w-px bg-border" />
        <MenuButton onClick={() => editor.chain().focus().undo().run()} title="Desfazer">
          <Undo size={16} />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().redo().run()} title="Refazer">
          <Redo size={16} />
        </MenuButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
