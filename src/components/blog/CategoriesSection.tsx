const categories = [
  { id: "ia-medicina", label: "IA na Medicina", icon: "🧠", description: "Como a inteligência artificial está transformando diagnósticos e tratamentos." },
  { id: "produtividade-medica", label: "Produtividade Médica", icon: "⚡", description: "Automação e eficiência para a rotina do profissional de saúde." },
  { id: "gestao-clinicas", label: "Gestão de Clínicas", icon: "🏥", description: "Estratégias para modernizar operações e maximizar resultados." },
  { id: "futuro-saude", label: "Futuro da Saúde", icon: "🚀", description: "Tendências e inovações que vão redefinir o setor." },
  { id: "tecnologia-inovacao", label: "Tecnologia e Inovação", icon: "💡", description: "Novas ferramentas e avanços tecnológicos aplicados à saúde." },
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
            Categorias
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group cursor-pointer rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-md"
            >
              <span className="mb-3 block text-2xl">{cat.icon}</span>
              <h3 className="mb-1.5 font-sans text-sm font-bold text-foreground">
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
