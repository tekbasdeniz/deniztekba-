'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t.nav.about, href: '/about' },
    { name: t.nav.news, href: '/news' },
    { name: t.nav.mentorship, href: '/consulting' },
    { name: t.nav.thumbsAd, href: 'https://thumbsad.com', external: true },
    { name: t.nav.truOpt, href: 'https://truopt.ai', external: true },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // if not on homepage, navigate to '/'
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  };

  return (
    <nav className="navbar">
      <div className="container navContent">
        <div onClick={handleScrollToTop} className="navLogo" style={{cursor: 'pointer', color: '#ffffff', background: 'none', WebkitTextFillColor: 'initial'}}>
          Deniz Tekbaş
        </div>

        {/* Desktop Menu */}
        <div className="navLinks">
          {navItems.map((item, index) =>
            item.external ? (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="navLink">
                {item.name}
              </a>
            ) : (
              <Link key={index} href={item.href} className="navLink">
                {item.name}
              </Link>
            )
          )}
          <button onClick={toggleLanguage} className="langToggle">
            <Globe size={18} />
            {lang === 'en' ? 'TR' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobileMenuBtn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '5rem',
              left: 0,
              right: 0,
              backgroundColor: '#0f172a',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            {navItems.map((item, index) =>
              item.external ? (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="navLink" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              ) : (
                <Link key={index} href={item.href} className="navLink" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              )
            )}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="langToggle"
              style={{ width: 'fit-content' }}
            >
              <Globe size={18} />
              {lang === 'en' ? 'TR' : 'EN'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
