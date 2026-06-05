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
        "Deniz Tekbaş — yapay zeka odaklı büyüme stratejisti; 2300+ öğrenci eğitimi, 8+ üniversite iş birliği, ThumbsAd ve TruOpt.ai kurucusu.",
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
      founder: [
        { "@type": "Organization", name: "ThumbsAd" },
        { "@type": "Organization", name: "TruOpt.ai" },
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
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Deniz Tekbaş — professional highlights",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "2300+ students trained" },
        { "@type": "ListItem", position: 2, name: "8+ universities" },
        { "@type": "ListItem", position: 3, name: "10+ communities and associations" },
        { "@type": "ListItem", position: 4, name: "Founder of ThumbsAd and TruOpt.ai" },
        {
          "@type": "ListItem",
          position: 5,
          name: "AI, marketing and growth across corporate, startup, investor and academic ecosystems",
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
