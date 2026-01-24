'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container-custom">
        <motion.nav
          className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-3'
            }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#00E08F]"
                animate={{
                  filter: [
                    'drop-shadow(0 0 5px rgba(0, 224, 143, 0.3))',
                    'drop-shadow(0 0 15px rgba(0, 224, 143, 0.5))',
                    'drop-shadow(0 0 5px rgba(0, 224, 143, 0.3))'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  d="M20 8C20 8 12 12 12 20C12 24 14 28 20 28C14 28 10 24 10 18C10 12 16 8 20 8Z"
                  fill="currentColor"
                />
                <path
                  d="M20 8C20 8 28 12 28 20C28 24 26 28 20 28C26 28 30 24 30 18C30 12 24 8 20 8Z"
                  fill="currentColor"
                />
                <path
                  d="M20 4C20 4 20 10 20 16C20 22 20 28 20 32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Terms & Condition', 'Help'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-')}`}
                    className={`${item === 'Home' ? 'text-white' : 'text-[#A1A1A1]'
                      } hover:text-[#00E08F] transition-colors relative group`}
                  >
                    {item}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00E08F] group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <motion.button
              className="btn-outline hidden sm:block"
              whileHover={{ scale: 1.05, borderColor: '#00E08F' }}
              whileTap={{ scale: 0.95 }}
            >
              LOGIN
            </motion.button>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 224, 143, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              SIGNUP
            </motion.button> */}
          </motion.div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
