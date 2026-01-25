'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Reveal } from './AdvancedAnimations';
import Image from 'next/image';

const partners = [
    { name: 'ChainGPT', row: 1 },
    { name: 'ChainGPT', row: 1 },
    { name: 'Coinzilla', row: 1 },
    { name: 'Partner 4', row: 1 },
    { name: 'Partner 5', row: 1 },
    { name: 'HypeLab', row: 2 },
    { name: 'GT Protocol', row: 2 },
    { name: 'HypeLab', row: 2 },
    { name: 'Partner 9', row: 2 },
    { name: 'Partner 10', row: 2 },
];

export default function PartnersSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.filter(p => p.row === 1).length / 3));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(partners.filter(p => p.row === 1).length / 3)) % Math.ceil(partners.filter(p => p.row === 1).length / 3));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.filter(p => p.row === 1).length / 3));
    };

    return (
        <section ref={containerRef} className="section relative overflow-hidden bg-[#070B0B]">
            {/* Parallax Background Image - Copied from Hero */}
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

            {/* Left Circuit Decoration - Matching Shieldeum exactly */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg width="120" height="550" viewBox="0 0 120 550" className="opacity-90">
                    {/* Main vertical line */}
                    <line x1="60" y1="0" x2="60" y2="180" stroke="#00E08F" strokeWidth="2" />
                    {/* Diagonal bend inward */}
                    <line x1="60" y1="180" x2="90" y2="210" stroke="#00E08F" strokeWidth="2" />
                    {/* Vertical middle section */}
                    <line x1="90" y1="210" x2="90" y2="340" stroke="#00E08F" strokeWidth="2" />
                    {/* Diagonal bend outward */}
                    <line x1="90" y1="340" x2="60" y2="370" stroke="#00E08F" strokeWidth="2" />
                    {/* Bottom vertical */}
                    <line x1="60" y1="370" x2="60" y2="550" stroke="#00E08F" strokeWidth="2" />

                    {/* Nodes - circles and squares */}
                    <circle cx="60" cy="180" r="5" fill="#00E08F" filter="url(#glow-p)" />
                    <circle cx="90" cy="210" r="5" fill="#00E08F" filter="url(#glow-p)" />
                    <circle cx="90" cy="340" r="5" fill="#00E08F" filter="url(#glow-p)" />
                    <circle cx="60" cy="370" r="5" fill="#00E08F" filter="url(#glow-p)" />

                    <defs>
                        <filter id="glow-p">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Right Circuit Decoration - Matching Shieldeum exactly */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg width="120" height="550" viewBox="0 0 120 550" className="opacity-90">
                    {/* Main vertical line */}
                    <line x1="60" y1="0" x2="60" y2="180" stroke="#00E08F" strokeWidth="2" />
                    {/* Diagonal bend inward */}
                    <line x1="60" y1="180" x2="30" y2="210" stroke="#00E08F" strokeWidth="2" />
                    {/* Vertical middle section */}
                    <line x1="30" y1="210" x2="30" y2="340" stroke="#00E08F" strokeWidth="2" />
                    {/* Diagonal bend outward */}
                    <line x1="30" y1="340" x2="60" y2="370" stroke="#00E08F" strokeWidth="2" />
                    {/* Bottom vertical */}
                    <line x1="60" y1="370" x2="60" y2="550" stroke="#00E08F" strokeWidth="2" />

                    {/* Nodes - circles and diamond */}
                    <circle cx="60" cy="180" r="5" fill="#00E08F" filter="url(#glow-p2)" />
                    <circle cx="30" cy="210" r="5" fill="#00E08F" filter="url(#glow-p2)" />
                    {/* Diamond node in middle */}
                    <path d="M 30,270 L 35,275 L 30,280 L 25,275 Z" fill="#00E08F" filter="url(#glow-p2)" />
                    <circle cx="30" cy="275" r="2" fill="#00E08F" />
                    <circle cx="30" cy="340" r="5" fill="#00E08F" filter="url(#glow-p2)" />
                    <circle cx="60" cy="370" r="5" fill="#00E08F" filter="url(#glow-p2)" />

                    <defs>
                        <filter id="glow-p2">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
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
                    <div className="mb-12">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase text-center mb-10">
                            Partners
                        </h2>
                    </div>
                </Reveal>

                {/* Glassmorphic Container with Background Image */}
                <motion.div
                    className="relative rounded-[40px] overflow-hidden"
                    style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background Image - 3D geometric shapes */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-1/2 h-full">
                            <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-900 transform rotate-45 opacity-30"
                                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                            <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-gray-600 to-gray-800 transform -rotate-12 opacity-20"
                                style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
                        </div>
                    </div>

                    {/* Logo Container with Fade Effects */}
                    <div className="relative px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12">
                        {/* Left Fade */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />

                        {/* Right Fade */}
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

                        {/* Row 1 */}
                        <div className="mb-8 overflow-hidden">
                            <motion.div
                                className="flex gap-16 items-center justify-center"
                                animate={{ x: -currentIndex * 300 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                {partners.filter(p => p.row === 1).map((partner, index) => (
                                    <div
                                        key={`row1-${index}`}
                                        className="flex-shrink-0 w-48 h-20 flex items-center justify-center"
                                    >
                                        <div className="text-white text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity filter grayscale brightness-200">
                                            {partner.name}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-16 items-center justify-center"
                                animate={{ x: -currentIndex * 300 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                {partners.filter(p => p.row === 2).map((partner, index) => (
                                    <div
                                        key={`row2-${index}`}
                                        className="flex-shrink-0 w-48 h-20 flex items-center justify-center"
                                    >
                                        <div className="text-white text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity filter grayscale brightness-200">
                                            {partner.name}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Controls */}
                <motion.div
                    className="flex items-center justify-center gap-6 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div
                        className="flex items-center gap-4 px-8 py-4"
                        style={{
                            background: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(100, 100, 100, 0.2)',
                            clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)'
                        }}
                    >
                        <motion.button
                            onClick={handlePrevious}
                            className="text-white hover:text-[#00E08F] transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        <motion.button
                            onClick={handleNext}
                            className="text-white hover:text-[#00E08F] transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
