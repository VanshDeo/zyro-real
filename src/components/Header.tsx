'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks, logoData } from '@/lib/navbarData';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visible, setVisible]           = useState(true);
  const lastScrollY = useRef(0);

  /* ── Scroll handler (passive) ─────────────────────────────── */
  const handleScroll = useCallback(() => {
    const y = window.scrollY;

    // Collapsed style
    setIsScrolled(y > 60);

    // Hide on scroll-down, show on scroll-up
    if (y > 120) {
      setVisible(y < lastScrollY.current);
    } else {
      setVisible(true);
    }
    lastScrollY.current = y;

    // Scroll-spy
    const sections = navLinks.map(l => l.id);
    const offset   = 120;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top    = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) { setActiveSection(id); break; }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* Keep header visible while mobile menu is open */
  const navY = visible || mobileOpen ? 0 : -120;

  /* ── Smooth scroll helper ──────────────────────────────────── */
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    
    // Check if it's an anchor link and we are actively on the homepage
    const isAnchor = href.startsWith('/#') || href.startsWith('#');
    const isHomePage = window.location.pathname === '/';

    if (isHomePage && isAnchor) {
      e.preventDefault();
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  /* ── Variants ──────────────────────────────────────────────── */
  const drawerVariants = {
    closed: { opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.22 } },
    open:   { opacity: 1, y: 0,   scale: 1,    transition: { duration: 0.28, staggerChildren: 0.06, delayChildren: 0.08 } },
  };
  const linkVariants = {
    closed: { opacity: 0, y: -8 },
    open:   { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Header ──────────────────────────────────────────────── */}
      <motion.header
        className="fixed top-0 inset-x-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: navY }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
          <motion.nav
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`
              relative flex items-center justify-between rounded-full
              border border-white/10 backdrop-blur-xl
              transition-all duration-300
              ${isScrolled
                ? 'bg-black/75 px-4 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                : 'bg-white/5 px-5 py-3'}
            `}
          >
            {/* ── Logo ── */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link href={logoData.href} aria-label="Zyro Home" className="block outline-none">
                <Image
                  src={logoData.src}
                  alt={logoData.alt}
                  width={120}
                  height={40}
                  className={`object-contain w-auto transition-all duration-300 ${isScrolled ? 'h-6 sm:h-8' : 'h-7 sm:h-8 md:h-10'}`}
                  priority
                  style={{ filter: 'drop-shadow(0 0 8px rgba(0,224,143,0.45))' }}
                />
              </Link>
            </motion.div>

            {/* ── Desktop nav ── */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((item, i) => {
                const isActive = (!isHomePage && pathname === item.href) || (isHomePage && activeSection === item.id);
                
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className={`
                        relative px-3 py-1.5 rounded-full text-xs font-accent uppercase tracking-widest font-semibold
                        transition-colors duration-200
                        ${isActive ? 'text-[#00E08F]' : 'text-white/60 hover:text-white'}
                      `}
                    >
                      {/* Active pill bg */}
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-full bg-[#00E08F]/10 border border-[#00E08F]/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* ── Register CTA (desktop) ── */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <a
                href="https://www.namespace.world/events/256WHF"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative inline-flex items-center gap-2 px-5 py-2 rounded-full
                  text-xs font-accent uppercase tracking-widest font-bold text-black
                  bg-[#00E08F] hover:bg-[#00ff9f] transition-colors duration-200
                  shadow-[0_0_16px_rgba(0,224,143,0.4)] hover:shadow-[0_0_28px_rgba(0,224,143,0.65)]
                "
              >
                Register Now
                <svg className="w-3 h-3 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M7 7h10v10" />
                </svg>
              </a>
            </motion.div>

            {/* ── Hamburger (mobile) ── */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="md:hidden z-50 p-2 rounded-lg text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E08F]"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span animate={mobileOpen ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }}  className="block w-full h-0.5 bg-white rounded-full" />
                <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="block w-full h-0.5 bg-white rounded-full" />
                <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-full h-0.5 bg-white rounded-full" />
              </div>
            </button>

            {/* ── Mobile drawer ── */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  key="drawer"
                  variants={drawerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute top-[calc(100%+12px)] left-0 right-0 mx-2 rounded-2xl overflow-hidden md:hidden
                             bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10
                             shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
                >
                  {/* Green accent line */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-60" />

                  <ul className="flex flex-col py-4 px-2">
                    {navLinks.map((item) => {
                      const isActive = (!isHomePage && pathname === item.href) || (isHomePage && activeSection === item.id);

                      return (
                        <motion.li key={item.id} variants={linkVariants}>
                          <Link
                            href={item.href}
                            onClick={(e) => scrollTo(e, item.href)}
                            className={`
                              flex items-center justify-between w-full px-5 py-3.5 rounded-xl
                              font-accent uppercase tracking-widest text-sm font-bold
                              transition-colors duration-200
                              ${isActive
                                ? 'text-[#00E08F] bg-[#00E08F]/8'
                                : 'text-white/70 hover:text-white hover:bg-white/5'}
                            `}
                          >
                            {item.name}
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00E08F] shadow-[0_0_8px_#00E08F]" />
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>

                  {/* Mobile Register CTA */}
                  <div className="px-4 pb-5 pt-1">
                    <a
                      href="https://www.namespace.world/events/256WHF"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                        font-accent uppercase tracking-widest text-sm font-bold text-black
                        bg-[#00E08F] hover:bg-[#00ff9f] transition-colors duration-200
                        shadow-[0_0_20px_rgba(0,224,143,0.35)]
                      "
                    >
                      Register Now
                      <svg className="w-3.5 h-3.5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </motion.header>
    </>
  );
}
