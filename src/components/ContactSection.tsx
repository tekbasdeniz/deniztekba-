'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background aesthetics */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundColor: 'var(--card-bg)' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 60%)', filter: 'blur(60px)' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '2rem',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
          }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>{t.contact.title}</h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
            {t.contact.slogan}
          </p>
          <a
            href="https://calendar.app.google/hjAXB9fuz4cwxXfe7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              width: 'fit-content',
              display: 'inline-flex'
            }}
          >
            <CalendarDays size={20} style={{ marginRight: '0.5rem' }} />
            {t.contact.btn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
