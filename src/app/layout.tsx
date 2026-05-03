import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://deniztekbas.com"),
  title: {
    default: "Deniz Tekbaş | Yapay Zeka ve Büyüme Stratejisi, Danışmanlık",
    template: "%s | Deniz Tekbaş",
  },
  description:
    "Deniz Tekbaş — resmi site: yapay zeka destekli büyüme stratejisi, kurumsal danışmanlık, ThumbsAd ve TruOpt.ai. AI-supported growth strategy and consulting.",
  applicationName: "Deniz Tekbaş",
  keywords: [
    "Deniz Tekbaş",
    "Deniz Tekbas",
    "deniz tekbas",
    "deniz tekbas danışman",
    "büyüme stratejisti",
    "yapay zeka danışmanlığı",
    "ThumbsAd",
    "TruOpt",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    title: "Deniz Tekbaş | Büyüme stratejisti ve yapay zeka danışmanlığı",
    description:
      "Deniz Tekbaş — yapay zeka destekli büyüme, danışmanlık ve inovasyon. Resmi web sitesi.",
    siteName: "Deniz Tekbaş",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deniz Tekbaş | Büyüme stratejisti ve yapay zeka danışmanlığı",
    description:
      "Deniz Tekbaş — yapay zeka destekli büyüme, danışmanlık ve inovasyon. Resmi web sitesi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
