import type { Metadata } from "next";
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ConsultingSection from '@/components/ConsultingSection';
import ThumbsAdsSection from '@/components/ThumbsAdsSection';
import TruOptSection from '@/components/TruOptSection';
import ContactSection from '@/components/ContactSection';
import HomeJsonLd from '@/components/HomeJsonLd';

export const metadata: Metadata = {
  title: "Deniz Tekbaş — Yapay Zeka, Büyüme Stratejisi ve Danışmanlık",
  description:
    "Deniz Tekbaş — yapay zeka odaklı büyüme stratejisti. 2300+ öğrenci, 8+ üniversite, ThumbsAd ve TruOpt.ai kurucusu. Danışmanlık, pazarlama ve AI ile kurumsal büyüme.",
  openGraph: {
    url: "/",
    title: "Deniz Tekbaş — Yapay Zeka, Büyüme Stratejisi ve Danışmanlık",
    description:
      "Deniz Tekbaş: büyüme stratejisti, 2300+ öğrenci eğitimi, üniversite ve ekosistem iş birlikleri. ThumbsAd kurucusu, TruOpt.ai yaratıcısı.",
  },
};

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <StatsSection />
      <ConsultingSection />
      <ThumbsAdsSection />
      <TruOptSection />
      <ContactSection />
    </>
  );
}
