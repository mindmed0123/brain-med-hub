import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  mode?: "inline" | "sidebar";
}

export const slugifyHeading = (text: string) =>
  text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();

const TableOfContents = ({ content, mode = "inline" }: TableOfContentsProps) => {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const regex = /^(#{2,3})\s+(.+)$/gm;
    const found: TocItem[] = [];
    let match: RegExpExecArray | null;
    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/[*_`]/g, "").trim();
      found.push({ id: slugifyHeading(text), text, level });
    }
    setItems(found);
  }, [content]);

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  if (mode === "sidebar") {
    return (
      <nav aria-label="Índice do artigo">
        <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/70">
          Neste artigo
        </p>
        <ol className="space-y-1">
          {items.map((item) => (
            <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block border-l-2 py-1 pl-3 font-sans text-[12px] leading-snug transition-all duration-200 ${
                  activeId === item.id
                    ? "border-primary font-semibold text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Sumário do artigo"
      className="my-10 rounded-sm border border-border bg-secondary/30 p-6"
    >
      <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Neste artigo
      </p>
      <ol className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block border-l-2 pl-3 font-sans text-sm leading-snug transition-colors ${
                activeId === item.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
