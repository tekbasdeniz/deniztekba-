'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

export default function PolicyLayout({ policyKey }: { policyKey: keyof ReturnType<typeof useLanguage>['t']['policiesContent'] }) {
  const { t } = useLanguage();
  const policy = t.policiesContent[policyKey];
  const emailSplitRegex = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const linePrefixRegex = /^([^:\n]{2,60}):\s*(.*)$/;
  const hasLettersRegex = /[A-Za-z\u00C0-\u024FĞÜŞİÖÇğüşıöç]/;

  const renderTextWithEmailLinks = (text: string) => {
    const parts = text.split(emailSplitRegex);
    return parts.map((part, idx) => {
      if (emailRegex.test(part)) {
        return (
          <a
            key={`${part}-${idx}`}
            href={`mailto:${part}`}
            style={{ color: 'var(--foreground)', textDecoration: 'underline' }}
          >
            {part}
          </a>
        );
      }
      return <React.Fragment key={`${idx}-${part.slice(0, 12)}`}>{part}</React.Fragment>;
    });
  };

  const renderLine = (line: string, keyPrefix: string) => {
    const match = line.match(linePrefixRegex);
    if (!match) {
      return <React.Fragment key={keyPrefix}>{renderTextWithEmailLinks(line)}</React.Fragment>;
    }

    const label = match[1].trim();
    const rest = match[2] ?? '';
    const isValidLabel = hasLettersRegex.test(label) && !label.toLowerCase().includes('http');
    if (!isValidLabel) {
      return <React.Fragment key={keyPrefix}>{renderTextWithEmailLinks(line)}</React.Fragment>;
    }

    return (
      <React.Fragment key={keyPrefix}>
        <strong style={{ color: 'var(--foreground)', fontWeight: 600 }}>{label}:</strong>
        {rest ? <> {renderTextWithEmailLinks(rest)}</> : null}
      </React.Fragment>
    );
  };

  const renderPolicyText = (text: string, keyPrefix: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => (
      <React.Fragment key={`${keyPrefix}-line-${lineIndex}`}>
        {renderLine(line, `${keyPrefix}-${lineIndex}`)}
        {lineIndex < lines.length - 1 ? '\n' : null}
      </React.Fragment>
    ));
  };

  if (!policy) return null;

  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: '8rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="title" style={{ textAlign: 'left', marginBottom: '1rem' }}>{policy.title}</h1>
            <p style={{ color: 'var(--secondary)', marginBottom: '3rem', fontSize: '0.95rem' }}>{policy.lastUpdated}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {policy.content.map((paragraph, index) => {
                const isBold = paragraph.startsWith('**') && paragraph.includes('**\n');
                if (isBold) {
                  const parts = paragraph.split('**\n');
                  const title = parts[0].replace('**', '');
                  const contentText = parts[1];
                  return (
                    <section key={index} style={{ marginBottom: '1rem' }}>
                      <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.8rem' }}>{title}</h2>
                      <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--secondary)', whiteSpace: 'pre-wrap' }}>
                        {renderPolicyText(contentText, `policy-section-${index}`)}
                      </p>
                    </section>
                  );
                }
                return (
                  <p key={index} style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--secondary)', whiteSpace: 'pre-wrap' }}>
                    {renderPolicyText(paragraph, `policy-paragraph-${index}`)}
                  </p>
                );
              })}
            </div>
          </motion.article>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
