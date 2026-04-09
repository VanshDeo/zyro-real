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

            {/* Ambient glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00E08F]/6 blur-[120px] pointer-events-none z-[1]" />

            {/* Left circuit */}
            <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10 hidden lg:block opacity-60">
                <svg width="64" height="100%" viewBox="0 0 64 800" preserveAspectRatio="none">
                    <defs>
                        <filter id="glow-f">
                            <feGaussianBlur stdDeviation="3" result="b" />
                            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>
                    <path d="M32 60 L32 180 L50 200 L50 600 L32 620 L32 800"
                        stroke="#00E08F" strokeWidth="1.5" fill="none" filter="url(#glow-f)" />
                    <rect x="28" y="56" width="8" height="8" fill="#00E08F" filter="url(#glow-f)" />
                    <rect x="28" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow-f)" transform="rotate(45 32 796)" />
                </svg>
            </div>

            {/* Right circuit */}
            <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10 hidden lg:block opacity-60">
                <svg width="64" height="100%" viewBox="0 0 64 800" preserveAspectRatio="none">
                    <defs>
                        <filter id="glow-f2">
                            <feGaussianBlur stdDeviation="3" result="b" />
                            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>
                    <path d="M32 60 L32 180 L14 200 L14 600 L32 620 L32 800"
                        stroke="#00E08F" strokeWidth="1.5" fill="none" filter="url(#glow-f2)" />
                    <rect x="28" y="56" width="8" height="8" fill="#00E08F" filter="url(#glow-f2)" />
                    <rect x="28" y="792" width="8" height="8" fill="#00E08F" filter="url(#glow-f2)" transform="rotate(45 32 796)" />
                </svg>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 py-14 sm:py-20">

                {/* Header */}
                <motion.div
                    className="mb-10 sm:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-10 bg-[#00E08F]/70" />
                        <span className="text-[#00E08F] text-xs font-accent uppercase tracking-[0.35em] font-semibold">
                            Got Questions?
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider font-display">
                        FAQ
                    </h2>
                    <p className="mt-3 text-white/40 text-sm max-w-md">
                        Everything you need to know about Zyro 2026.
                    </p>
                </motion.div>

                {/* Two-column layout on large screens */}
                <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start max-w-6xl">

                    {/* FAQ Accordion */}
                    <div className="space-y-2 sm:space-y-3">
                        {faqData.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                >
                                    <div
                                        className={`
                                            relative rounded-xl border overflow-hidden cursor-pointer
                                            transition-all duration-300
                                            ${isOpen
                                                ? 'border-[#00E08F]/40 bg-[#00E08F]/5 shadow-[0_0_20px_rgba(0,224,143,0.07)]'
                                                : 'border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'}
                                        `}
                                        onClick={() => toggle(i)}
                                        role="button"
                                        aria-expanded={isOpen}
                                    >
                                        {/* Active left bar */}
                                        {isOpen && (
                                            <motion.div
                                                layoutId="faq-active-bar"
                                                className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00E08F] rounded-full"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}

                                        {/* Question row */}
                                        <div className="flex items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3.5">
                                            <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                                                {/* Index number */}
                                                <span className={`flex-shrink-0 mt-[2px] sm:mt-0 text-[10px] sm:text-xs font-accent font-bold tracking-widest transition-colors ${isOpen ? 'text-[#00E08F]' : 'text-white/25'}`}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <h3 className={`text-[11px] sm:text-sm font-semibold font-accent leading-snug transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
                                                    {faq.question}
                                                </h3>
                                            </div>

                                            {/* Icon */}
                                            <motion.div
                                                animate={{ rotate: isOpen ? 45 : 0 }}
                                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                className={`flex-shrink-0 mt-[2px] sm:mt-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center transition-colors ${isOpen ? 'text-[#00E08F]' : 'text-white/30'}`}
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-full h-full">
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
                                                    <div className="px-4 sm:px-5 pb-3 sm:pb-4 pt-0">
                                                        <div className="pl-6 sm:pl-9 border-t border-[#00E08F]/12 pt-2.5 sm:pt-3">
                                                            <p className="text-white/60 text-xs sm:text-sm leading-relaxed break-words">
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

                    {/* Right: Contact card (desktop) */}
                    <div className="hidden lg:block sticky top-28">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8
                                       shadow-[0_0_40px_rgba(0,224,143,0.05)]"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-[#00E08F]/12 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#00E08F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </div>

                            <h3 className="text-white font-bold text-lg font-accent uppercase tracking-wide mb-2">
                                Still have questions?
                            </h3>
                            <p className="text-white/45 text-sm leading-relaxed mb-6">
                                Can&apos;t find what you&apos;re looking for? Reach out to the Zyro team directly.
                            </p>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00E08F]/30 to-transparent mb-6" />



                            <a
                                href="#terms"
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                                           bg-[#00E08F]/10 border border-[#00E08F]/25 text-[#00E08F]
                                           text-sm font-accent font-bold uppercase tracking-widest
                                           hover:bg-[#00E08F]/20 transition-colors duration-200"
                            >
                                Contact Us
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile contact strip */}
                <motion.div
                    className="lg:hidden mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5 flex items-center justify-between gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white/50 text-sm font-mono">Still have questions?</p>
                    <a
                        href="#terms"
                        className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#00E08F]/10 border border-[#00E08F]/25
                                   text-[#00E08F] text-xs font-accent font-bold uppercase tracking-widest
                                   hover:bg-[#00E08F]/20 transition-colors"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
