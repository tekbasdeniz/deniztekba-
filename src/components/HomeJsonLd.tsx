const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deniztekbas.com";

export default function HomeJsonLd() {
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Deniz Tekbaş",
      alternateName: ["Deniz Tekbas", "deniz tekbas"],
      url: siteUrl,
      email: "info@deniztekbas.com",
      jobTitle: "Growth strategist, AI and marketing consultant",
      description:
        "Deniz Tekbaş — yapay zeka odaklı büyüme stratejisti; danışmanlık, ThumbsAd ve TruOpt.ai ile kurumlara ölçeklenebilir büyüme ve karar sistemleri tasarlar.",
      sameAs: [
        "https://www.linkedin.com/in/deniz-tekbas",
        "https://www.instagram.com/tekbasdeniz",
        "https://x.com/deniztekbass",
      ],
      knowsAbout: [
        "Artificial intelligence",
        "Growth strategy",
        "Digital marketing",
        "Business consulting",
        "Yapay zeka",
        "Büyüme stratejisi",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Deniz Tekbaş",
      alternateName: "Deniz Tekbas",
      url: siteUrl,
      description:
        "Resmi site: Deniz Tekbaş — yapay zeka destekli büyüme stratejisi, danışmanlık ve inovasyon ekosistemleri.",
      publisher: {
        "@type": "Person",
        name: "Deniz Tekbaş",
      },
      inLanguage: ["tr-TR", "en-US"],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
