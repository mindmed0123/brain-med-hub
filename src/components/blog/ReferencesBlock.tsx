interface ReferencesBlockProps {
  references?: string | null;
}

/**
 * Bloco de referências bibliográficas (estilo acadêmico).
 * Aceita HTML rico (do editor) ou texto simples — uma referência por linha.
 */
const ReferencesBlock = ({ references }: ReferencesBlockProps) => {
  if (!references || !references.trim()) return null;

  const isHtml = /<\/?(p|ol|ul|li|a|strong|em|br)\b/i.test(references);

  return (
    <section className="mt-16 border-t border-border pt-10" aria-labelledby="referencias">
      <h2
        id="referencias"
        className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-primary"
      >
        Referências
      </h2>

      {isHtml ? (
        <div
          className="prose prose-sm max-w-none font-sans text-sm leading-relaxed text-muted-foreground [&_a]:break-words [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_li]:mb-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: references }}
        />
      ) : (
        <ol className="list-decimal space-y-3 pl-5 font-sans text-sm leading-relaxed text-muted-foreground">
          {references
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter(Boolean)
            .map((line, i) => (
              <li key={i}>{line}</li>
            ))}
        </ol>
      )}
    </section>
  );
};

export default ReferencesBlock;
