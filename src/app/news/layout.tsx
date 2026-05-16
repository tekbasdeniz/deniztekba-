import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haberler ve Güncellemeler | News',
  description: 'Deniz Tekbaş ile ilgili son dakika haberleri, güncellemeler, LinkedIn paylaşımları ve sektörel duyurular.',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
