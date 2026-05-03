export type LogoItem = {
  name: string;
  logo: string;
  monochrome?: boolean;
};

export const GLOBAL_LOGOS: LogoItem[] = [
  { name: 'Biblos Resort', logo: '/logos/global/Biblos_Resort_Logo.png', monochrome: true },
  { name: 'MTC GAME', logo: '/logos/global/MTC_Game_logo.png' },
  { name: 'Marriott Bonvoy', logo: '/logos/global/Marriott_Bonvoy_logo.svg' },
  { name: 'Maxi Cosi', logo: '/logos/global/Maxi_Cosi_logo.svg' },
  { name: 'Tchibo', logo: '/logos/global/Tchibo_logo.png' },
  { name: 'The Ritz-Carlton', logo: '/logos/global/The_Ritz-Carlton_logo.svg' },
];

export const REGIONAL_LOGOS: LogoItem[] = [
  { name: 'Sabancı Üniversitesi', logo: '/logos/regional/Sabanc%C4%B1_%C3%9Cniversitesi_logo.svg' },
  { name: 'BAU', logo: '/logos/regional/bau-logo.svg' },
  { name: 'Bilgi Üniversitesi', logo: '/logos/regional/bilgi-universitesi-logo-.png' },
  { name: 'Biruni Üniversitesi', logo: '/logos/regional/biruni-universitesi-logo.svg' },
  { name: 'Boğaziçi Üniversitesi', logo: '/logos/regional/bogazici-universitesi-logo-.png' },
  { name: 'BTM', logo: '/logos/regional/btm-logo.png', monochrome: true },
  { name: 'Evidea', logo: '/logos/regional/evidea.png' },
  { name: 'Eczacıbaşı', logo: '/logos/regional/ezcacıbaşı.png' },
  { name: 'GKTR', logo: '/logos/regional/gktr-logo-light.svg', monochrome: true },
  { name: 'Kariyer.net', logo: '/logos/regional/kar%C4%B1yernet.png' },
  { name: 'Nobel İlaç', logo: '/logos/regional/nobel-ilac.png' },
  { name: 'Tech Istanbul', logo: '/logos/regional/tech-istanbul_logo-.png' },
  { name: 'Turkish E', logo: '/logos/regional/turkishe.png', monochrome: true },
  { name: 'Yeditepe Üniversitesi', logo: '/logos/regional/yeditepe-universitesi-logo.svg' },
  { name: 'Yeni Bir Lider', logo: '/logos/regional/yeni-bir-lider.png' },
  { name: 'Yıldız Teknik Üniversitesi', logo: '/logos/regional/y%C4%B1ld%C4%B1z-teknik-universitesi-logo.svg' },
  { name: 'Şişecam', logo: '/logos/regional/%C5%9Ei%C5%9Fecam_logo.svg' },
];

export const PLATFORM_LOGOS: LogoItem[] = [
  { name: 'Reddit', logo: '/logos/platforms_ecosystems/Reddit_logo.svg' },
  { name: 'Facebook', logo: '/logos/platforms_ecosystems/facebook.png' },
  { name: 'Google Ads', logo: '/logos/platforms_ecosystems/google-ads.png' },
  { name: 'Google', logo: '/logos/platforms_ecosystems/google.png' },
  { name: 'Instagram', logo: '/logos/platforms_ecosystems/instagram-square.webp' },
  { name: 'LinkedIn', logo: '/logos/platforms_ecosystems/linkedin.png' },
  { name: 'TikTok', logo: '/logos/platforms_ecosystems/tiktok.webp' },
  { name: 'WhatsApp', logo: '/logos/platforms_ecosystems/whatsapp.png' },
  { name: 'X', logo: '/logos/platforms_ecosystems/x.png' },
  { name: 'YouTube', logo: '/logos/platforms_ecosystems/youtube.png' },
];

export const ALL_LOGOS = [...GLOBAL_LOGOS, ...REGIONAL_LOGOS, ...PLATFORM_LOGOS];
