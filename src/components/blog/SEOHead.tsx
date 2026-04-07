import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
}

const SEOHead = ({
  title = "MindMed Blog — IA na Medicina",
  description = "O principal centro de inteligência sobre inteligência artificial na medicina do Brasil. Dados reais, impacto financeiro e aplicação prática.",
  slug = "",
  image,
}: SEOHeadProps) => {
  const url = `https://blog.mindmed.online${slug ? `/artigo/${slug}` : ""}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={slug ? "article" : "website"} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEOHead;
