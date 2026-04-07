import { categories } from "@/data/articles";

const CategoriesSection = () => {
  return (
    <section id="categorias" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <span className="mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Áreas de pesquisa
          </span>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Tópicos de pesquisa
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="group cursor-pointer rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50 hover:shadow-md"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="mb-3 block text-2xl transition-transform duration-300 group-hover:scale-110">
                {cat.icon}
              </span>
              <h3 className="mb-1.5 font-sans text-sm font-semibold text-foreground">
                {cat.label}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
