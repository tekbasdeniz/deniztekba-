'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function TruOptSection() {
  const { t } = useLanguage();

  return (
    <section id="truopt" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#111827', // Very dark slate/black blue as base
          zIndex: 0
        }}
      >
        {/* TruOpt signature blue gradient glow */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, bottom: 0, width: '100%', maxWidth: '800px',
          background: 'radial-gradient(ellipse at left center, rgba(29, 78, 216, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="truopt-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', marginLeft: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="truopt-title" style={{ 
              fontSize: 'clamp(2rem, 5vw, 4rem)', 
              fontWeight: 800, 
              color: '#ffffff', 
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              textAlign: 'right',
              lineHeight: 1.1
            }}>
              {t.truOpt.title}
            </h2>
            <p className="truopt-desc" style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
              color: 'rgba(255, 255, 255, 0.85)', 
              lineHeight: 1.6, 
              textAlign: 'right',
              marginBottom: '2.5rem'
            }}>
              {t.truOpt.description}
            </p>

            <div className="truopt-btn-wrapper" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a 
                href="https://truopt.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ffffff',
                  color: '#1d4ed8',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px rgba(29, 78, 216, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(29, 78, 216, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(29, 78, 216, 0.3)';
                }}
              >
                {t.truOpt.btn}
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
