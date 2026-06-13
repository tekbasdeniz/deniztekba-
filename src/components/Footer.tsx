'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '6rem 0 2rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

          {/* Brand & Social */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#ffffff' }}>Deniz Tekbaş</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href="https://www.instagram.com/tekbasdeniz" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://x.com/deniztekbass" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/deniz-tekbas" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:tekbasdeniz@thumbsad.com" style={{ color: '#cbd5e1', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}>
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>{t.footer.policies}</h4>
            <Link href="/policies/privacy" style={{ color: '#cbd5e1', transition: 'color 0.2s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>{t.footer.privacy}</Link>
            <Link href="/policies/terms" style={{ color: '#cbd5e1', transition: 'color 0.2s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>{t.footer.terms}</Link>
            <Link href="/policies/cookies" style={{ color: '#cbd5e1', transition: 'color 0.2s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>{t.footer.cookies}</Link>
            <Link href="/policies/dataProtection" style={{ color: '#cbd5e1', transition: 'color 0.2s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>{t.footer.dataProtection}</Link>
            <Link href="/policies/disclaimer" style={{ color: '#cbd5e1', transition: 'color 0.2s', fontSize: '0.95rem' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>{t.footer.disclaimer}</Link>
          </div>

        </div>

        {/* Bottom Rights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', textAlign: 'center' }}>
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
