import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımda | About',
  description: 'Deniz Tekbaş hakkında detaylı bilgi. Büyüme stratejisti, yapay zeka danışmanı ve teknoloji ekosistemi lideri.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
