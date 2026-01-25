'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { StaggerContainer, StaggerItem } from './AnimationWrappers';
import { Reveal } from './AdvancedAnimations';
import Image from 'next/image';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is Zyro?",
        answer: "Zyro is a green technology platform that combines innovation with sustainability. Our ecosystem features cutting-edge solutions that secure computing power while enabling a wide array of advanced services. We provide sustainable infrastructure for modern applications, helping businesses transition to eco-friendly technology solutions that are optimized for the future."
    },
    {
        question: "How does Zyro contribute to sustainability?",
        answer: "Zyro is committed to environmental sustainability through energy-efficient infrastructure, carbon-neutral operations, and green technology initiatives. We utilize renewable energy sources, implement advanced cooling systems to reduce power consumption, and partner with environmental organizations to offset our carbon footprint."
    },
    {
        question: "What technologies does Zyro use?",
        answer: "Zyro leverages cutting-edge technologies including AI-powered optimization, distributed computing networks, renewable energy integration, and advanced data analytics. Our platform combines modern web technologies with sustainable infrastructure to deliver high-performance solutions."
    },
    {
        question: "How can I get started with Zyro?",
        answer: "Getting started with Zyro is simple. Explore our solutions, choose the services that fit your needs, and join our growing community of environmentally-conscious innovators. Our team is ready to help you transition to sustainable technology solutions."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={containerRef} className="section relative overflow-hidden bg-[#070B0B]">
            {/* Parallax Background Image - Maintained consistency */}
            <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
                <Image
                    src="/images/hero-leaves.jpg"
                    alt="Tropical leaves background"
                    fill
                    className="object-cover opacity-40 scale-110"
                />
            </motion.div>

            {/* Global Overlay to darken - Fixed position (no parallax) */}
            <div className="absolute inset-0 bg-[#070B0B]/30 z-[1] pointer-events-none" />

            {/* Stronger Top/Bottom Blends - Fixed position (no parallax) */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#070B0B] via-[#070B0B]/80 to-transparent z-[1] pointer-events-none" />

            {/* Side Blends - Fixed position (no parallax) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070B0B] via-transparent to-[#070B0B] z-[1] pointer-events-none" />

            {/* Left Circuit Decoration */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg width="100" height="600" viewBox="0 0 100 600" className="opacity-80">
                    <line x1="50" y1="0" x2="50" y2="200" stroke="#00E08F" strokeWidth="2" />
                    <line x1="50" y1="200" x2="80" y2="230" stroke="#00E08F" strokeWidth="2" />
                    <line x1="80" y1="230" x2="80" y2="370" stroke="#00E08F" strokeWidth="2" />
                    <line x1="80" y1="370" x2="50" y2="400" stroke="#00E08F" strokeWidth="2" />
                    <line x1="50" y1="400" x2="50" y2="600" stroke="#00E08F" strokeWidth="2" />

                    <circle cx="50" cy="200" r="4" fill="#00E08F" filter="url(#glow)" />
                    <circle cx="80" cy="230" r="4" fill="#00E08F" filter="url(#glow)" />
                    <circle cx="80" cy="370" r="4" fill="#00E08F" filter="url(#glow)" />
                    <circle cx="50" cy="400" r="4" fill="#00E08F" filter="url(#glow)" />

                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Right Circuit Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="100" height="600" viewBox="0 0 100 600" className="opacity-80">
                    <line x1="50" y1="0" x2="50" y2="200" stroke="#00E08F" strokeWidth="2" />
                    <line x1="50" y1="200" x2="20" y2="230" stroke="#00E08F" strokeWidth="2" />
                    <line x1="20" y1="230" x2="20" y2="370" stroke="#00E08F" strokeWidth="2" />
                    <line x1="20" y1="370" x2="50" y2="400" stroke="#00E08F" strokeWidth="2" />
                    <line x1="50" y1="400" x2="50" y2="600" stroke="#00E08F" strokeWidth="2" />

                    <circle cx="50" cy="200" r="4" fill="#00E08F" filter="url(#glow2)" />
                    <circle cx="20" cy="230" r="4" fill="#00E08F" filter="url(#glow2)" />
                    <circle cx="20" cy="370" r="4" fill="#00E08F" filter="url(#glow2)" />
                    <circle cx="50" cy="400" r="4" fill="#00E08F" filter="url(#glow2)" />

                    <defs>
                        <filter id="glow2">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="container-custom relative z-10 py-20">
                <Reveal direction="up">
                    <div className="mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                            FAQ
                        </h2>
                    </div>
                </Reveal>

                <StaggerContainer staggerDelay={0.1} className="max-w-4xl mx-auto space-y-6">
                    {faqData.map((faq, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* FAQ Card with visible border using background technique */}
                                <div
                                    className="relative cursor-pointer group"
                                    onClick={() => toggleFAQ(index)}
                                    style={{
                                        background: '#646464',
                                        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                                        padding: '1px'
                                    }}
                                >
                                    {/* Inner content with same clip-path */}
                                    <motion.div
                                        className="relative bg-black w-full h-full"
                                        style={{
                                            clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                                        }}
                                        whileHover={{
                                            backgroundColor: '#0A0A0A'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Question header */}
                                        <div className="relative z-10 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex justify-between items-center">
                                            <h3 className="text-white text-base sm:text-lg md:text-xl font-normal pr-4">
                                                {faq.question}
                                            </h3>

                                            {/* Plus/Minus Icon */}
                                            <motion.div
                                                className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                                                animate={{
                                                    rotate: openIndex === index ? 45 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="relative w-full h-full">
                                                    <motion.div
                                                        className="absolute top-1/2 left-0 w-full h-[2px] bg-[#00E08F]"
                                                        style={{ transform: 'translateY(-50%)' }}
                                                    />
                                                    <motion.div
                                                        className="absolute left-1/2 top-0 w-[2px] h-full bg-[#00E08F]"
                                                        style={{ transform: 'translateX(-50%)' }}
                                                    />
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Answer content */}
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-8 pb-6 pt-0">
                                                        <motion.p
                                                            className="text-[#C2C2C2] text-base leading-relaxed"
                                                            initial={{ y: -10 }}
                                                            animate={{ y: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            {faq.answer}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
