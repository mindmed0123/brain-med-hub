import { categories } from "@/data/articles";

const CategoriesSection = () => {
  return (
    <section id="categorias" className="border-b border-border py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Áreas editoriais
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Linhas de pesquisa.
          </h2>
        </div>

        <div className="grid divide-y divide-border border-y border-border md:grid-cols-2 md:divide-y-0 md:border-y-0">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className={`group flex gap-6 p-8 transition-colors duration-300 hover:bg-secondary/40 md:border-b md:border-border ${
                i % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <span className="font-serif text-xl font-bold text-primary">
                0{i + 1}
              </span>
              <div className="flex-1">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {cat.label}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
