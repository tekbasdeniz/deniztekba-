'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const { t } = useLanguage();
  const cards = t.stats.cards.slice(0, 5);

  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <div className="stats-section-inner">
        <header className="stats-header">
          <h2 id="stats-heading" className="sr-only">
            {t.stats.heading}
          </h2>
          <p className="sr-only">{t.stats.intro}</p>
        </header>

        <ul className="stats-seo-list">
          {cards.map((card, index) => (
            <li key={`seo-${index}`}>
              {[card.value, card.label, card.sub].filter(Boolean).join(' — ')}
            </li>
          ))}
        </ul>

        <motion.div
          className="stats-cards-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          aria-hidden="true"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <p className="heading">{card.value || card.label}</p>
              <p>{card.value ? card.label : ''}</p>
              <p>{card.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
