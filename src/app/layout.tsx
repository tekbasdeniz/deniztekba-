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
    default: "Deniz Tekbaş",
    template: "%s | Deniz Tekbaş",
  },
  description: "AI-supported growth strategy, consulting, and innovation ecosystem collaborations by Deniz Tekbaş.",
  applicationName: "Deniz Tekbaş",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Deniz Tekbaş",
    description: "AI-supported growth strategy, consulting, and innovation ecosystem collaborations by Deniz Tekbaş.",
    siteName: "Deniz Tekbaş",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deniz Tekbaş",
    description: "AI-supported growth strategy, consulting, and innovation ecosystem collaborations by Deniz Tekbaş.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
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
