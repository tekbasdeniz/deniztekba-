'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ThumbsAdsSection() {
  const { t } = useLanguage();

  return (
    <section id="thumbsad" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#0a246b', // ThumbsAd Official Deep Blue
          zIndex: 0
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '800px',
          background: 'radial-gradient(ellipse at right center, rgba(37, 99, 235, 0.15) 0%, transparent 80%)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="thumbsad-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="thumbsad-title" style={{ 
              fontSize: 'clamp(2rem, 5vw, 4rem)', 
              fontWeight: 800, 
              color: '#ffffff', 
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              {t.thumbsAd.title}
            </h2>
            <p className="thumbsad-desc" style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
              color: 'rgba(255, 255, 255, 0.9)', 
              lineHeight: 1.6, 
              marginBottom: '2.5rem',
              maxWidth: '650px'
            }}>
              {t.thumbsAd.description}
            </p>

            <div className="thumbsad-btn-wrapper" style={{ display: 'flex' }}>
              <a 
                href="https://thumbsad.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  color: '#0f2b4a',
                  padding: '0.875rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                }}
              >
                {t.thumbsAd.btn}
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
