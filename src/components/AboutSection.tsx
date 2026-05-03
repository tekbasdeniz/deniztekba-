'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 className="title">{t.about.title}</h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--secondary)',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            {t.about.description}
          </p>
          <Link href="/about" className="btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
            {t.about.btn}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
