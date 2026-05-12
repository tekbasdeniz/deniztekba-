'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

type NewsEmbedItem = {
  id: string;
  embedUrl: string;
};

const LINKEDIN_POSTS: NewsEmbedItem[] = [
  {
    id: 'linkedin-post-1',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7447570763353858048',
  },
  {
    id: 'linkedin-post-2',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7444699681986605056',
  },
  {
    id: 'linkedin-post-3',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7442531014280790016',
  },
  {
    id: 'linkedin-post-4',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7441779211410915328',
  },
  {
    id: 'linkedin-post-5',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7437769279099363328',
  },
  {
    id: 'linkedin-post-6',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7437089804183478273',
  },
  {
    id: 'linkedin-post-7',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7435245514096496642',
  },
];

function toLinkedinPostUrl(embedUrl: string): string {
  return embedUrl.replace('/embed/feed/update/', '/feed/update/');
}

export default function NewsPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: '8rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="title" style={{ textAlign: 'left', marginBottom: '3rem' }}>{t.nav.news}</h1>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem',
              }}
            >
              {LINKEDIN_POSTS.map((post) => (
                <div
                  key={post.id}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'var(--card-bg)',
                    borderRadius: '1rem',
                    border: '1px solid var(--border)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '100%',
                      width: '100%',
                      margin: '0 auto',
                      height: '600px',
                      overflow: 'hidden',
                      borderRadius: '0.75rem',
                      backgroundColor: '#fff',
                    }}
                  >
                    <iframe
                      src={post.embedUrl}
                      title={`LinkedIn post ${post.id}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 0,
                        borderRadius: '0.75rem',
                        display: 'block',
                      }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                  <a
                    href={toLinkedinPostUrl(post.embedUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '0.75rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    {lang === 'tr' ? "Postu LinkedIn'de Ac" : 'Open Post on LinkedIn'}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
