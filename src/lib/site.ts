/** Site-wide constants for SEO, contact, and branding. */
export const SITE = {
  name: "Axis Retail Advisory",
  shortName: "Axis",
  url: "https://axisretail.com.br",
  locale: "pt_BR",
  twitterHandle: "@axisretail",
  defaultTitle: "Axis Retail Advisory — Gestão comercial que transforma o varejo",
  defaultDescription:
    "Consultoria e mentoria executiva para varejistas, empresários e líderes C-level. Método, clareza e direção construídos em quase 20 anos de operação na maior varejista de moda do Brasil.",
  keywords: [
    "Axis Retail Advisory",
    "consultoria varejo",
    "mentoria executiva",
    "gestão comercial",
    "Jean Vieira",
    "planejamento comercial",
    "estratégia de produto",
    "mentoria C-level",
    "varejo moda Brasil",
    "advisory varejo",
  ].join(", "),
} as const;

export const CONTACT = {
  emailLabel: "Add here",
  emailHref: undefined as string | undefined,
  phone: "+55 51 8116-6406",
  phoneHref: "https://wa.me/555181166406",
  whatsapp: "+55 51 8116-6406",
  instagram: "https://www.instagram.com/axis.retail",
  instagramHandle: "@axis.retail",
  linkedin: "https://www.linkedin.com/company/axis-retail-advisory/home/",
  linkedinLabel: "Axis Retail Advisory",
  location: "Porto Alegre, Rio Grande do Sul — Brasil",
  locationShort: "Porto Alegre, Rio Grande do Sul",
} as const;

export function absoluteUrl(path = "/") {
  const base = SITE.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMeta({
  title,
  description,
  path,
  keywords,
  image = "/logo-axis.png",
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: string;
}) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);
  const fullTitle = title;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "keywords", content: keywords ?? SITE.keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: type },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:locale", content: SITE.locale },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
