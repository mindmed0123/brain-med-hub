interface Props { category: string; className?: string }
const CoverFallback = ({ category, className = "" }: Props) => (
  <div className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-ink px-4 text-center ${className}`}>
    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand">{category}</span>
    <span className="font-serif text-3xl text-primary-foreground">O Prontuário</span>
  </div>
);
export default CoverFallback;
