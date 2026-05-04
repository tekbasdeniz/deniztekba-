'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="section" style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      overflow: 'hidden',
      backgroundColor: 'var(--background)',
      position: 'relative'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--secondary)',
            marginBottom: '1rem',
            display: 'block'
          }}
        >
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            color: 'var(--foreground)',
            maxWidth: '900px'
          }}
        >
          {t.hero.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '1.15rem',
            color: 'var(--secondary)',
            maxWidth: '800px',
            marginBottom: '3rem',
            lineHeight: 1.7
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
          <a href="https://calendar.app.google/hjAXB9fuz4cwxXfe7" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <CalendarDays size={18} />
            {t.hero.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
