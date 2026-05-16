'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section style={{
      paddingTop: '5rem',
      paddingBottom: '0',
      backgroundColor: 'var(--background)',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* ANA KART BÜTÜNÜ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--card-bg)' 
          }}
        >
          {/* ARKA PLAN VİDEOSU VE TÜM İÇERİK */}
          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '85vh',     
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '6rem 1.5rem',
            overflow: 'hidden',
            zIndex: 10 
          }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="hero-video"
            >
              <source src="/deniz-tekbas-video.mp4" type="video/mp4" />
            </video>

            {/* VİDEO ÜZERİ KARARTMA */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                zIndex: 1
              }}
            />

            {/* VİDEO ÜZERİNDEKİ İÇERİKLER */}
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '900px' }}>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '1rem',
                  display: 'block'
                }}
              >
                {t.hero.greeting}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  marginBottom: '1.5rem'
                }}
              >
                {t.hero.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.7,
                  maxWidth: '800px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <a href="https://calendar.app.google/hjAXB9fuz4cwxXfe7" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                  <CalendarDays size={18} />
                  {t.hero.cta}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
