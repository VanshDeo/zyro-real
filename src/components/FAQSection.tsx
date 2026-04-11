'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { faqData } from '@/lib/faqData';

/* ── Single FAQ Item ──────────────────────────────────────────── */
function FAQItem({ question, answer, isOpen, onToggle }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`border-b border-white/[0.08] cursor-pointer group select-none active:opacity-75 transition-opacity`}
            onClick={onToggle}
            role="button"
            aria-expanded={isOpen}
        >
            {/* Question Row */}
            <div className="flex items-center justify-between gap-3 py-4">
                <span className={`text-[13px] sm:text-sm font-medium leading-snug transition-colors duration-150
                    ${isOpen ? 'text-[#00E08F]' : 'text-white/75 group-hover:text-white'}`}>
                    {question}
                </span>

                {/* Chevron */}
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                    className={`w-3.5 h-3.5 shrink-0 transition-colors duration-150
                        ${isOpen ? 'text-[#00E08F]' : 'text-white/30 group-hover:text-white/60'}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
            </div>

            {/* Answer */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-[12px] sm:text-[13px] text-white/55 leading-relaxed pr-4">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ── Main Section ─────────────────────────────────────────────── */
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    // Split into two columns for desktop
    const half = Math.ceil(faqData.length / 2);
    const col1 = faqData.slice(0, half);
    const col2 = faqData.slice(half);

    return (
        <section className="relative overflow-hidden bg-[#070B0B] py-14 sm:py-20">
            {/* Static background */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/hero-leaves.jpg" alt="" fill className="object-cover opacity-[0.12]" aria-hidden />
            </div>
            {/* Edge fades */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#070B0B] via-transparent to-[#070B0B]" />
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#070B0B]/80 via-transparent to-[#070B0B]/80" />
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00E08F]/5 blur-[90px] rounded-full pointer-events-none z-[1]" />

            {/* Content */}
            <div className="container-custom relative z-10">

                {/* Header */}
                <div className="mb-8 sm:mb-10">
                    <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="h-px w-6 bg-[#00E08F]/60" />
                        <span className="text-[#00E08F] text-[10px] font-accent uppercase tracking-[0.3em] font-semibold">FAQs</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase font-display tracking-wider leading-none">
                        Got <span className="text-[#00E08F]">Questions?</span>
                    </h2>
                </div>

                {/* Two-column layout on md+, single column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-16 max-w-5xl">
                    {/* Column 1 */}
                    <div>
                        {col1.map((faq, i) => (
                            <FAQItem
                                key={i}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === i}
                                onToggle={() => toggle(i)}
                            />
                        ))}
                    </div>

                    {/* Column 2 — on mobile, continues seamlessly */}
                    <div className="md:border-l md:border-white/[0.06] md:pl-10 lg:pl-16">
                        {col2.map((faq, i) => (
                            <FAQItem
                                key={half + i}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === half + i}
                                onToggle={() => toggle(half + i)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
