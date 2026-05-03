import type { Metadata } from "next";
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ConsultingSection from '@/components/ConsultingSection';
import ThumbsAdsSection from '@/components/ThumbsAdsSection';
import TruOptSection from '@/components/TruOptSection';
import ContactSection from '@/components/ContactSection';
import HomeJsonLd from '@/components/HomeJsonLd';

export const metadata: Metadata = {
  title: "Deniz Tekbaş — Yapay Zeka, Büyüme Stratejisi ve Danışmanlık",
  description:
    "Deniz Tekbaş resmi web sitesi: yapay zeka odaklı büyüme stratejisi, kurumsal danışmanlık, ThumbsAd ve TruOpt.ai. Türkiye ve global ölçekte strateji ve inovasyon.",
  openGraph: {
    url: "/",
    title: "Deniz Tekbaş — Yapay Zeka, Büyüme Stratejisi ve Danışmanlık",
    description:
      "Deniz Tekbaş: büyüme stratejisti, yapay zeka danışmanlığı ve dijital dönüşüm. ThumbsAd kurucusu, TruOpt.ai yaratıcısı.",
  },
};

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <AboutSection />
      <ConsultingSection />
      <ThumbsAdsSection />
      <TruOptSection />
      <ContactSection />
    </>
  );
}
