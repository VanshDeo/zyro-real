'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { faqData } from '@/lib/faqData';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-[#070B0B]">
            {/* Parallax bg */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image src="/images/hero-leaves.jpg" alt="" fill className="object-cover opacity-20 scale-110" aria-hidden />
            </motion.div>

            {/* Overlays */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#070B0B] via-transparent to-[#070B0B]" />
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#070B0B] via-transparent to-[#070B0B]" />

            {/* Ambient glows */}
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00E08F]/5 blur-[100px] pointer-events-none z-[1]" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#00E08F]/4 blur-[80px] pointer-events-none z-[1]" />

            {/* Left circuit */}
            <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10 hidden lg:block opacity-60">
                <svg width="64" height="100%" viewBox="0 0 64 800" preserveAspectRatio="none">
                    <path d="M32 60 L32 180 L50 200 L50 600 L32 620 L32 800"
                        stroke="#00E08F" strokeWidth="1.5" fill="none" style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }} />
                    <rect x="28" y="56" width="8" height="8" fill="#00E08F" />
                    <rect x="28" y="792" width="8" height="8" fill="#00E08F" transform="rotate(45 32 796)" />
                </svg>
            </div>

            {/* Right circuit */}
            <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10 hidden lg:block opacity-60">
                <svg width="64" height="100%" viewBox="0 0 64 800" preserveAspectRatio="none">
                    <path d="M32 60 L32 180 L14 200 L14 600 L32 620 L32 800"
                        stroke="#00E08F" strokeWidth="1.5" fill="none" style={{ filter: 'drop-shadow(0 0 3px #00E08F)' }} />
                    <rect x="28" y="56" width="8" height="8" fill="#00E08F" />
                    <rect x="28" y="792" width="8" height="8" fill="#00E08F" transform="rotate(45 32 796)" />
                </svg>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 py-16 sm:py-24 lg:py-28">

                {/* Header */}
                <motion.div
                    className="mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-10 bg-[#00E08F]/70" />
                        <span className="text-[#00E08F] text-xs font-accent uppercase tracking-[0.35em] font-semibold">Got Questions?</span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wider font-display leading-none">
                        FAQ
                    </h2>
                    <p className="mt-4 text-white/60 text-sm sm:text-base max-w-lg leading-relaxed">
                        Everything you need to know about Zyro 2026 — answered clearly.
                    </p>
                </motion.div>

                {/* FAQ layout */}
                <div className="max-w-4xl mx-auto pb-8 sm:pb-16 lg:pb-24">

                    {/* FAQ Accordion */}
                    <div className="space-y-2.5 sm:space-y-3">
                        {faqData.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.04 }}
                                >
                                    <div
                                        className={`
                                            relative rounded-2xl border overflow-hidden cursor-pointer
                                            transition-all duration-300
                                            ${isOpen
                                                ? 'border-[#00E08F]/40 bg-[#00E08F]/[0.06] shadow-[0_0_30px_rgba(0,224,143,0.10)]'
                                                : 'border-white/8 bg-white/[0.025] hover:border-[#00E08F]/25 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(0,224,143,0.06)]'}
                                        `}
                                        onClick={() => toggle(i)}
                                        role="button"
                                        aria-expanded={isOpen}
                                    >
                                        {/* Active left bar */}
                                        {isOpen && (
                                            <motion.div
                                                layoutId="faq-active-bar"
                                                className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00E08F] via-[#00E08F] to-[#00E08F]/30 rounded-full"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}

                                        {/* Question row */}
                                        <div className="flex items-start sm:items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5">
                                            <div className="flex items-start sm:items-center gap-4 min-w-0">
                                                {/* Index number */}
                                                <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-accent font-bold transition-all duration-300
                                                    ${isOpen
                                                        ? 'bg-[#00E08F] text-black shadow-[0_0_12px_rgba(0,224,143,0.5)]'
                                                        : 'bg-white/5 text-white/30 border border-white/10'}`}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <h3 className={`text-xs sm:text-sm font-semibold font-accent leading-snug transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/70'}`}>
                                                    {faq.question}
                                                </h3>
                                            </div>

                                            {/* Icon */}
                                            <motion.div
                                                animate={{ rotate: isOpen ? 45 : 0 }}
                                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border transition-all duration-300
                                                    ${isOpen
                                                        ? 'text-[#00E08F] border-[#00E08F]/40 bg-[#00E08F]/10'
                                                        : 'text-white/30 border-white/10'}`}
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                                                </svg>
                                            </motion.div>
                                        </div>

                                        {/* Answer */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="answer"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-5 sm:px-6 pb-5 pt-0">
                                                        <div className="pl-11 border-t border-[#00E08F]/15 pt-3.5">
                                                            <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
