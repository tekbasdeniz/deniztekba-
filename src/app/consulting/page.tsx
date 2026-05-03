'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';
import { GLOBAL_LOGOS, REGIONAL_LOGOS, PLATFORM_LOGOS, type LogoItem } from '@/data/logos';

const logoCardStyle = {
  flexShrink: 0 as const,
  width: '200px',
  height: '120px',
  backgroundColor: 'var(--card-bg)',
  border: '1px solid var(--border)',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
};

const defaultLogoStyle = { width: '100%', height: '100%', objectFit: 'contain' as const };
const monochromeLogoStyle = {
  ...defaultLogoStyle,
  filter: 'grayscale(100%) brightness(0.3) contrast(1.1)',
};

const getLogoStyle = (item: LogoItem) => (item.monochrome ? monochromeLogoStyle : defaultLogoStyle);

export default function ConsultingPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: '8rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="title consulting-heading" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{t.mentorship.title}</h1>
            <p className="consulting-heading" style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '800px', marginBottom: '4rem', lineHeight: 1.6 }}>
              {t.mentorship.pageDesc}
            </p>
            
            <h2 className="consulting-heading" style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem' }}>{t.mentorship.global}</h2>
            <div className="marquee-wrapper" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0', marginBottom: '2rem' }}>
              <div className="marquee-container marquee-speed-global">
                {[...GLOBAL_LOGOS, ...GLOBAL_LOGOS, ...GLOBAL_LOGOS].map((item, idx) => (
                  <motion.div key={`global-${idx}`} className="logo-item" whileHover={{ scale: 1.05 }} style={logoCardStyle}>
                    <img src={item.logo} alt={item.name} style={getLogoStyle(item)} />
                  </motion.div>
                ))}
              </div>
            </div>

            <h2 className="consulting-heading" style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem', textAlign: 'right' }}>{t.mentorship.regional}</h2>
            <div className="marquee-wrapper" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0', marginBottom: '2rem' }}>
              <div className="marquee-container reverse marquee-speed-regional">
                {[...REGIONAL_LOGOS, ...REGIONAL_LOGOS].map((item, idx) => (
                  <motion.div key={`regional-${idx}`} className="logo-item" whileHover={{ scale: 1.05 }} style={logoCardStyle}>
                    <img src={item.logo} alt={item.name} style={getLogoStyle(item)} />
                  </motion.div>
                ))}
              </div>
            </div>

            <h2 className="consulting-heading" style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '2rem' }}>{t.mentorship.platforms}</h2>
            <div className="marquee-wrapper" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0', marginBottom: '4rem' }}>
              <div className="marquee-container marquee-speed-platform">
                {[...PLATFORM_LOGOS, ...PLATFORM_LOGOS, ...PLATFORM_LOGOS].map((item, idx) => (
                  <motion.div key={`platform-${idx}`} className="logo-item" whileHover={{ scale: 1.05 }} style={logoCardStyle}>
                    <img src={item.logo} alt={item.name} style={getLogoStyle(item)} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
