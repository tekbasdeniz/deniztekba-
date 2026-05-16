import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Danışmanlık ve Mentörlük | Consulting',
  description: 'Deniz Tekbaş yapay zeka destekli kurumsal danışmanlık, mentorluk hizmetleri ve büyüme stratejisi çözümleri.',
};

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
