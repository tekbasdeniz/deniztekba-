'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');

    let pauseRecoveryTimer: ReturnType<typeof setTimeout> | undefined;

    const playSafe = () => {
      if (document.hidden || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
      video.play().catch(() => {});
    };

    const onPause = () => {
      if (document.hidden) return;
      clearTimeout(pauseRecoveryTimer);
      pauseRecoveryTimer = setTimeout(playSafe, 600);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') playSafe();
    };

    playSafe();

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pageshow', playSafe);
    window.addEventListener('focus', playSafe);
    video.addEventListener('canplay', playSafe);
    video.addEventListener('ended', playSafe);
    video.addEventListener('pause', onPause);

    const resumeInterval = window.setInterval(() => {
      if (!document.hidden && video.paused) playSafe();
    }, 6000);

    return () => {
      clearTimeout(pauseRecoveryTimer);
      window.clearInterval(resumeInterval);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pageshow', playSafe);
      window.removeEventListener('focus', playSafe);
      video.removeEventListener('canplay', playSafe);
      video.removeEventListener('ended', playSafe);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <section style={{
      paddingTop: '5rem',
      paddingBottom: '0',
      backgroundColor: 'var(--background)',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--card-bg)'
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '6rem 1.5rem',
            overflow: 'hidden',
            zIndex: 10
          }}>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              tabIndex={-1}
              aria-hidden="true"
              className="hero-video"
            >
              <source src="/deniz-tekbas-video.mp4" type="video/mp4" />
            </video>

            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                zIndex: 1,
              }}
            />

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '900px' }}>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '1rem',
                  display: 'block'
                }}
              >
                {t.hero.greeting}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  marginBottom: '1.5rem'
                }}
              >
                {t.hero.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.7,
                  maxWidth: '800px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <a
                  href="https://calendar.app.google/hjAXB9fuz4cwxXfe7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="super-button"
                >
                  <span className="super-button-inner">
                    <CalendarDays size={18} className="super-button-icon" aria-hidden />
                    {t.hero.cta}
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
