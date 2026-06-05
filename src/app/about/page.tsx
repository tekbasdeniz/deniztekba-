'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
            <h1 className="title" style={{ textAlign: 'left', marginBottom: '3rem' }}>{t.about.title}</h1>
            
            <div className="about-content" style={{ display: 'block', overflow: 'hidden' }}>
              <div className="about-image-wrapper" style={{ 
                float: 'right', 
                margin: '0 0 2rem 2rem', 
                width: '100%', 
                maxWidth: '350px', 
                borderRadius: '1.5rem', 
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}>
                <Image
                  src="/deniz-tekbas-foto.jpeg"
                  alt="Deniz Tekbaş"
                  width={700}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 350px"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>

              <div>
                {t.about.fullText.map((paragraph, index) => {
                  const isTitleAndContent = paragraph.startsWith('**') && paragraph.includes('**\n');
                  if (isTitleAndContent) {
                    const parts = paragraph.split('**\n');
                    const title = parts[0].replace('**', '');
                    const content = parts[1];
                    return (
                      <div key={index} style={{ marginBottom: '1.5rem', clear: 'none' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem' }}>{title}</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--secondary)' }}>{content}</p>
                      </div>
                    );
                  }

                  const isFullyBold = paragraph.startsWith('**') && paragraph.endsWith('**');
                  if (isFullyBold) {
                    return (
                      <p key={index} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--foreground)', fontWeight: 700, marginBottom: '1.5rem' }}>
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }

                  return (
                    <p key={index} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
