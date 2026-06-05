import Image from 'next/image';
import type { LogoItem } from '@/data/logos';

type LogoImageProps = {
  item: LogoItem;
  sizes?: string;
};

export default function LogoImage({ item, sizes = '180px' }: LogoImageProps) {
  const style = item.monochrome
    ? {
        objectFit: 'contain' as const,
        filter: 'grayscale(100%) brightness(0.3) contrast(1.1)',
      }
    : { objectFit: 'contain' as const };

  return (
    <Image
      src={item.logo}
      alt={item.name}
      fill
      sizes={sizes}
      className={item.invertOnLight ? 'invert-on-light' : undefined}
      style={style}
    />
  );
}
