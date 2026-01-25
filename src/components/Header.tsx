'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navLinks, logoData } from '@/lib/navbarData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if at top or scrolled for styling
      setIsScrolled(currentScrollY > 50);

      // Scroll Spy Logic
      const sections = ['home', 'about', 'prizes', 'tracks', 'timeline', 'partners', 'faq', 'terms'];
      const scrollPosition = currentScrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Hide/Show Logic
      if (currentScrollY > 100) { // Only active after scrolling down a bit
        if (currentScrollY > lastScrollY) {
          // Scrolling DOWN
          setIsVisible(false);
        } else {
          // Scrolling UP
          setIsVisible(true);
        }
      } else {
        // At the top, always visible
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    // handleScroll(); // Removing initial call to avoid reset issues on reload

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Depend on lastScrollY to compare

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };



  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible || mobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="container-custom">
          <motion.nav
            className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 relative ${isScrolled ? 'py-2 shadow-lg' : 'py-3'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="z-50 relative"
            >
              <Link href={logoData.href} className="flex items-center gap-2">
                <motion.img
                  src={logoData.src}
                  alt={logoData.alt}
                  className="w-auto h-10 object-contain"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 5px rgba(0, 224, 143, 0.3))',
                      'drop-shadow(0 0 15px rgba(0, 224, 143, 0.5))',
                      'drop-shadow(0 0 5px rgba(0, 224, 143, 0.3))'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div>
                    <Link
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`${activeSection === item.id ? 'text-white' : 'text-[#A1A1A1]'} hover:text-[#00E08F] transition-all duration-300 flex items-center gap-1 group font-medium`}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: 5 }}
                        animate={{
                          opacity: activeSection === item.id ? 1 : 0,
                          x: activeSection === item.id ? 0 : 5
                        }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-[#00E08F]"
                      >
                        (
                      </motion.span>

                      <span className={activeSection === item.id ? 'drop-shadow-[0_0_8px_rgba(0,224,143,0.5)]' : ''}>
                        {item.name}
                      </span>

                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{
                          opacity: activeSection === item.id ? 1 : 0,
                          x: activeSection === item.id ? 0 : -5
                        }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-[#00E08F]"
                      >
                        )
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white focus:outline-none"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-white rounded-full origin-left"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-full h-0.5 bg-white rounded-full"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                    className="w-full h-0.5 bg-white rounded-full origin-left"
                  />
                </div>
              </button>
            </div>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="absolute top-full left-0 right-0 mt-4 p-4 mx-4 rounded-2xl md:hidden overflow-hidden bg-black/60 backdrop-blur-3xl border border-white/10"
                >
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((item) => (
                      <motion.li key={item.name} variants={itemVariants}>
                        <Link
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className={`block w-full p-2 text-lg text-center font-medium transition-colors ${activeSection === item.id ? 'text-[#00E08F]' : 'text-white hover:text-[#00E08F]'}`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </motion.header>
    </>
  );
}
