'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ALL_LOGOS } from '@/data/logos';
import Link from 'next/link';

export default function ConsultingSection() {
  const { t } = useLanguage();
  const monochromeLogoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain' as const,
    filter: 'grayscale(100%) brightness(0.3) contrast(1.1)',
  };

  return (
    <section id="consulting" className="section" style={{ overflow: 'hidden', backgroundColor: 'var(--background)' }}>
      <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 className="title">{t.mentorship.title}</h2>
        <p style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}>
          {t.mentorship.description}
        </p>
      </div>

      <div className="marquee-wrapper" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0 3rem 0' }}>
        <div className="marquee-container">
          {/* Double array for infinite scroll effect */}
          {[...ALL_LOGOS, ...ALL_LOGOS].map((item, idx) => (
            <motion.div
              key={idx}
              className="logo-item"
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                flexShrink: 0,
                width: '180px',
                height: '100px',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div style={{ position: 'relative', width: '80%', height: '80%' }}>
                <img
                  src={item.logo}
                  alt={item.name}
                  style={item.monochrome ? monochromeLogoStyle : { width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link href="/consulting" className="btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
          {t.mentorship.btn}
        </Link>
      </div>
    </section>
  );
}
