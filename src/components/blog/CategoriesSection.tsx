import { categories } from "@/data/articles";

const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Explore
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Categorias
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="gradient-border group cursor-pointer rounded-2xl bg-card p-6 transition-all duration-300 hover:bg-secondary/50"
            >
              <span className="mb-3 block text-2xl">{cat.icon}</span>
              <h3 className="mb-2 text-sm font-bold text-foreground">
                {cat.label}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
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
