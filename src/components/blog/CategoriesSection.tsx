import { categories } from "@/data/articles";

const CategoriesSection = () => {
  return (
    <section id="categorias" className="border-b border-border py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
          Tópicos de pesquisa
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="cursor-pointer rounded-lg border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <span className="mb-2 block text-xl">{cat.icon}</span>
              <h3 className="mb-1 font-sans text-sm font-semibold text-foreground">
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
